import { useMemo } from 'react';
import type { ReactNode } from 'react';
import { createContext as createContext_, useContext as useContext_ } from 'react';

export function createContext<ContextValueType extends object | null>(
  rootComponentName: string,
  defaultContext?: ContextValueType,
) {
  const Context = createContext_<ContextValueType | undefined>(defaultContext);

  function Provider(
    props: ContextValueType & {
      children?: ReactNode;
    },
  ) {
    const { children, ...contexts } = props;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = useMemo(() => contexts, Object.values(contexts)) as ContextValueType;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContext(consumerName: string) {
    const context = useContext_(Context);

    if (context) {
      return context;
    }

    if (defaultContext !== undefined) {
      return defaultContext;
    }

    throw new Error(`${consumerName} 컴포넌트는 ${rootComponentName}.Provider 하위에서 사용되어야 합니다.`);
  }

  Provider.displayName = `${rootComponentName}.Provider`;

  return [Provider, useContext] as const;
}

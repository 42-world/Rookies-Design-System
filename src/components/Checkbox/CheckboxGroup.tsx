import { ReactNode, ChangeEventHandler, createContext } from 'react';

interface Props {
  children: ReactNode;
  selectedValue: string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

type CheckboxContextType = Omit<Props, 'children'>;

export const CheckboxContext = createContext<CheckboxContextType | null>(null);

export function CheckboxGroup({ children, ...restProps }: Props) {
  return (
    <CheckboxContext.Provider value={{ ...restProps }}>
      <fieldset className="flex flex-col gap-2">{children}</fieldset>
    </CheckboxContext.Provider>
  );
}

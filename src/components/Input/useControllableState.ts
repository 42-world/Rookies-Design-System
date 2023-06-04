import { useCallback, useState } from 'react';

interface UseControllableStateProps<T> {
  state?: T;
  defaultState?: T | (() => T);
  onChange?: (value: T) => void;
}

export const useControllableState = <T>({
  state: valueFromProps,
  defaultState,
  onChange,
}: UseControllableStateProps<T>) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<T>(
    typeof defaultState === 'function' ? (defaultState as () => T)() : (defaultState as T),
  );
  const isControlled = valueFromProps != undefined;
  const value = isControlled ? valueFromProps : uncontrolledValue;

  const onValueChange = useCallback((nextState: T | (() => T)) => {
    if (typeof nextState === 'function') {
      nextState = (nextState as () => T)();
    }

    if (!isControlled) {
      setUncontrolledValue(nextState);
    }

    onChange?.(nextState);
  }, []);

  return [value, onValueChange] as const;
};

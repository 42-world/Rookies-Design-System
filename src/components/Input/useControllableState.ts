import { useCallback, useState } from 'react';

interface UseControllableStateProps<T> {
  value?: T;
  defaultValue?: T | (() => T);
  onChange?: (value: T) => void;
}

export const useControllableState = <T>({
  value: valueFromProps,
  defaultValue,
  onChange,
}: UseControllableStateProps<T>) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<T>(defaultValue as T);
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

import { ReactNode, ChangeEventHandler, createContext } from 'react';

interface Props {
  children: ReactNode;
  selectedLabel: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

type RadioContextType = Omit<Props, 'children'>;

export const RadioContext = createContext<RadioContextType | null>(null);

export function RadioGroup({ children, ...restProps }: Props) {
  return (
    <RadioContext.Provider value={{ ...restProps }}>
      <fieldset className="flex flex-col gap-2">{children}</fieldset>
    </RadioContext.Provider>
  );
}

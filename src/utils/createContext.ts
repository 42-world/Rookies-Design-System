import { createContext as _createContext, useContext as _useContext } from 'react';

export const createContext = <T>(initialValue: T) => {
  const context = _createContext(initialValue);

  const provider = context.Provider;

  function useContext(consumer?: string) {
    const contextValue = _useContext(context);

    if (!contextValue) {
      throw new Error(`useContext must be used within a Provider, check this ${consumer ?? ''}`);
    }

    return contextValue;
  }

  return [useContext, provider] as const;
};

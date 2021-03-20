import { useState } from 'react';

export const useUpdateState = <T extends object>(init: T) => {
  const [state, setState] = useState<T>(init);

  const updateState = (newValue: Partial<T> | ((state: T) => Partial<T>)) => {
    setState((newState) => ({
      ...newState,
      ...(typeof newValue === 'function' ? newValue(newState) : newValue),
    }));
  };

  const updateField = <F extends keyof T>(field: F) => (value: T[F]) =>
    updateState({ [field]: value } as any);

  const updateFieldCallback = <F extends keyof T>(field: F) => (
    value: T[F]
  ) => () => updateState({ [field]: value } as any);

  return { state, updateState, updateField, updateFieldCallback };
};

import { useCallback, useState } from 'react';

export function useCallbackState<S>(
  initialState: S
): [S, (data: S) => void, (data: S) => () => void];

export function useCallbackState<S = undefined>(): [
  S | undefined,
  (data: S | undefined) => void,
  (data: S | undefined) => () => void
];

export function useCallbackState<T extends any>(initState?: T) {
  const [state, setState] = useState(initState);

  const callback = useCallback((newValue: T) => () => setState(newValue), []);

  return [state, setState, callback] as const;
}

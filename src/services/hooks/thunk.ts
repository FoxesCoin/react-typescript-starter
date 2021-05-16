import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { IReduxStore, TRootActions } from 'services/redux';

type Call = (
  ...args: any[]
) => (
  dispatch: ThunkDispatch<IReduxStore, unknown, TRootActions>,
  getState: () => IReduxStore
) => Promise<any>;

type TThunkDispatch = ThunkDispatch<IReduxStore, any, TRootActions>;
export type TThunkAction<R = void> = (
  dispatch: ThunkDispatch<IReduxStore, unknown, TRootActions>,
  getState: () => IReduxStore
) => Promise<R>;

export const useThunk = () => {
  const dispatch: TThunkDispatch = useDispatch();

  const callThunk = <T extends Call>(action: T) => (...args: Parameters<T>) =>
    dispatch(action(...args)) as ReturnType<ReturnType<T>>;

  const callbackThunk = <T extends Call>(action: T) => (
    ...args: Parameters<T>
  ) => () => dispatch(action(...args)) as ReturnType<ReturnType<T>>;

  return { callThunk, callbackThunk };
};

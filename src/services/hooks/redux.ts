import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { IReduxStore } from 'services/redux/root-reducer';

type TFunction = (...args: any[]) => any;

export const useReduxSelector: TypedUseSelectorHook<IReduxStore> = useSelector;

export const useAction = <T extends TFunction>(action: T) => {
  const dispatch = useDispatch();
  return (...args: Parameters<T>) => {
    dispatch(action(...args));
  };
};

export const useWrappedAction = <T extends TFunction>(action: T) => {
  const dispatch = useDispatch();
  return (...args: Parameters<T>) =>
    () => {
      dispatch(action(...args));
    };
};

export const useReduxDispatch = () => {
  const dispatch = useDispatch();

  const callAction =
    <T extends TFunction>(action: T) =>
    (...args: Parameters<T>) => {
      dispatch(action(...args));
    };

  const callbackAction =
    <T extends TFunction>(action: T) =>
    (...args: Parameters<T>) =>
    () => {
      dispatch(action(...args));
    };

  return { callAction, callbackAction };
};

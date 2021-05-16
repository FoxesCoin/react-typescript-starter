import { useState } from 'react';

import { useGlobalPopup } from './global-popup';

type TFunction = (...args: any[]) => Promise<any>;

export const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { showErrorPopup } = useGlobalPopup();

  const sendRequest = async (callback: () => Promise<void>) => {
    try {
      setIsError(false);
      setIsLoading(true);
      await callback();
    } catch (error) {
      console.error(error);
      showErrorPopup();
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const wrappedRequest =
    <F extends TFunction>(request: F) =>
    (...args: Parameters<F>) =>
      sendRequest(() => request(...args));

  const callbackWrappedRequest =
    <F extends TFunction>(request: F) =>
    (...args: Parameters<F>) =>
    () =>
      sendRequest(() => request(...args));

  const callbackRequest = (callback: () => Promise<void>) => () =>
    sendRequest(callback);

  return {
    isError,
    isLoading,
    sendRequest,
    wrappedRequest,
    callbackRequest,
    callbackWrappedRequest,
  };
};

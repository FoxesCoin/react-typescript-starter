import { useEffect, useState } from 'react';

export const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const sendRequest = async (callback: () => Promise<void>) => {
    try {
      setIsLoading(true);
      await callback();
      setIsLoading(false);
      setErrorMessage(undefined);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  return { errorMessage, isLoading, sendRequest };
};

export const useFetch = <T extends any>(
  callback: () => Promise<T>,
  dependence: any[] = []
) => {
  const [response, setResponse] = useState<T>();
  const { errorMessage, isLoading, sendRequest } = useRequest();

  useEffect(() => {
    sendRequest(async () => {
      const fetchData = await callback();
      setResponse(fetchData);
    });
  }, [...dependence]);

  return <const>[response, errorMessage, isLoading];
};

import { useState } from 'react';

import { useAsyncEffect } from './async-effect';

export const useFetch = <T extends any>(
  callback: () => Promise<T>,
  dependence: any[] = []
) => {
  const [response, setResponse] = useState<T>();

  const data = useAsyncEffect(async () => {
    const fetchData = await callback();
    setResponse(fetchData);
  }, [...dependence]);

  return { response, ...data };
};

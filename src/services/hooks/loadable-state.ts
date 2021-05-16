import { useEffect, useState } from 'react';

export const useLoadableState = <T extends any>(initState: T) => {
  const [state, setState] = useState(initState);

  useEffect(() => {
    setState(initState);
  }, [initState]);

  return <const>[state, setState];
};

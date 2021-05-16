import { useCallback, useEffect } from 'react';

import { useLoadableState } from './loadable-state';

export const useUnsavedPopup = (initState = false) => {
  const [isUpdate, setUpdate] = useLoadableState(initState);

  const onClick = useCallback((event: any) => {
    event.preventDefault();
    event.returnValue = '';
  }, []);

  useEffect(() => {
    if (!isUpdate) {
      return;
    }

    window.addEventListener('beforeunload', onClick);
    return () => {
      window.removeEventListener('beforeunload', onClick);
    };
  }, [isUpdate]);

  return {
    isUpdate,
    setUpdate,
  };
};

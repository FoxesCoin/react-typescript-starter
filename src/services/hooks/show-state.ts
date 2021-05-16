import { useCallback } from 'react';

import { useLoadableState } from './load-state';

export const useShowState = (initState = false) => {
  const [isShow, setShow] = useLoadableState(initState);

  const onShow = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  const onToggle = () => {
    setShow(!isShow);
  };

  return {
    isShow,
    onShow,
    onClose,
    onToggle,
  };
};

export const useToggleState = (initState = false) => {
  const [isShow, setShow] = useLoadableState(initState);

  const onToggle = useCallback(() => setShow((state) => !state), []);

  return [isShow, onToggle] as const;
};

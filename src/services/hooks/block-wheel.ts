import { useRef } from 'react';

const wheelEvent =
  'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

const preventDefault = (event: any) => {
  event.preventDefault();
  return false;
};

export const useWheelBlock = <T extends HTMLElement>() => {
  const ref = useRef<T | null>();

  const onEnter = () => {
    ref.current?.addEventListener(wheelEvent, preventDefault);
  };
  const onLeave = () => {
    ref.current?.removeEventListener(wheelEvent, preventDefault);
  };

  return { ref, onEnter, onLeave };
};

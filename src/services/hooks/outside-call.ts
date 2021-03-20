import { createRef, useEffect } from 'react';

export const useOutsideAlerter = <T extends HTMLElement>(
  callback: () => void
) => {
  const ref = createRef<T>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target as any)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);

  return ref;
};

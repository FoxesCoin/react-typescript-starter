import { RefObject, useEffect, useRef } from 'react';

export const useHeightAnimation = (isOpen: boolean) => {
  const ref = useRef<HTMLDivElement>();
  const height = isOpen ? ref.current?.scrollHeight ?? 0 : 0;

  useEffect(() => {
    return;
  }, [ref]);

  return { ref: ref as RefObject<HTMLDivElement>, height };
};

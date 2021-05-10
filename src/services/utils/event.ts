import { ChangeEventHandler, MouseEventHandler } from 'react';

export const handleClickEvent = <T extends HTMLElement>(
  callback?: () => void
): MouseEventHandler<T> => (event) => {
  if (callback) {
    callback();
  }

  event.preventDefault();
  event.stopPropagation();
};

export const handleChangeEvent = <
  E extends HTMLInputElement | HTMLTextAreaElement,
  V extends any
>(
  onChange: (value: V) => void
): ChangeEventHandler<E> => (event) => {
  const value = event.target.value as V;
  onChange(value);
};

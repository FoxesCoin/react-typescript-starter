import { FC, ReactChild } from 'react';

interface IComponent {
  className?: string;
  children?: null;
}

interface IWrapper {
  className?: string;
  children: ReactChild;
}

export type TComponent<T extends any> = FC<T & IComponent>;
export type TWrapper<T extends any> = FC<T & IWrapper>;

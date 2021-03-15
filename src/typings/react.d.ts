import { FC, ReactNode } from 'react';

interface IComponent {
  className?: string;
  children?: null;
}

interface IWrapper {
  className?: string;
  children: ReactNode;
}

export type TComponent<T = {}> = FC<T & IComponent>;
export type TWrapper<T = {}> = FC<T & IWrapper>;

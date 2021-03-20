import { FC, ReactNode } from 'react';

export interface IComponent {
  className?: string;
  children?: null;
}

export interface IWrapper {
  className?: string;
  children: ReactNode;
}

export type TComponent<T = {}> = FC<T & IComponent>;
export type TWrapper<T = {}> = FC<T & IWrapper>;

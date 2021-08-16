import { FC, ReactNode } from 'react';

export interface IReactComponent {
  className?: string;
  children?: null;
}

export interface IReactWrapper {
  className?: string;
  children: ReactNode;
}

interface IReactPage {
  className?: null;
  children?: null;
}

interface IReactContainer {
  className?: string;
  children?: ReactNode;
}

export type TComponent<T = {}> = FC<T & IReactComponent>;
export type TWrapper<T = {}> = FC<T & IReactWrapper>;
export type TContainer<T = {}> = FC<T & IReactContainer>;
export type TPage = FC<IReactPage>;

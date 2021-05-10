import { ReactNode } from 'react';

type TReturnType = ReactElement<any, any> | null;
type TFunctionComponent<T extends any> = (props: T) => TReturnType;

interface IComponentProps {
  className?: string;
}

interface IContainer extends IComponentProps {
  children?: ReactNode;
}

interface IComponent extends IComponentProps {
  children?: null;
}

interface IWrapper extends IComponentProps {
  children: ReactNode;
}

export type TComponent<T = {}> = TFunctionComponent<T & IComponent>;
export type TWrapper<T = {}> = TFunctionComponent<T & IWrapper>;
export type TContainer<T = {}> = TFunctionComponent<T & IContainer>;
export type TPage = () => TReturnType;

import { createContext, useContext } from 'react';

import { IReactWrapper } from 'typings/react';

import { Theme } from 'style/theme';

export interface ITabParameters<S = any> {
  item: S;

  setItem: (item: S) => void;
}

const INIT_VALUE: ITabParameters = {
  item: '',
  setItem: () => {
    return;
  },
};

const Context = createContext(INIT_VALUE);
export const useTabContext = (): ITabParameters => useContext(Context);

export const TabContext = <S extends any>(
  props: ITabParameters<S> & IReactWrapper
) => {
  const { className, children, item, setItem } = props;

  return (
    <Context.Provider value={{ item, setItem }}>
      <Theme.AllSpace className={className}>{children}</Theme.AllSpace>
    </Context.Provider>
  );
};

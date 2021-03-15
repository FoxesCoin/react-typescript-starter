import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import { TWrapper } from 'typings/react';

export interface ISelectorParameters {
  value: ISelectorValue;

  setValue: (value: ISelectorValue) => void;
}

interface ISelectorContext extends ISelectorParameters {
  isOpen: boolean;

  setOpen: (isOpen: boolean) => void;
}

const INIT_VALUE: ISelectorContext = {
  isOpen: false,
  value: { label: '' },

  setOpen: () => {},
  setValue: () => {},
};

const Context = createContext(INIT_VALUE);
const Wrapper = styled.div`
  position: relative;
`;

export const useSelectorContext = () => useContext(Context);

export const SelectorContext: TWrapper<ISelectorParameters> = (parameters) => {
  const { children, className, ...context } = parameters;
  const [isOpen, setOpen] = useState(false);

  return (
    <Context.Provider value={{ isOpen, setOpen, ...context }}>
      <Wrapper className={className}>{children}</Wrapper>
    </Context.Provider>
  );
};

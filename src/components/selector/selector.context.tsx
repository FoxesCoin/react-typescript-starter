import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';

import { useOutsideCall } from 'services/hooks';

import { SelectorTheme, TSelectorTheme } from './selector.constants';

import { TWrapper } from 'typings/react';

export interface ISelectorParameters {
  value: any;
  disabled?: boolean;
  styled?: TSelectorTheme;

  setValue: (value: any) => void;
}

interface ISelectorContext extends ISelectorParameters {
  isOpen: boolean;

  setOpen: (isOpen: boolean) => void;
}

const INIT_VALUE: ISelectorContext = {
  isOpen: false,
  value: '',
  disabled: false,

  setOpen: () => {
    return;
  },
  setValue: () => {
    return;
  },
};

const Context = createContext(INIT_VALUE);
const Wrapper = styled.div<{ styled?: TSelectorTheme; disabled?: boolean }>`
  position: relative;
  ${(props) => (props.styled ? SelectorTheme[props.styled] : '')}
`;

export const useSelectorContext = (): ISelectorContext => useContext(Context);

export const SelectorContext: TWrapper<ISelectorParameters> = (parameters) => {
  const {
    children,
    className,
    disabled,
    styled: theme,
    ...context
  } = parameters;
  const [isOpen, setOpen] = useState(false);
  const closeSelector = () => {
    setOpen(false);
  };
  const ref = useOutsideCall<HTMLDivElement>(closeSelector);

  return (
    <Context.Provider value={{ isOpen, disabled, setOpen, ...context }}>
      <Wrapper
        ref={ref}
        styled={theme}
        disabled={disabled}
        className={className}
      >
        {children}
      </Wrapper>
    </Context.Provider>
  );
};

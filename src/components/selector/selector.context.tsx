import { createContext, ReactNode, useContext, useState } from 'react';
import styled from 'styled-components';

import { useOutsideAlerter } from 'services/hooks';

export interface ISelectorParameters {
  value: any;

  setValue: (value: any) => void;
}

interface ISelectorContext extends ISelectorParameters {
  isOpen: boolean;

  setOpen: (isOpen: boolean) => void;
}

export interface ISelectorProps extends ISelectorParameters {
  children: ReactNode;

  className?: string;
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

export const SelectorProvider = (parameters: ISelectorProps) => {
  const { children, className, ...context } = parameters;
  const [isOpen, setOpen] = useState(false);
  const closeSelector = () => {
    setOpen(false);
  };
  const ref = useOutsideAlerter<HTMLDivElement>(closeSelector);

  return (
    <Context.Provider value={{ isOpen, setOpen, ...context }}>
      <Wrapper ref={ref} className={className}>
        {children}
      </Wrapper>
    </Context.Provider>
  );
};

import { createContext, useContext } from 'react';

import { useLoadableState } from 'services/hooks';

import { TWrapper } from 'typings/react';

export interface IAccordionParameters {
  isOpen?: boolean;

  setOpen?: (isOpen: boolean) => void;
}

export interface IAccordionContext {
  isOpen: boolean;

  setOpen: (isOpen: boolean) => void;
}

const INIT_VALUE: IAccordionContext = {
  isOpen: false,
  setOpen: () => {
    return;
  },
};

const Context = createContext(INIT_VALUE);
export const useAccordionContext = (): IAccordionContext => useContext(Context);

export const AccordionContext: TWrapper<IAccordionParameters> = (props) => {
  const { children, className, isOpen = false, setOpen } = props;

  const [isAccordionOpen, setIsAccordionOpen] = useLoadableState(isOpen);

  const onChangeStatus = (newStatus: boolean) => {
    setIsAccordionOpen(newStatus);
    if (setOpen) {
      setOpen(newStatus);
    }
  };

  return (
    <Context.Provider
      value={{
        isOpen: isAccordionOpen,
        setOpen: onChangeStatus,
      }}
    >
      <div className={className}>{children}</div>
    </Context.Provider>
  );
};

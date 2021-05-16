import { useAccordionContext } from '../accordion.context';

import { TWrapper } from 'typings/react';

import { Theme } from 'style/theme';

export const AccordionHeader: TWrapper = (props) => {
  const { className, children } = props;

  const { isOpen, setOpen } = useAccordionContext();

  const onClick = () => {
    setOpen(!isOpen);
  };

  return (
    <Theme.FlexLine
      className={`${className} accordion-header`}
      onClick={onClick}
    >
      {children}
    </Theme.FlexLine>
  );
};

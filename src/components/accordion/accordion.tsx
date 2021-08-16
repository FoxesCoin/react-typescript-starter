import { AccordionContext, IAccordionParameters } from './accordion.context';
import { AccordionContent, AccordionHeader } from './components';

import { IReactWrapper } from 'typings/react';

interface IProps extends IReactWrapper, IAccordionParameters {}

export const Accordion = (props: IProps) => {
  const { className, children, isOpen, setOpen } = props;

  return (
    <AccordionContext
      className={`${className} accordion`}
      isOpen={isOpen}
      setOpen={setOpen}
    >
      {children}
    </AccordionContext>
  );
};

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

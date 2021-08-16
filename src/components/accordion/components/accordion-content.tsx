import { useAccordionContext } from '../accordion.context';

import { useHeightAnimation } from 'services/hooks';

import { TWrapper } from 'typings/react';

import { Theme } from 'style/theme';

export const AccordionContent: TWrapper = (props) => {
  const { className, children } = props;

  const { isOpen } = useAccordionContext();
  const { height, ref } = useHeightAnimation(isOpen);

  return (
    <Theme.ToggleContent
      ref={ref}
      className={`${className} accordion-content`}
      style={{ height }}
    >
      {children}
    </Theme.ToggleContent>
  );
};

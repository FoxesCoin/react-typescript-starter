import { SelectorHeader, SelectorItem, SelectorMenu } from './components';
import { ISelectorParameters, SelectorContext } from './selector.context';

import { IReactWrapper } from 'typings/react';

interface IProps extends IReactWrapper, ISelectorParameters {}

export const Selector = (props: IProps) => {
  const { className, children, ...context } = props;

  return (
    <SelectorContext className={className} {...context}>
      {children}
    </SelectorContext>
  );
};

Selector.Header = SelectorHeader;
Selector.Item = SelectorItem;
Selector.Menu = SelectorMenu;

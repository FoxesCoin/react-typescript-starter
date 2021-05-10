import { SelectorHeader, SelectorItem, SelectorMenu } from './components';
import { ISelectorProps, SelectorProvider } from './selector.context';

export const Selector = (props: ISelectorProps) => (
  <SelectorProvider {...props} />
);

Selector.Item = SelectorItem;
Selector.Header = SelectorHeader;
Selector.Menu = SelectorMenu;

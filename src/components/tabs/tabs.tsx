import { ReactNode } from 'react';

import { TabHeader, TabPanel } from './components';
import { ITabParameters, TabContext } from './tab.context';

interface IProps extends ITabParameters {
  children: ReactNode;
  className?: string;
}

export const Tabs = (props: IProps) => {
  const { children, item, setItem, className } = props;

  return (
    <TabContext className={className} item={item} setItem={setItem}>
      {children}
    </TabContext>
  );
};

Tabs.Header = TabHeader;
Tabs.Panel = TabPanel;

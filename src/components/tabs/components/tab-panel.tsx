import { useTabContext } from '../tab.context';

import { TWrapper } from 'typings/react';

import { Theme } from 'style/theme';

interface IProps {
  value: string;
}

export const TabPanel: TWrapper<IProps> = (props) => {
  const { className, children, value } = props;
  const { item } = useTabContext();

  if (value !== item) {
    return null;
  }

  return <Theme.AllSpace className={className}>{children}</Theme.AllSpace>;
};

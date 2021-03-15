import React from 'react';

import {
  SelectorHeader,
  SelectorItem,
  SelectorMenu,
  ISelectorHeaderProps,
} from './components';
import { SelectorContext, ISelectorParameters } from './selector.context';

import { TComponent } from 'typings/react';

interface ISelector extends ISelectorParameters, ISelectorHeaderProps {
  items: ISelectorValue[];
}

export const Selector: TComponent<ISelector> = (props) => {
  const { items, children, placeholder, ...selector } = props;
  return (
    <SelectorContext {...selector}>
      <SelectorHeader placeholder={placeholder} />
      <SelectorMenu>
        {items.map((item) => (
          <SelectorItem value={item} key={item.label} />
        ))}
      </SelectorMenu>
    </SelectorContext>
  );
};

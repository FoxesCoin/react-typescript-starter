import React from 'react';

import {
  SelectorHeader,
  SelectorItem,
  SelectorMenu,
  ISelectorHeaderProps,
} from './components';
import { SelectorContext } from './selector.context';

import { TComponent } from 'typings/react';

interface ISimpleSelector extends ISelectorHeaderProps {
  items: string[];
  value: string;

  setValue: (value: string) => void;
}

export const SimpleSelector: TComponent<ISimpleSelector> = (props) => {
  const { items, value, className, setValue, placeholder } = props;

  const changeValue = (newValue: ISelectorValue) => {
    setValue(newValue.label);
  };

  return (
    <SelectorContext
      setValue={changeValue}
      className={className}
      value={{ label: value }}
    >
      <SelectorHeader placeholder={placeholder} />
      <SelectorMenu>
        {items.map((item) => (
          <SelectorItem value={{ label: item }} key={item} />
        ))}
      </SelectorMenu>
    </SelectorContext>
  );
};

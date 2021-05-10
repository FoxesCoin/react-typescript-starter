import { Selector } from './selector/selector';

import { IComponent } from 'typings/react';

interface ISimpleSelectorProps<T extends TSimple> extends IComponent {
  value: T;
  placeholder: string;
  items: T[];

  setValue: (value: T) => void;
}

export const SimpleSelector = <T extends TSimple>(
  props: ISimpleSelectorProps<T>
) => {
  const { className, value, placeholder, items, setValue } = props;

  return (
    <Selector className={className} value={value} setValue={setValue}>
      <Selector.Header>{value || placeholder}</Selector.Header>
      <Selector.Menu>
        {items.map((item) => (
          <Selector.Item value={item} key={item} isSelected={value === item}>
            {item}
          </Selector.Item>
        ))}
      </Selector.Menu>
    </Selector>
  );
};

import { Selector } from '../../selector';
import { SelectorItem } from './selector-item';

interface IMultiSimpleSelectorProps<T extends TSimple> {
  value: T[];
  items: T[];

  setValue: (value: T) => void;
}

export const MultiSimpleSelector = <T extends TSimple>(
  props: IMultiSimpleSelectorProps<T>
) => {
  const { value, items, setValue } = props;

  return (
    <Selector value={value} setValue={setValue}>
      <Selector.Header>
        {value.map((item, index) => (
          <SelectorItem key={index} item={item} setValue={setValue} />
        ))}
      </Selector.Header>
      <Selector.Menu>
        {items.map((item) => (
          <Selector.Item
            value={item}
            key={item}
            isSelected={value.includes(item)}
          >
            {item}
          </Selector.Item>
        ))}
      </Selector.Menu>
    </Selector>
  );
};

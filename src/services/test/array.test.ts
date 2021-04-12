import { toggleItemInObjectArray, toggleItemInSimpleArray } from 'services/utils';

interface IItem {
  value: string;
  label: string;
}

const SIMPLE_ARRAY: string[] = ['a', 'b', 'c'];

const NEW_ITEM: IItem = {
  label: 'fourth',
  value: 'value',
};
const OLD_ITEM: IItem = {
  label: 'first',
  value: 'value',
};
const ITEM_ARRAY: IItem[] = [
  OLD_ITEM,
  OLD_ITEM,
  {
    label: 'second',
    value: 'value',
  },
  {
    label: 'third',
    value: 'value',
  },
];

test('Toggle primitive type array', () => {
  expect(toggleItemInSimpleArray(SIMPLE_ARRAY, 'a')).toEqual(['b', 'c']);
  expect(toggleItemInSimpleArray(SIMPLE_ARRAY, 'd')).toEqual([
    ...SIMPLE_ARRAY,
    'd',
  ]);
});

test('Toggle object type array', () => {
  expect(toggleItemInObjectArray(ITEM_ARRAY, NEW_ITEM, 'label')).toEqual([
    ...ITEM_ARRAY,
    NEW_ITEM,
  ]);
  expect(toggleItemInObjectArray(ITEM_ARRAY, OLD_ITEM, 'label')).toEqual([
    OLD_ITEM,
    ITEM_ARRAY[2],
    ITEM_ARRAY[3],
  ]);
});

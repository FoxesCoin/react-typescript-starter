import { updateObjectArray } from 'services/utils';

interface IItem {
  value: string;
  label: string;
}

const OLD_ITEM: IItem = {
  label: 'first',
  value: 'value',
};

const NEW_VALUE: Partial<IItem> = {
  label: 'NEW LABEL',
};

const SEARCH_VALUE: Partial<IItem> = {
  label: 'second',
};

const ITEM_ARRAY: IItem[] = [
  OLD_ITEM,
  OLD_ITEM,
  {
    label: 'second',
    value: 'value',
  },
  {
    label: 'second',
    value: 'value',
  },
];

const UPDATED_ARRAY: IItem[] = [
  OLD_ITEM,
  OLD_ITEM,
  {
    label: 'NEW LABEL',
    value: 'value',
  },
  {
    label: 'second',
    value: 'value',
  },
];

test('Update object type array', () => {
  expect(
    updateObjectArray({
      array: ITEM_ARRAY,
      newValues: NEW_VALUE,
      search: SEARCH_VALUE,
    })
  ).toEqual(UPDATED_ARRAY);
});

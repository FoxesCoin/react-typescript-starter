import { deepClone } from '../utils/object';

const SIMPLE_OBJECT = {
  a: 'value',
};
const SIMPLE_OBJECT_WITH_PRIMITIVE_ARRAY = {
  a: 'value',
  b: ['value'],
};
const SIMPLE_OBJECT_WITH_PRIMITIVE_ARRAY_AND_FUNCTION = {
  a: 'value',
  b: [
    'value',
    () => {
      return;
    },
  ],
};
const PRIMITIVE_OBJECT = {
  a: 'value',
  b: ['value', null, undefined, true, 1],
  c: 1,
  d: true,
  e: undefined,
  i: null,
  date: new Date(),
};

const PRIMITIVE_OBJECT_WITH_FUNCTION = {
  a: 'value',
  b: [
    'value',
    null,
    undefined,
    true,
    1,
    () => {
      return;
    },
  ],
  c: 1,
  d: true,
  e: undefined,
  i: null,
};

const PRIMITIVE_OBJECT_WITH_FUNCTION_AND_ARRAY = {
  a: 'value',
  b: ['value', null, undefined, true, 1],
  c: 1,
  d: true,
  e: undefined,
  i: null,
  f: () => {
    return;
  },
};

const DEEP_OBJECT = {
  a: { b: { c: { d: { e: { f: { g: { i: true } } } } } } },
};

const DEEP_OBJECT_WITH_DEEP_ARRAY = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: {
                i: [{ b: { c: { d: { e: { f: { g: { i: true } } } } } } }],
              },
            },
          },
        },
      },
    },
  },
};

test('cloneObject. Test many variation with clone object.', () => {
  expect(deepClone(PRIMITIVE_OBJECT)).toEqual(PRIMITIVE_OBJECT);
  expect(deepClone(SIMPLE_OBJECT)).toEqual(SIMPLE_OBJECT);
  expect(deepClone(SIMPLE_OBJECT_WITH_PRIMITIVE_ARRAY)).toEqual(
    SIMPLE_OBJECT_WITH_PRIMITIVE_ARRAY
  );
  expect(deepClone(DEEP_OBJECT)).toEqual(DEEP_OBJECT);
  expect(deepClone(DEEP_OBJECT_WITH_DEEP_ARRAY)).toEqual(
    DEEP_OBJECT_WITH_DEEP_ARRAY
  );
  expect(deepClone(SIMPLE_OBJECT_WITH_PRIMITIVE_ARRAY_AND_FUNCTION)).toEqual(
    SIMPLE_OBJECT_WITH_PRIMITIVE_ARRAY_AND_FUNCTION
  );
  expect(deepClone(PRIMITIVE_OBJECT_WITH_FUNCTION)).toEqual(
    PRIMITIVE_OBJECT_WITH_FUNCTION
  );
  expect(deepClone(PRIMITIVE_OBJECT_WITH_FUNCTION_AND_ARRAY)).toEqual(
    PRIMITIVE_OBJECT_WITH_FUNCTION_AND_ARRAY
  );
});

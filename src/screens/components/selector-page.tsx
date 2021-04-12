import { useState } from 'react';

import { IImageSelectorItem, ImageSelector } from 'components/image-selector';
import { MultiSimpleSelector } from 'components/multi-simple-selector';
import { SimpleSelector } from 'components/simple-selector';

import { toggleItemInSimpleArray } from 'services/utils';

import { TPage } from 'typings/react';

export const SelectorPage: TPage = () => {
  const [data, setData] = useState('');
  const [imageItem, setImageItem] = useState<IImageSelectorItem>({
    label: '',
    value: '',
    picture: 'logo',
  });

  const [simpleMultiple, setSimpleMultiple] = useState<string[]>([]);
  const updateSimple = (item: string) => {
    setSimpleMultiple(toggleItemInSimpleArray(simpleMultiple, item));
  };

  return (
    <div>
      <SimpleSelector
        items={['First', 'Second', 'Third']}
        value={data}
        setValue={setData}
        placeholder="TEXT"
      />
      <ImageSelector
        value={imageItem}
        setValue={setImageItem}
        items={[
          { label: 'Test 1', value: 'Test 1', picture: 'logo' },
          { label: 'Test 2', value: 'Test 2', picture: 'logo' },
          { label: 'Test 3', value: 'Test 3', picture: 'logo' },
        ]}
      />
      <MultiSimpleSelector
        items={['First', 'Second', 'Third']}
        setValue={updateSimple}
        value={simpleMultiple}
      />
    </div>
  );
};

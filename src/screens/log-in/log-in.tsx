import { useState } from 'react';

import {
    IImageSelectorItem, ImageSelector, MultiSimpleSelector, SimpleSelector
} from 'components/selector';
import { TextInput } from 'components/text-input';

import { updateSimpleArray } from 'services/utils';

import { TComponent } from 'typings/react';

export const LogIn: TComponent = (props) => {
  const { className } = props;

  const [data, setData] = useState('');
  const [imageItem, setImageItem] = useState<IImageSelectorItem>({
    label: '',
    value: '',
    picture: 'logo',
  });

  const [simpleMultiple, setSimpleMultiple] = useState<string[]>([]);
  const updateSimple = (item: string) => {
    setSimpleMultiple(updateSimpleArray(simpleMultiple, item));
  };

  return (
    <div className={className}>
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
      <TextInput title="Title" error value={data} setValue={setData} />
    </div>
  );
};

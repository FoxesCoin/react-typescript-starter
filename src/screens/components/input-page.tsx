import React, { useState } from 'react';

import { IconTextArea, IconTextInput, TextArea, TextInput } from 'components/text-input';

import { TPage } from 'typings/react';

export const InputPage: TPage = () => {
  const [data, setData] = useState('');
  const [area, setArea] = useState('');

  return (
    <div>
      <TextInput title="Title" value={data} onChange={setData} />
      <IconTextInput
        title="Title"
        value={data}
        onChange={setData}
        picture={{
          image: 'logo',
        }}
      />
      <TextArea value={area} onChange={setArea} title="Title" />
      <IconTextArea
        picture={{ image: 'logo' }}
        value={area}
        onChange={setArea}
        title="Title"
      />
    </div>
  );
};

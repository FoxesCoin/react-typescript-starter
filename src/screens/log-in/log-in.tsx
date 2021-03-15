import { SimpleSelector } from 'components/selector';
import { TextInput } from 'components/text-input';
import React, { FC, useState } from 'react';

interface ILogInProps {
  className?: string;
}

export const LogIn: FC<ILogInProps> = (props) => {
  const { className } = props;

  const [data, setData] = useState('');

  return (
    <div className={className}>
      <SimpleSelector
        items={['First', 'Second', 'Third']}
        value={data}
        setValue={setData}
        placeholder="TEXT"
      />
      <TextInput title="Title" error value={data} setValue={setData} />
    </div>
  );
};

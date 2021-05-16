import { InputField, ITextInputExtendsProps } from './input.base';

import { handleChangeEvent } from 'services/utils';

import { TComponent } from 'typings/react';

interface IInputProps extends ITextInputExtendsProps {
  isError?: boolean;
}

export const Input: TComponent<IInputProps> = (props) => {
  const { styling, onChange, ...parameters } = props;

  return (
    <InputField
      onChange={handleChangeEvent(onChange)}
      styling={styling}
      contentEditable={false}
      {...parameters}
    />
  );
};

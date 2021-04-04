import { handleChangeEvent } from 'services/utils';
import { validateInput } from '../text-input.utils';

import { TComponent } from 'typings/react';
import { IInputParameters, IInputStyled } from '../text-input.typings';

import { InputStyled } from './input.styled';

interface IInputProps extends IInputParameters, IInputStyled {}

export const TemplateTexInput: TComponent<IInputProps> = (props) => {
  const { onChange, value, type, isError, ...input } = props;

  return (
    <InputStyled.Field
      value={value}
      type={type}
      isError={isError || validateInput(value, type)}
      onChange={handleChangeEvent(onChange)}
      {...input}
    />
  );
};

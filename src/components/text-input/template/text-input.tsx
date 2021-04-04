import { IInputWrapperProps, InputWrapper, TemplateTexInput } from '../components';

import { getInputParameters, getWrapperProps } from '../text-input.utils';

import { TComponent } from 'typings/react';
import { IInputParameters } from '../text-input.typings';

interface ITextInputProps extends IInputWrapperProps, IInputParameters {}

export const TextInput: TComponent<ITextInputProps> = (props) => {
  const { type, error } = props;

  const wrapper = getWrapperProps(props);
  const input = getInputParameters(props);

  return (
    <InputWrapper error={error} {...wrapper}>
      <TemplateTexInput isError={!!error} type={type} {...input} />
    </InputWrapper>
  );
};

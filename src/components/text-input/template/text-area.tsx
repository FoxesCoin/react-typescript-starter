import { IInputWrapperProps, InputWrapper, TemplateTextArea } from '../components';

import { getTextAreaParameters, getWrapperProps } from '../text-input.utils';

import { TComponent } from 'typings/react';
import { TTextAreaParameters } from '../text-input.typings';

interface ITextAreaProps extends IInputWrapperProps, TTextAreaParameters {}

export const TextArea: TComponent<ITextAreaProps> = (props) => {
  const { error } = props;

  const wrapper = getWrapperProps(props);
  const input = getTextAreaParameters(props);

  return (
    <InputWrapper error={error} {...wrapper}>
      <TemplateTextArea isError={!!error} {...input} />
    </InputWrapper>
  );
};

import { useEffect, useState } from 'react';

import { IInputExtendedProps, Input, ITextInputExtendsProps } from './input';
import { IInputTitleWrapperProps, InputTitleWrapper } from './input-title-wrapper';
import { InputValidationWrapper } from './input-validation-wrapper';

import { validateInput } from './input/input.utils';

import { TComponent } from 'typings/react';

type TExtends = IInputTitleWrapperProps &
  IInputExtendedProps &
  ITextInputExtendsProps;
interface IProps extends TExtends {
  title: string;
  errorMessage: string;
}

export const ValidateInput: TComponent<IProps> = (props) => {
  const { title, errorMessage, type, value, ...input } = props;
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!value) {
      return;
    }
    setError(validateInput(value, type));
  }, [type, value]);

  return (
    <InputTitleWrapper title={title}>
      <InputValidationWrapper errorMessage={errorMessage} isError={isError}>
        <Input {...input} type={type} value={value} isError={isError} />
      </InputValidationWrapper>
    </InputTitleWrapper>
  );
};

import styled from 'styled-components';

import { IInputWrapperProps, InputWrapper, TemplateTexInput } from '../components';
import { IconWrapper } from '../components/icon-wrapper';

import {
    getInputIconDimension, getInputParameters, getSize, getWrapperProps
} from '../text-input.utils';

import { TComponent } from 'typings/react';
import { IIconWrapper, IIconWrapperStyled, IInputParameters } from '../text-input.typings';

type TProps = IInputWrapperProps & IInputParameters & IIconWrapper;

const InputField = styled(TemplateTexInput)<IIconWrapperStyled>`
  ${(props) => `padding-${getSize('0.5rem')(props)}`};
`;

export const IconTextInput: TComponent<TProps> = (props) => {
  const { type, error, picture } = props;

  const imageSizes = getInputIconDimension(props);
  const wrapper = getWrapperProps(props);
  const input = getInputParameters(props);

  return (
    <InputWrapper error={error} {...wrapper}>
      <IconWrapper picture={picture}>
        <InputField isError={!!error} type={type} {...input} {...imageSizes} />
      </IconWrapper>
    </InputWrapper>
  );
};

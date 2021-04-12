import styled from 'styled-components';

import { IInputWrapperProps, InputWrapper, TemplateTextArea } from '../components';
import { IconWrapper } from '../components/icon-wrapper';

import {
    getInputIconDimension, getPositionSize, getTextAreaParameters, getWrapperProps
} from '../text-input.utils';

import { TComponent } from 'typings/react';
import { IIconWrapper, IIconWrapperStyled, TTextAreaParameters } from '../text-input.typings';

type TProps = IInputWrapperProps & TTextAreaParameters & IIconWrapper;

const Input = styled(TemplateTextArea)<IIconWrapperStyled>`
  ${(props) => `padding-${getPositionSize('0.5rem')(props)}`};
`;

export const IconTextArea: TComponent<TProps> = (props) => {
  const { error, picture } = props;

  const imageSizes = getInputIconDimension(props);
  const input = getTextAreaParameters(props);
  const wrapper = getWrapperProps(props);

  return (
    <InputWrapper {...wrapper} error={error}>
      <IconWrapper picture={picture}>
        <Input isError={!!error} {...input} {...imageSizes} />
      </IconWrapper>
    </InputWrapper>
  );
};

import styled from 'styled-components';

import { COLORS } from 'style/colors';
import { Z_INDEX } from 'style/z-index';

import { TWrapper } from 'typings/react';

import { Theme } from 'style/theme';

interface IWrapperStyled {
  isError: boolean;
}
export interface IInputValidationWrapperProps extends IWrapperStyled {
  errorMessage: string;
}

const Error = styled(Theme.Paragraph)<IWrapperStyled>`
  padding-top: 0.25rem;
  transition: all 1s;
  color: ${(props) => (props.isError ? COLORS.orangeSoda : COLORS.transparent)};
  transform: translateY(${(props) => (props.isError ? 0 : '-100%')});
  position: absolute;
  z-index: ${Z_INDEX.IMAGE_GRADIENT};
`;

const Wrapper = styled.div`
  position: relative;
`;

export const InputValidationWrapper: TWrapper<IInputValidationWrapperProps> = (
  props
) => {
  const { children, className, errorMessage, isError } = props;

  return (
    <Wrapper className={className}>
      {children}
      <Error isError={isError} typography="content-medium">
        {errorMessage}
      </Error>
    </Wrapper>
  );
};

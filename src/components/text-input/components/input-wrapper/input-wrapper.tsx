import { TWrapper } from 'typings/react';

import { InputWrapperStyled as Styled } from './input-wrapper.styled';

export interface IInputWrapperProps {
  title: string;

  error?: string;
  subtitle?: string;
}

export const InputWrapper: TWrapper<IInputWrapperProps> = (props) => {
  const { title, error, subtitle, children, className } = props;

  return (
    <Styled.Wrapper className={className}>
      <Styled.Title>{title}</Styled.Title>
      {children}
      <Styled.Subtitle isError={!!error}>{error || subtitle}</Styled.Subtitle>
    </Styled.Wrapper>
  );
};

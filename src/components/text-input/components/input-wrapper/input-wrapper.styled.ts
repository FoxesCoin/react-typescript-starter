import styled from 'styled-components';

import { COLORS } from 'style/colors';

import { IInputStyled } from 'components/text-input/text-input.typings';

export const InputWrapperStyled = {
  Wrapper: styled.label`
    display: block;
  `,
  Title: styled.p``,
  Subtitle: styled.p<IInputStyled>`
    color: ${({ isError }) => COLORS[isError ? 'red' : 'black']};
  `,
};

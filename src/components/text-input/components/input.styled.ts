import styled from 'styled-components';

import { COLORS, hex2rgba } from 'style/colors';
import { cssFieldError } from '../text-input.constants';

import { IInputStyled, ITextAreaStyled } from '../text-input.typings';

export const InputStyled = {
  Area: styled.textarea<IInputStyled & ITextAreaStyled>`
    position: relative;
    border-radius: 0.25rem;
    width: 100%;
    padding: ${(props) => props.horizontalPadding}px 1rem;
    line-height: ${(props) => props.lineHeight}px;
    background-color: ${COLORS.transparent};
    border: 1px solid ${COLORS.black};
    resize: none;

    ${({ isError }) => isError && cssFieldError}
  `,
  Field: styled.input<IInputStyled>`
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.25rem;
    border: 1px solid ${COLORS.black};

    ${({ isError }) => isError && cssFieldError}

    &:disabled {
      color: ${hex2rgba(0.2, COLORS.black)};
    }
  `,
};

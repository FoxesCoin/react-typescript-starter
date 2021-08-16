import styled from 'styled-components';

import { COLORS } from 'style/colors';
import { Z_INDEX } from 'style/z-index';
import { ThemeInput, TInputTheme } from './input.constants';

export interface IInputExtendedProps {
  styling?: TInputTheme;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  isError?: boolean;
}

export interface ITextInputExtendsProps extends IInputExtendedProps {
  value?: string;
  type?: TInputType;

  onChange?: (value: string) => void;
}

export interface INumberInputExtendsProps extends IInputExtendedProps {
  value?: number;

  onChange: (value: number) => void;
}

interface IStyled {
  styling?: TInputTheme;
  isError?: boolean;
}

export const InputField = styled.input<IStyled>`
  border: 1px solid
    ${(props) => (props.isError ? COLORS.lightCoral : COLORS.spanishGray)};
  position: relative;
  width: 100%;
  padding: 10px 14px;
  border-radius: 2px;
  z-index: ${Z_INDEX.INPUT_FIELD};

  background-color: ${COLORS.white};

  &::placeholder {
    color: ${COLORS.spanishGray};
  }

  &:disabled {
    background-color: ${COLORS.spanishGray};
    border-color: ${COLORS.black};
  }

  ${(props) => (props.styling ? ThemeInput[props.styling] : '')}
`;

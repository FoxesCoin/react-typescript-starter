import { css } from 'styled-components';

import { COLORS } from 'style/colors';

const WHITE = css`
  color: ${COLORS.black};
  border-color: ${COLORS.white};

  &:disabled {
    background-color: ${COLORS.spanishGray};
    border-color: ${COLORS.spanishGray};
  }
`;

const DARK = css`
  color: ${COLORS.white};
  border-color: ${COLORS.white};
  background-color: ${COLORS.black};

  &:disabled {
    background-color: ${COLORS.spanishGray};
    border-color: ${COLORS.spanishGray};
  }
`;

export const ThemeInput = {
  white: WHITE,
  dark: DARK,
};

export type TInputTheme = keyof typeof ThemeInput;

import { css } from 'styled-components';

import { COLORS } from 'style/colors';

const BLACK = css`
  color: ${COLORS.white};
  background: ${COLORS.black};
  width: 100%;
  padding: 0.75rem 1.5rem;
`;

const DEFAULT = css`
  color: ${COLORS.black};
  background: ${COLORS.white};
  width: 100%;
  padding: 0.75rem 1.5rem;
`;

export const BUTTON_THEME = <const>{
  default: DEFAULT,
  black: BLACK,
};

export type TButtonTheme = keyof typeof BUTTON_THEME;

import { css } from 'styled-components';

import { COLORS } from 'style/colors';

const GrayBox = css<{ disabled?: boolean }>`
  .selector-header {
    padding: 8px;
    border: 1px solid ${COLORS.spanishGray};
  }
`;

const WhiteSelector = css<{ disabled?: boolean }>`
  color: ${COLORS.black};
  background-color: ${(props) =>
    props.disabled ? COLORS.spanishGray : COLORS.white};
  border-radius: 4px;

  .selector-header {
    padding: 8px;
    border-radius: 4px;
  }
`;

export const SelectorTheme = {
  'gray-box': GrayBox,
  white: WhiteSelector,
};
export type TSelectorTheme = keyof typeof SelectorTheme;

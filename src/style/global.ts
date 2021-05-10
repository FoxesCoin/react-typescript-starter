import { createGlobalStyle } from 'styled-components';

import { COLORS } from './colors';
import { FONT_SIZES } from './font-sizes';
import { FONTS, importFont } from './fonts';

export const GlobalStyles = createGlobalStyle`
body,
html,
#root {
	min-height: 100vh;
	width: 100%;
  overflow: hidden;
}

#root {
  color: ${COLORS.black};
  font-size: ${FONT_SIZES.regular};
  font-family: ${FONTS.regular};
}

*, *::before, *::after {
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
}

${Object.values(FONTS).map((font) => importFont(font))}
`;

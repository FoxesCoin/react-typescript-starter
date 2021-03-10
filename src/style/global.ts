import { createGlobalStyle } from "styled-components";

import { COLORS } from "./colors";
import { FONTS_SIZES } from "./font-sizes";
import { importFont } from "./fonts";

export const GlobalStyles = createGlobalStyle`
body,
html,
#root {
  width: 100%;
  height: 100%;
  color: ${COLORS.black};
  font-size: ${FONTS_SIZES.regular};
  font-family: Roboto-Bold;
}

*, *::before, *::after {
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
}

${importFont("Roboto-Bold")}
${importFont("Roboto-Regular")}
`;

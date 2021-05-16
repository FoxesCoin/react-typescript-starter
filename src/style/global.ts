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
}

#root {
  color: ${COLORS.black};
  font-size: ${FONT_SIZES.regular};
  font-family: ${FONTS.regular};
}

*, *::before, *::after {
  box-sizing: border-box;    
  min-width: 0;
  min-height: 0;
}

input,
button,
label {
  outline: unset; 
  border: none;

  &:hover {
    outline: none;
  }
}

label {
  cursor: pointer;
}

input[type='range'] {
  &::-moz-range-thumb {
    border: none;
    outline: none;
  }
  &::-moz-range-progress {
    border: none;
  }
  &::-moz-range-track {
    border: none;
  }
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: max-content;
  background-color: transparent;
}

a {
  text-decoration: unset;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

${Object.values(FONTS).map((font) => importFont(font))}
`;

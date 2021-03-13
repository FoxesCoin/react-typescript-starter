import { css } from 'styled-components';

export const FONTS = <const>{
  bold: 'Roboto-Bold',
  regular: 'Roboto-Regular',
};

export const importFont = (font: string) =>
  css`
    @font-face {
      font-family: '${font}';
      src: url(${require(`../assets/fonts/${font}.woff`).default})
        format('woff');
    }
  `;

export type TFont = keyof typeof FONTS;

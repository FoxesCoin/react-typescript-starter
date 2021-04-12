import { css } from 'styled-components';

import { COLORS, TColor } from 'style/colors';
import { FONT_SIZES, TFontSize } from 'style/font-sizes';
import { FONTS, TFont } from 'style/fonts';

type TFlex = 'space-between' | 'flex-end' | 'flex-start' | 'center';

interface ITextStyled {
  fontSize?: TFontSize;
  color?: TColor;
}

interface IText extends ITextStyled {
  font?: TFont;
}

interface IFlexRow {
  justify?: TFlex;
  gap?: number;
}

export const cssTextStyled = css<ITextStyled>`
  line-height: 1.25;
  ${(props) => props.fontSize && `font-size: ${FONT_SIZES[props.fontSize]};`}
  ${(props) => props.color && `color ${COLORS[props.color]};`}
`;

export const cssText = css<IText>`
  ${cssTextStyled}
  ${(props) => props.font && `font-family: ${FONTS[props.font]};`}
`;

export const cssFlexRow = css<IFlexRow>`
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  gap: ${(props) => props.gap ?? 8}px;
`;

export const cssAbsoluteCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const cssAbsoluteCentralize = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const cssFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cssFullScreen = css`
  min-height: 100%;
  width: 100%;
`;

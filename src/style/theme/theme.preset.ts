import { css } from 'styled-components';

import { COLORS, TColor } from 'style/colors';

interface IFlex {
  gap?: number;
}

export interface ITypographyStyled {
  color?: TColor;
}

export const cssGap = css<IFlex>`
  gap: ${(props) => props.gap ?? 8}px;
`;

export const cssText = css<ITypographyStyled>`
  ${(props) => (props.color ? `color: ${COLORS[props.color]};` : '')}
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

export const cssFullSize = css`
  min-height: 100%;
  width: 100%;
`;

export const cssFullSizeAbsolute = css`
  top: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
`;

export const cssFullSizeFixed = css`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
`;

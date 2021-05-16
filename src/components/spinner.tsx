import styled, { css } from 'styled-components';

import { COLORS, TColor } from 'style/colors';

import { TComponent } from 'typings/react';

export interface ISpinnerProps {
  size: number;

  color?: TColor;
  lineHeight?: number;
}

interface IStyled {
  size: number;
  color: TColor;

  lineHeight?: number;
}

const Wrapper = styled.div<IStyled>(
  ({ color, size, lineHeight }) => css`
    @keyframes spine {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    animation: spine 1s infinite linear;

    border-radius: 50%;
    width: ${size}px;
    height: ${size}px;

    border: ${lineHeight ?? size * 0.2}px solid ${COLORS[color]};
    border-top-color: ${COLORS[color]};
  `
);

export const Spinner: TComponent<ISpinnerProps> = (props) => {
  const { size, className, color = 'black', lineHeight } = props;

  return (
    <Wrapper
      size={size}
      className={className}
      color={color}
      lineHeight={lineHeight}
    />
  );
};

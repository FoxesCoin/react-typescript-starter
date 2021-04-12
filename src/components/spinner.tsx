import styled from 'styled-components';

import { hexToRGBA } from 'services/utils/color';

import { COLORS, TColor } from 'style/colors';

import { TComponent } from 'typings/react';

interface ISpinnerProps {
  color: TColor;
  size: number;

  lineHeight?: number;
}

const Wrapper = styled.div<ISpinnerProps>(
  ({ color, size, lineHeight }) => `
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

  border: ${lineHeight ?? size * 0.2}px solid ${hexToRGBA(COLORS[color], 0.2)};
  border-top-color: ${COLORS[color]};
`
);

export const Spinner: TComponent<ISpinnerProps> = (props) => (
  <Wrapper {...props} />
);

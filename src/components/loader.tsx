import { FC } from 'react';
import styled from 'styled-components';

import { Theme } from 'style/theme';

interface IPageLoaderProps {
  size?: string;
  lineHeight?: string;
  backgroundColor: string;
  color: string;
}

const Loader = styled.div`
  @keyframes load2 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:before,
  &:after {
    content: '';
    border-radius: 50%;
    position: absolute;
  }

  &:before {
    animation: load2 2s infinite ease 1.5s;
  }

  &:after {
    animation: load2 2s infinite ease;
  }

  border-radius: 50%;
  text-indent: -99999em;
  position: relative;
  transform: translateZ(0);
`;

const Wrapper = styled(Theme.FullScreenCenter)<IPageLoaderProps>(
  ({ size, backgroundColor, lineHeight, color }) => `
  --border-radius: calc(${size} + 0.2rem);
  --transform-orientation: calc(${size} / 2 + 0.1rem);

  & .loader {
    width: ${size};
    height: ${size};
    box-shadow: inset 0 0 0 ${lineHeight} ${color}; // animate colored part
  }

  .loader:before {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    transform-origin: var(--transform-orientation);
    top: -0.1rem;
    left: -0.1rem;
  }

  .loader:after {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    transform-origin: 0.1rem var(--transform-orientation);
    top: -0.1rem;
    left: calc(${size} / 2 - 0.1rem);
  }

  .loader:before, .loader:after {
    background: ${backgroundColor};
    width: calc(${size} / 2 + 0.2rem);
    height: var(--border-radius);
  }
`
);

export const PageLoader: FC<IPageLoaderProps> = (props) => {
  const {
    size = '10rem',
    lineHeight = `calc(${size} * 0.15)`,
    backgroundColor,
    color,
  } = props;
  return (
    <Wrapper
      size={size}
      lineHeight={lineHeight}
      backgroundColor={backgroundColor}
      color={color}
      className="load-container load2"
    >
      <Loader className="loader">Loading...</Loader>
    </Wrapper>
  );
};

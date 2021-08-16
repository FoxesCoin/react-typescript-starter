import styled from 'styled-components';

import { Spinner } from './spinner';

import { COLORS } from 'style/colors';
import { Z_INDEX } from 'style/z-index';

import { TComponent } from 'typings/react';

import { Theme } from 'style/theme';

interface IProps {
  isLoading: boolean;
  size?: number;
}

const Wrapper = styled(Theme.FlexCenter)`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: ${Z_INDEX.OVERLAY_MODAL};
  background-color: ${COLORS.opacityOnyx};
`;

export const OverlayLoader: TComponent<IProps> = (props) => {
  const { className, isLoading, size = 32 } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <Wrapper className={className}>
      <Spinner size={size} color="white" />
    </Wrapper>
  );
};

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { COLORS } from 'style/colors';
import { Z_INDEX } from 'style/z-index';

import { cssFullSizeFixed } from 'style/theme';

interface IProps {
  isShow: boolean;
  children: ReactNode;

  className?: string;
}

const Wrapper = styled.div<IProps>`
  ${cssFullSizeFixed}
  transition: 0.5s all;
  overflow: hidden;
  transform: translateX(${(props) => (props.isShow ? '0' : '100%')});
  z-index: ${Z_INDEX.OVERLAY_MODAL};
`;

const Content = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${COLORS.white};
  width: 100%;
  height: 100%;
`;

export const OverlayModal = (props: IProps) => {
  const { className, children, isShow } = props;

  const portal = document.getElementById('portal');

  if (!portal) {
    return null;
  }

  return createPortal(
    <Wrapper isShow={isShow}>
      <Content className={className}>{children}</Content>
    </Wrapper>,
    portal
  );
};

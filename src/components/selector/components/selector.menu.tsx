import React from 'react';
import styled from 'styled-components';

import { useSelectorContext } from '../selector.context';

import { TWrapper } from 'typings/react';
import { Z_INDEX } from 'style/z-index';
import { COLORS } from 'style/colors';

const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  z-index: ${Z_INDEX.SELECTOR};
  background-color: ${COLORS.white};
  width: 100%;
`;

export const SelectorMenu: TWrapper = (props) => {
  const { children, className } = props;
  const { isOpen } = useSelectorContext();

  return (
    <Menu isOpen={isOpen} className={className}>
      {children}
    </Menu>
  );
};

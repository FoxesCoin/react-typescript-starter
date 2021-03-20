import { useRef } from 'react';
import styled from 'styled-components';

import { useSelectorContext } from '../selector.context';

import { COLORS } from 'style/colors';
import { Z_INDEX } from 'style/z-index';

import { TWrapper } from 'typings/react';

const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;

  transition: 0.5s max-height ease-out;
  transform-origin: top center;
  overflow-y: auto;

  z-index: ${Z_INDEX.SELECTOR};
  background-color: ${COLORS.white};
  width: 100%;
`;

interface ISelectorMenuProps {
  contentHeight?: number;
}

export const SelectorMenu: TWrapper<ISelectorMenuProps> = (props) => {
  const { children, className, contentHeight = 500 } = props;
  const ref = useRef<HTMLDivElement>();
  const { isOpen } = useSelectorContext();

  const height = ref?.current?.scrollHeight ?? contentHeight;
  const maxHeight = height > contentHeight ? contentHeight : height;

  return (
    <Menu
      ref={ref as any}
      isOpen={isOpen}
      className={className}
      style={{
        maxHeight: isOpen ? maxHeight : 0,
      }}
    >
      {children}
    </Menu>
  );
};

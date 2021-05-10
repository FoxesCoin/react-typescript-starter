import styled from 'styled-components';

import { Picture } from 'components/picture';
import { useSelectorContext } from '../selector.context';

import { handleClickEvent } from 'services/utils';

import { COLORS } from 'style/colors';

import { TWrapper } from 'typings/react';

import { Theme } from 'style/theme';

const Wrapper = styled(Theme.GapRow)`
  padding: 0.5rem;
  line-height: 1.25;
  padding: 0.25rem;
  border: 1px solid ${COLORS.black};
  margin: 0.25rem 0;
  min-height: 2rem;
  cursor: pointer;
`;

const Icon = styled(Picture)<{ isOpen: boolean }>`
  transition: all 0.5s;
  ${(props) => props.isOpen && 'transform: rotate(180deg);'}
`;

export const SelectorHeader: TWrapper = (props) => {
  const { className, children } = props;
  const { setOpen, isOpen } = useSelectorContext();

  const handleClick = handleClickEvent(() => {
    setOpen(!isOpen);
  });

  return (
    <Wrapper
      justify="space-between"
      className={className}
      onClick={handleClick}
    >
      <Theme.GapRow>{children}</Theme.GapRow>
      <Icon isOpen={isOpen} picture="arrowBottom" size={12} />
    </Wrapper>
  );
};

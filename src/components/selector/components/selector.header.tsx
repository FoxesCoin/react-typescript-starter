import styled from 'styled-components';

import { Picture } from 'components/picture';
import { useSelectorContext } from '../selector.context';

import { COLORS } from 'style/colors';

import { TWrapper } from 'typings/react';

import { Theme } from 'style/theme';

const Wrapper = styled(Theme.FlexRow)`
  padding: 0.5rem;
  line-height: 1.25;
  padding: 0.25rem;
  border: 1px solid ${COLORS.black};
  margin: 0.25rem 0;
  min-height: 2rem;
`;

const Icon = styled(Picture)<{ isOpen: boolean }>`
  transition: all 0.5s;
  ${(props) => props.isOpen && 'transform: rotate(180deg);'}
`;

export const SelectorHeader: TWrapper = (props) => {
  const { className, children } = props;
  const { setOpen, isOpen } = useSelectorContext();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <Wrapper
      justify="space-between"
      className={className}
      onClick={handleClick}
    >
      <Theme.FlexRow>{children}</Theme.FlexRow>
      <Icon isOpen={isOpen} picture="arrowBottom" size={12} />
    </Wrapper>
  );
};

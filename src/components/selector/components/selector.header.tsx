import React from 'react';
import styled from 'styled-components';

import { useSelectorContext } from '../selector.context';

import { TComponent } from 'typings/react';

import { Theme } from 'style/theme';

const Wrapper = styled(Theme.FlexRow)`
  padding: 0.5rem;
  line-height: 1.25;
`;

export interface ISelectorHeaderProps {
  placeholder: string;
}

export const SelectorHeader: TComponent<ISelectorHeaderProps> = (props) => {
  const { className, placeholder } = props;
  const { value, setOpen, isOpen } = useSelectorContext();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <Wrapper className={className} onClick={handleClick}>
      {value.label || placeholder}
    </Wrapper>
  );
};

import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { useSelectorContext } from '../selector.context';

interface ISelectorItemProps {
  value: ISelectorValue;

  className?: string;

  children?: (isSelected: boolean) => ReactNode;
}

const Item = styled.div`
  padding: 0.25rem 0.5rem;
  line-height: 1.25;
`;

export const SelectorItem = (props: ISelectorItemProps) => {
  const { value, className, children } = props;
  const { setValue, setOpen, value: selectValue } = useSelectorContext();

  const isSelected = selectValue.label === value.label;

  const handleClick = () => {
    setOpen(false);
    setValue(value);
  };

  return (
    <Item className={className} onClick={handleClick}>
      {children ? children(isSelected) : value.label}
    </Item>
  );
};

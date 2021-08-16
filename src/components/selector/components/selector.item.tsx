import { ReactNode } from 'react';
import styled from 'styled-components';

import { useSelectorContext } from '../selector.context';

import { COLORS } from 'style/colors';

import { TContainer } from 'typings/react';

import { Theme } from 'style/theme';

interface ISelectorItemProps {
  value: any;

  render?: (isSelected: boolean) => ReactNode;
}

const Item = styled(Theme.FlexCenter)`
  color: ${COLORS.spanishGray};
`;

export const SelectorItem: TContainer<ISelectorItemProps> = (props) => {
  const { value, className, children, render } = props;
  const { setValue, setOpen, value: selectValue } = useSelectorContext();

  const isSelected = selectValue === value;

  const handleClick = () => {
    setOpen(false);
    setValue(value);
  };

  return (
    <Item className={className} onClick={handleClick}>
      {children ? children : render ? render(isSelected) : value}
    </Item>
  );
};

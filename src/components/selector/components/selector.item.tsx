import styled from 'styled-components';

import { useSelectorContext } from '../selector.context';

import { TWrapper } from 'typings/react';

interface ISelectorItemProps {
  value: any;
  isSelected: boolean;
}

const Item = styled.div`
  padding: 0.25rem 0.5rem;
  line-height: 1.25;
`;

export const SelectorItem: TWrapper<ISelectorItemProps> = (props) => {
  const { value, className, children } = props;
  const { setValue, setOpen } = useSelectorContext();

  const handleClick = () => {
    setOpen(false);
    setValue(value);
  };

  return (
    <Item className={className} onClick={handleClick}>
      {children}
    </Item>
  );
};

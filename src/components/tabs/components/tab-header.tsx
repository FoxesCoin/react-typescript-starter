import { ReactNode } from 'react';
import styled from 'styled-components';

import { useTabContext } from '../tab.context';

import { handleClickEvent } from 'services/utils';



interface IProps {
  value: string;

  className?: string;

  children?: (isActive: boolean) => ReactNode;
}

interface IWrapper {
  isActive: boolean;
}

const Wrapper = styled.button<IWrapper>`
  transition: 0.15s all;
`;

export const TabHeader = (props: IProps) => {
  const { className, value, children } = props;
  const { item, setItem } = useTabContext();

  const isActive = item === value;

  const onClick = handleClickEvent(() => {
    setItem(value);
  });

  return (
    <Wrapper
      className={`${className} ${isActive ? 'active' : ''}`}
      isActive={isActive}
      onClick={onClick}
    >
      {children ? children(isActive) : value}
    </Wrapper>
  );
};

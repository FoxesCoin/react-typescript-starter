import styled from 'styled-components';

import { handleClickEvent } from 'services/utils';

import { TContainer } from 'typings/react';

interface IStyled {
  src: string;

  onClick?: () => void;
}

const Image = styled.div<IStyled>`
  background-size: cover;
  background-image: url(${(props) => props.src});
  background-position: center;
  ${(props) => !!props.onClick && 'cursor: pointer;'}
`;

export const BackgroundImage: TContainer<IStyled> = (props) => {
  const { src, children, className, onClick } = props;

  return (
    <Image
      className={className}
      src={src}
      onClick={handleClickEvent(onClick) as any}
    >
      {children}
    </Image>
  );
};

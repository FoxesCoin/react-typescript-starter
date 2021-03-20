import styled from 'styled-components';

import { TComponent } from 'typings/react';

const getIcon = (path: string) => require(`../assets/icons/${path}.svg`);

const PICTURE = {
  logo: getIcon('logo'),
  cancel: getIcon('utils/cancel'),
  arrowBottom: getIcon('utils/arrow-bottom'),
};

export type TPicture = keyof typeof PICTURE;

interface IPictureProps extends IImageSize {
  picture?: keyof typeof PICTURE;
  alt?: string;

  onClick?: () => void;
}

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Picture: TComponent<IPictureProps> = (props) => {
  const { className, picture, height, size, width, alt = '', onClick } = props;

  if (!picture) {
    return null;
  }

  const img = PICTURE[picture].default;
  const imgHeight = height ?? size;
  const imgWidth = width ?? size;

  return (
    <Wrapper className={className} onClick={onClick}>
      <img alt={alt} style={{ width: imgWidth, height: imgHeight }} src={img} />
    </Wrapper>
  );
};

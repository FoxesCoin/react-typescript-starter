import { TComponent } from 'typings/react';

const getIcon = (path: string) => require(`../assets/icons/${path}.svg`);

const PICTURE = {
  logo: getIcon('logo'),
};

export type TPicture = keyof typeof PICTURE;

interface IPictureProps {
  picture?: keyof typeof PICTURE;
  size?: number;
  width?: number;
  height?: number;
  alt?: string;
}

export const Picture: TComponent<IPictureProps> = (props) => {
  const { className, picture, height, size, width, alt = '' } = props;

  if (!picture) {
    return null;
  }

  const img = PICTURE[picture].default;
  const imgHeight = height ?? size;
  const imgWidth = width ?? size;

  return (
    <img
      alt={alt}
      className={className}
      style={{ width: imgWidth, height: imgHeight }}
      src={img}
    />
  );
};

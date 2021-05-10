import { Picture, TPicture } from './picture';
import { Selector } from './selector/selector';

import { TComponent } from 'typings/react';

export interface IImageSelectorItem {
  picture: TPicture;
  value: string;
  label: string;
}

interface IImageSelectorProps extends IImageSize {
  value: IImageSelectorItem;
  items: IImageSelectorItem[];

  setValue: (value: IImageSelectorItem) => void;
}

interface IImageItemProps extends IImageSize {
  item: IImageSelectorItem;
}

const ImageItem = (props: IImageItemProps) => {
  const { item, ...image } = props;
  const { picture, label } = item;
  return (
    <>
      <Picture picture={picture} {...image} />
      {label}
    </>
  );
};

export const ImageSelector: TComponent<IImageSelectorProps> = (props) => {
  const { className, items, value, size = 20, setValue, ...image } = props;
  const imageStyled = { size, ...image };

  return (
    <Selector className={className} value={value} setValue={setValue}>
      <Selector.Header>
        <ImageItem item={value} {...imageStyled} />
      </Selector.Header>
      <Selector.Menu>
        {items.map((item) => (
          <Selector.Item
            value={item}
            key={item.value}
            isSelected={value.value === item.value}
          >
            <ImageItem item={item} {...imageStyled} />
          </Selector.Item>
        ))}
      </Selector.Menu>
    </Selector>
  );
};

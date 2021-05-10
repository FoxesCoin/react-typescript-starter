import { TPicture } from 'components/picture';

export type TTextInput = 'email' | 'password';

export interface IInputValue<T extends any> {
  value: T;

  onChange: (value: T) => void;

  placeholder?: string;
  disabled?: boolean;
}

export interface IInputParameters extends IInputValue<string> {
  type?: TTextInput;
}

export interface IIconWrapperStyled extends IImageSize {
  isRight?: boolean;
}

export interface IInputStyled {
  isError: boolean;
}

export interface ITextAreaStyled {
  lineHeight?: number;
  horizontalPadding?: number;
}

export type TTextAreaParameters = ITextAreaStyled & IInputValue<string>;

interface IIcon extends IIconWrapperStyled {
  image: TPicture;
}

export interface IIconWrapper {
  picture: IIcon;
}

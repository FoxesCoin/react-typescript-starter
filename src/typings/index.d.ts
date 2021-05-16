interface IImageSize {
  size?: number;
  width?: number;
  height?: number;
}

type TSimple = string | number;
type TInputType = 'email' | 'password';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

import { IInputWrapperProps } from './components';

import { RegexpEmail, RegexpPassword } from 'constants/validation';
import { DEFAULT_INPUT_ICON_SIZE } from './text-input.constants';

import {
    IIconWrapper, IIconWrapperStyled, IInputParameters, IInputValue, TTextAreaParameters, TTextInput
} from './text-input.typings';

export const getPosition = (props: IIconWrapperStyled) =>
  props.isRight ? 'right' : 'left';

export const getPositionSize = (padding: string) => (
  props: IIconWrapperStyled
) => {
  const position = getPosition(props);
  const space = props.width || props.size;
  return `${position}: calc(${space}px + ${padding});`;
};

const getRepeatInputParameters = <T extends IInputValue<any>>({
  onChange,
  value,
  placeholder,
  disabled,
}: T): IInputValue<any> => ({
  onChange,
  value,
  disabled,
  placeholder,
});

export const getTextAreaParameters = <T extends TTextAreaParameters>(
  props: T
): TTextAreaParameters => ({
  ...getRepeatInputParameters(props),
  horizontalPadding: props.horizontalPadding,
  lineHeight: props.lineHeight,
});

export const getInputParameters = <T extends IInputParameters>(
  props: T
): IInputParameters => ({
  ...getRepeatInputParameters(props),
  type: props.type,
});

export const getWrapperProps = <T extends IInputWrapperProps>({
  title,
  error,
  subtitle,
}: T): IInputWrapperProps => ({
  title,
  error,
  subtitle,
});

export const getInputIconDimension = <T extends IIconWrapper>(props: T) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { image, size = DEFAULT_INPUT_ICON_SIZE, ...dimension } = props.picture;
  const imageSizes = { size, ...dimension };
  return imageSizes;
};

export const validateInput = (value: string, type?: TTextInput) => {
  switch (type) {
    case 'email':
      return !RegexpEmail.test(value);
    case 'password':
      return !RegexpPassword.test(value);
    default:
      return false;
  }
};

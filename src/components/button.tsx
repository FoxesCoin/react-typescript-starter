import { ButtonBase, IButtonBaseProps } from './button-base';

import { TComponent } from 'typings/react';

interface IProps extends IButtonBaseProps {
  text: string;
}

export const Button: TComponent<IProps> = (props) => {
  const { text, ...button } = props;

  return <ButtonBase {...button}>{text}</ButtonBase>;
};

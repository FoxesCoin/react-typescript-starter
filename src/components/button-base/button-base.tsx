import styled from 'styled-components';

import { ISpinnerProps, Spinner } from 'components/spinner';

import { COLORS } from 'style/colors';
import { BUTTON_THEME, TButtonTheme } from './button-base.constants';

import { TContainer } from 'typings/react';

export interface IButtonBaseProps {
  onClick: () => void;

  styling?: TButtonTheme;
  isLoading?: boolean;
  isSubmit?: boolean;
  disabled?: boolean;
  spinner?: ISpinnerProps;
}

const Wrapper = styled.button<{ styling?: TButtonTheme }>`
  line-height: 1.5;
  transition: all 0.3s;

  &:disabled {
    background-color: ${COLORS.dimGray};
  }

  ${(props) => (props.styling ? BUTTON_THEME[props.styling] : '')}
`;

export const ButtonBase: TContainer<IButtonBaseProps> = (props) => {
  const {
    className,
    isLoading,
    isSubmit,
    disabled,
    styling,
    children,
    spinner,
    onClick,
  } = props;

  return (
    <Wrapper
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
      className={className}
      disabled={disabled}
      styling={styling}
    >
      {isLoading ? <Spinner {...(spinner ?? { size: 8 })} /> : children}
    </Wrapper>
  );
};

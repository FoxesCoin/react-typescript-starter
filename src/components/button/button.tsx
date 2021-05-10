import { Picture, TPicture } from 'components/picture';
import { Spinner } from 'components/spinner';

import { TComponent } from 'typings/react';

import { ButtonStyled as Styled } from './button.styled';

interface IButtonProps {
  text: string;

  onClick: () => void;

  disabled?: boolean;
  isLoading?: boolean;
  isRightSideIcon?: boolean;
  icon?: {
    picture: TPicture;
  } & IImageSize;
}

export const Button: TComponent<IButtonProps> = (props) => {
  const {
    className,
    onClick,
    text,
    disabled,
    isLoading,
    icon,
    isRightSideIcon = false,
  } = props;

  return (
    <Styled.Wrapper
      className={className}
      onClick={onClick}
      disabled={disabled}
      isRightSideIcon={isRightSideIcon}
    >
      {icon && <Picture {...icon} size={icon.size ?? 20} />}
      {isLoading ? (
        <Spinner size={20} lineHeight={5} color="white" />
      ) : (
        <Styled.Text>{text}</Styled.Text>
      )}
    </Styled.Wrapper>
  );
};

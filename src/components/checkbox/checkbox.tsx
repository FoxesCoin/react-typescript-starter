import { CHECKBOX_THEME, TCheckboxTheme } from './checkbox.constants';

import { TComponent } from 'typings/react';

import { Theme } from 'style/theme';
import { CheckboxStyled as Styled } from './checkbox.styled';

interface ICheckboxProps {
  isChecked: boolean;

  text?: string;
  isLeftText?: boolean;
  theme?: TCheckboxTheme;
  disabled?: boolean;

  onCheck: (isChecked: boolean) => void;
}

export const Checkbox: TComponent<ICheckboxProps> = (props) => {
  const {
    className,
    isChecked,
    text,
    theme,
    isLeftText,
    disabled,
    onCheck,
  } = props;
  const styling = CHECKBOX_THEME[theme ?? 'default'];

  return (
    <Styled.Wrapper
      hover={styling.hover}
      className={className}
      isLeft={isLeftText}
      isChecked={isChecked}
    >
      <Styled.Radio
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={(event) => {
          onCheck(event.target.checked);
        }}
      />
      <Styled.Item
        isDisabled={disabled}
        isLeft={isLeftText}
        styling={styling}
        isChecked={isChecked}
      />
      <Theme.Text>{text}</Theme.Text>
    </Styled.Wrapper>
  );
};

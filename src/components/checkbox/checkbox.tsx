import { TComponent } from 'typings/react';

import { CheckboxStyled as Styled } from './checkbox.styled';

interface ICheckboxProps {
  isChecked: boolean;

  disabled?: boolean;

  onCheck: (isChecked: boolean) => void;
}

export const Checkbox: TComponent<ICheckboxProps> = (props) => {
  const { className, isChecked, disabled, onCheck } = props;

  return (
    <Styled.Wrapper className={className} isChecked={isChecked}>
      <Styled.Radio
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={(event) => {
          onCheck(event.target.checked);
        }}
      />
      <Styled.Item isDisabled={disabled} isChecked={isChecked} />
    </Styled.Wrapper>
  );
};

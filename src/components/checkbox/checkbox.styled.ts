import styled, { css } from 'styled-components';

import { COLORS } from 'style/colors';

import { Theme } from 'style/theme';

interface IWrapperStyled {
  isChecked: boolean;
}

interface IItemStyled {
  isChecked: boolean;

  isDisabled?: boolean;
}

const Item = styled(Theme.FlexCenter)<IItemStyled>(
  ({ isChecked, isDisabled }) => css`
    position: relative;
    margin: 0.25rem;
    margin-left: 4px;
    margin-right: 4px;
    min-height: 30px;

    /* Background */
    &::before {
      content: '';
      transition: 0.5s all;
      width: 45px;
      height: 22px;
      border-radius: 11px;
      display: inline-block;
      background-color: ${isDisabled
        ? COLORS.black
        : isChecked
        ? COLORS.starCommandBlue
        : COLORS.black};
    }

    /* Checkbox point */
    &::after {
      content: '';
      transition: 0.5s all;
      left: ${isChecked ? 24 : 4}px;
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: ${isDisabled ? COLORS.lightGray : COLORS.white};
      box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.75);
    }
  `
);

export const CheckboxStyled = {
  Wrapper: styled.label<IWrapperStyled>`
    display: flex;
    width: min-content;
    align-items: center;

    &:hover ${Item}::before {
      background-color: ${(props) =>
        props.isChecked ? COLORS.starCommandBlue : COLORS.lightGray};
    }

    cursor: pointer;
  `,
  Item,

  Radio: styled.input`
    display: none;
  `,
};

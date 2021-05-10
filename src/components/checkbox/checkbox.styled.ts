import styled from 'styled-components';

import { COLORS } from 'style/colors';
import { ICheckboxHover, ICheckboxStyled } from './checkbox.constants';

import { Theme } from 'style/theme';

interface IWrapperStyled {
  hover: ICheckboxHover;
  isChecked: boolean;

  isLeft?: boolean;
}

interface IItemStyled {
  styling: ICheckboxStyled;
  isChecked: boolean;

  isLeft?: boolean;
  isDisabled?: boolean;
}

// prettier-ignore
const Item = styled(Theme.FlexCenter)<IItemStyled>(({isChecked, isLeft, isDisabled, styling: { background, item, disabled }}) => `
  position: relative;
  margin: 0.25rem;
  margin-left: ${
    (item.padding < 0 ? Math.abs(item.padding) : 4) + (isLeft ? 8 : 4)
  }px;
  margin-right: ${
    (item.padding < 0 ? Math.abs(item.padding) : 4) + (isLeft ? 4 : 8)
  }px;
  min-height: ${
    background.height > item.size ? background.height : item.size
  }px;


  /* Background */
  &::before {
    content: '';
    transition: 0.5s all;
    width: ${background.width}px;
    height: ${background.height}px;
    border-radius: ${background.height / 2}px;
    display: inline-block;
    background-color: ${
      COLORS[
        isDisabled 
          ? disabled.backgroundColor 
          : isChecked 
            ? background.activeColor 
            : background.passiveColor
      ]
    };
  }

  /* Checkbox point */
  &::after {
    content: '';
    transition: 0.5s all;
    left: ${
      isChecked ? background.width - item.size - item.padding : item.padding
    }px;
    position: absolute;
    width: ${item.size}px;
    height: ${item.size}px;
    border-radius: 50%;
    background-color: ${COLORS[isDisabled ? disabled.itemColor : item.color]};
    box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.75);
  }
`);

export const CheckboxStyled = {
  Wrapper: styled.label<IWrapperStyled>`
    display: flex;
    width: min-content;
    align-items: center;
    flex-direction: ${(props) => (props.isLeft ? 'row-reverse' : 'row')};

    &:hover ${Item}::before {
      background-color: ${(props) =>
        COLORS[
          props.isChecked ? props.hover.activeColor : props.hover.passiveColor
        ]};
    }
  `,
  Item,

  Radio: styled.input`
    display: none;
  `,
};

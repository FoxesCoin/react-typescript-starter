import { TColor } from 'style/colors';

interface ISlidItem {
  size: number;
  padding: number;
  color: TColor;
}

interface IBackground {
  width: number;
  height: number;
  activeColor: TColor;
  passiveColor: TColor;
}

export interface ICheckboxHover {
  activeColor: TColor;
  passiveColor: TColor;
}

interface IDisabled {
  backgroundColor: TColor;
  itemColor: TColor;
}

export interface ICheckboxStyled {
  item: ISlidItem;
  background: IBackground;
  hover: ICheckboxHover;
  disabled: IDisabled;
}

export const DEFAULT_STYLED: ICheckboxStyled = {
  item: {
    size: 20,
    padding: -5,
    color: 'white',
  },
  background: {
    height: 2,
    width: 50,
    activeColor: 'starCommandBlue',
    passiveColor: 'lightGray',
  },
  hover: {
    passiveColor: 'steelTeal',
    activeColor: 'sapphireBlue',
  },
  disabled: {
    backgroundColor: 'steelTeal',
    itemColor: 'cultured',
  },
};

export const INSIDE_STYLED: ICheckboxStyled = {
  item: {
    size: 24,
    padding: 4,
    color: 'white',
  },
  background: {
    height: 30,
    width: 60,
    activeColor: 'starCommandBlue',
    passiveColor: 'lightGray',
  },
  hover: {
    passiveColor: 'steelTeal',
    activeColor: 'sapphireBlue',
  },
  disabled: {
    backgroundColor: 'steelTeal',
    itemColor: 'cultured',
  },
};

export const CHECKBOX_THEME = <const>{
  default: DEFAULT_STYLED,
  inside: INSIDE_STYLED,
};

export type TCheckboxTheme = keyof typeof CHECKBOX_THEME;

export const COLORS = <const>{
  transparent: 'transparent',
  black: '#282828',

  palePink: '#ffd6d6',
  lightCoral: '#ff8585',
  red: '#f00',

  cultured: '#fcfafa',

  lightGray: '#c8d3d5',

  dimGray: '#656C6E',

  steelTeal: '#6e8387',

  lightBlue: '#c7e6ed',

  starCommandBlue: '#1378ab',
  sapphireBlue: '#116a96',

  white: '#fff',
};

export type TColor = keyof typeof COLORS;

export const hex2rgba = (alpha: number, color?: string) => {
  const [red = 0, green = 0, blue = 0] =
    color?.match(/\w\w/g)?.map((x) => parseInt(x, 16)) ?? [];
  return `rgba(${red},${green},${blue},${alpha})`;
};

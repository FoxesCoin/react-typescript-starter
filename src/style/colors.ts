export const COLORS = <const>{
  transparent: 'transparent',
  black: '#282828',

  red: '#f00',
  lightCoral: '#ff8585',
  palePink: '#ffd6d6',

  white: '#fff',
};

export type TColor = keyof typeof COLORS;

export const hex2rgba = (alpha: number, color?: string) => {
  const [red, green, blue] =
    color?.match(/\w\w/g)?.map((x) => parseInt(x, 16)) ?? [];
  return `rgba(${red},${green},${blue},${alpha})`;
};

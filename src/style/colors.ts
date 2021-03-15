export const COLORS = <const>{
  black: '#282828',

  red: '#f00',
  lightCoral: '#ff8585',
  palePink: '#ffd6d6',

  white: '#fff',
};

export type TColor = keyof typeof COLORS;

export const hex2rgba = (color: TColor, alpha: number) => {
  const [red, green, blue] =
    COLORS[color].match(/\w\w/g)?.map((x) => parseInt(x, 16)) ?? [];
  return `rgba(${red},${green},${blue},${alpha})`;
};

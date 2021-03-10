import RobotoBold from "../assets/fonts/Roboto-Bold.woff";
import RobotoRegular from "../assets/fonts/Roboto-Regular.woff";

export const FONTS = <const>{
	"Roboto-Bold": RobotoBold,
	"Roboto-Regular": RobotoRegular,
};

export const importFont = (font: keyof typeof FONTS) =>
	`@font-face {
    font-family: "${font}";
    src: url(${FONTS[font]}) format("woff");
  }
`;

export type TFont = keyof typeof FONTS;

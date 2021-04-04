import styled from 'styled-components';

import { ReactComponent as logo } from 'assets/icons/log.svg';

import { handleClickEvent } from 'services/utils';

import { TComponent } from 'typings/react';

import { Theme } from 'style/theme';

const SVG_ICONS = {
  logo,
};

export type TSvgIcons = keyof typeof SVG_ICONS;

interface IStyled {
  stroke?: string;
  fill?: string;
}

interface ISvgIconProps extends IImageSize, IStyled {
  icon?: TSvgIcons;

  onClick?: () => void;
}

const Wrapper = styled(Theme.FlexCenter)<IStyled>`
  ${(props) => props.onClick && `cursor: pointer;`}
  * {
    ${(props) => props.stroke && `stroke: ${props.stroke};`}
    ${(props) => props.fill && `fill: ${props.fill};`}
  }
`;

export const SvgIcon: TComponent<ISvgIconProps> = (props) => {
  const { icon, className, onClick, height, size, width, stroke, fill } = props;

  if (!icon) {
    return null;
  }

  const imgHeight = height ?? size;
  const imgWidth = width ?? size;
  const Icon = SVG_ICONS[icon];

  return (
    <Wrapper
      className={className}
      stroke={stroke}
      fill={fill}
      onClick={handleClickEvent(onClick)}
    >
      <Icon style={{ width: imgWidth, height: imgHeight }} />
    </Wrapper>
  );
};

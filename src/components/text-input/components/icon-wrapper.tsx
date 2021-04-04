import styled from 'styled-components';

import { Picture } from 'components/picture';

import { cssAbsoluteCenter } from 'style/theme/theme.utils';
import { getPosition } from '../text-input.utils';

import { DEFAULT_INPUT_ICON_SIZE } from '../text-input.constants';

import { TWrapper } from 'typings/react';
import { IIconWrapper } from '../text-input.typings';

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled(Picture)<{ isRight?: boolean }>`
  ${cssAbsoluteCenter}
  ${getPosition}: 0.25rem;
`;

export const IconWrapper: TWrapper<IIconWrapper> = (props) => {
  const { className, children, picture } = props;

  const { image, size = DEFAULT_INPUT_ICON_SIZE, ...dimension } = picture;

  return (
    <Wrapper className={className}>
      <Icon picture={image} size={size} {...dimension} />
      {children}
    </Wrapper>
  );
};

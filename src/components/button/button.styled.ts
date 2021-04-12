import styled from 'styled-components';

import { cssFlexCenter } from 'style/theme/theme.utils';

import { COLORS } from 'style/colors';
import { FONTS } from 'style/fonts';

import { Theme } from 'style/theme';

export const ButtonStyled = {
  Wrapper: styled.button<{ isRightSideIcon: boolean }>`
    outline: none;
    border: none;
    min-width: 140px;
    max-width: max-content;
    min-height: 40px;
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    background-color: ${COLORS.starCommandBlue};
    color: ${COLORS.white};
    font-family: ${FONTS.bold};
    transition: 0.5s all;

    ${cssFlexCenter}
    flex-direction: ${(props) =>
      props.isRightSideIcon ? 'row-reverse' : 'row'};

    &:hover {
      background-color: ${COLORS.sapphireBlue};
    }

    &:disabled {
      background-color: ${COLORS.steelTeal};
    }
  `,
  Text: styled(Theme.Text)`
    margin: 0 0.5rem;
  `,
};

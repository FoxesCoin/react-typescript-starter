import { FONTS } from 'style/fonts';
import styled from 'styled-components';

import { cssFlex, cssFlexRow, cssText, cssTextStyled } from './theme.preset';

export const Theme = {
  Paragraph: styled.p`
    ${cssText}
  `,
  Text: styled.span`
    ${cssText}
  `,
  BoldParagraph: styled.p`
    font-family: ${FONTS.bold};
    ${cssTextStyled}
  `,
  BoldText: styled.span`
    font-family: ${FONTS.bold};
    ${cssTextStyled}
  `,
  Title: styled.p`
    font-family: ${FONTS.bold};
    text-align: center;
    width: 100%;
    ${cssTextStyled}
  `,
  FullSizeFlex: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    ${cssFlex}
  `,
  Flex: styled.div`
    display: flex;
    ${cssFlex}
  `,
  FlexRow: styled.div`
    display: flex;
    align-items: center;
    ${cssFlexRow}
  `,
  FlexCenter: styled.div<{ isColumn?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => props.isColumn && 'flex-direction: column;'}
  `,

  FullScreen: styled.div`
    width: 100%;
    height: 100%;
  `,
};

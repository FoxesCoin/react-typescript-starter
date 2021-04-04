import styled from 'styled-components';

import { cssFlexGap, cssFullScreen, cssText, cssTextStyled } from './theme.utils';

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Theme = {
  Paragraph: styled.p`
    ${cssText}
  `,
  Text: styled.span`
    ${cssText}
  `,
  Title: styled.p`
    text-align: center;
    width: 100%;
    ${cssTextStyled}
  `,

  GapRow: styled.div`
    display: flex;
    align-items: center;
    ${cssFlexGap}
  `,
  FlexRow: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  FlexCenter,
  FullScreen: styled.div`
    ${cssFullScreen}
  `,
  FullScreenCenter: styled(FlexCenter)`
    ${cssFullScreen}
  `,
};

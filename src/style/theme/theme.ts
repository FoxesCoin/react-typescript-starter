import styled from 'styled-components';

import { cssFlexCenter, cssFullSize, cssGap, cssText, ITypographyStyled } from './theme.preset';

export const Theme = {
  Paragraph: styled.p<ITypographyStyled>`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssText}
  `,
  Text: styled.span<ITypographyStyled>`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssText}
  `,
  UpperText: styled.span<ITypographyStyled>`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssText}
    text-transform: uppercase;
  `,
  Title: styled.p<ITypographyStyled>`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssText}
    text-align: center;
    width: 100%;
  `,
  FullScreenCenter: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssFlexCenter}
    ${cssFullSize}
    flex-direction: column;
  `,
  FlexLine: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  FlexColumn: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `,
  GapRow: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssGap}
    display: flex;
    align-items: center;
  `,
  GapColumn: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssGap}
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  FlexCenter: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssFlexCenter}
  `,
  FlexColumnCenter: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssFlexCenter}
    flex-direction: column;
  `,
  FullScreen: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    ${cssFullSize}
  `,
  GridColumn: styled.div<{ gap?: number }>`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    display: grid;
    gap: ${(props) => props.gap ?? 8}px;
    grid-auto-rows: max-content;
    justify-items: center;
    align-items: center;
  `,
  ToggleContent: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    overflow: hidden;
    transition: all 0.5s;
  `,
  AllSpace: styled.div`
    ${(props) => (props.onClick ? 'cursor: pointer;' : '')}
    width: 100%;
    height: 100%;
  `,
};

import { useRef } from 'react';
import styled from 'styled-components';

import { ITextAreaProps, TextArea } from './text-area';

import { TComponent } from 'typings/react';

interface IResponsiveTextAreaProps extends ITextAreaProps {
  value: string;

  minRows?: number;
}

const FIELD_LINE_HEIGHT = 20;

const Area = styled(TextArea)<{ height: number }>`
  position: relative;
  padding: 0.5rem;
  flex: 1 auto;
  resize: none;
  box-sizing: content-box;
  line-height: ${FIELD_LINE_HEIGHT}px;
  height: ${(props) => props.height}px;
`;

export const ResponsiveTextArea: TComponent<IResponsiveTextAreaProps> = (
  props
) => {
  const { minRows = 1, ...parameters } = props;
  const ref = useRef<HTMLTextAreaElement>();
  const rows = ref.current?.value?.split('\n')?.length ?? minRows;
  const height = Math.max(rows, minRows) * FIELD_LINE_HEIGHT;

  return <Area height={height} {...parameters} />;
};

import { useRef } from 'react';

import { handleChangeEvent } from 'services/utils';

import {
    DEFAULT_INPUT_HORIZONTAL_PADDING, DEFAULT_INPUT_LINE_HEIGH
} from '../text-input.constants';

import { TComponent } from 'typings/react';
import { IInputStyled, TTextAreaParameters } from '../text-input.typings';

import { InputStyled } from './input.styled';

type TProps = TTextAreaParameters & IInputStyled;

export const TemplateTextArea: TComponent<TProps> = (props) => {
  const {
    horizontalPadding = DEFAULT_INPUT_HORIZONTAL_PADDING,
    lineHeight = DEFAULT_INPUT_LINE_HEIGH,
    onChange,
    ...input
  } = props;

  const ref = useRef<HTMLTextAreaElement>();
  const rows = ref.current?.value?.split('\n')?.length ?? 1;
  const height = rows * lineHeight + 2 * horizontalPadding + 2;

  return (
    <InputStyled.Area
      {...input}
      horizontalPadding={horizontalPadding}
      lineHeight={lineHeight}
      ref={ref as any}
      style={{ height }}
      onChange={handleChangeEvent(onChange)}
    />
  );
};

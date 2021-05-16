import styled from 'styled-components';

import { handleChangeEvent } from 'services/utils';

import { COLORS } from 'style/colors';
import { ThemeInput, TInputTheme } from './input/input.constants';

import { TComponent } from 'typings/react';

export interface ITextAreaProps {
  value: string | undefined;

  onChange: (value: string) => void;

  styling?: TInputTheme;
  placeholder?: string;
  disabled?: boolean;
}

const Wrapper = styled.textarea<{ styling?: TInputTheme }>`
  resize: none;
  width: 100%;
  padding: 12px;
  border: 1px solid ${COLORS.spanishGray};
  background-color: ${COLORS.transparent};

  ${(props) => (props.styling ? ThemeInput[props.styling] : '')}

  &:disabled {
    background-color: ${COLORS.spanishGray};
  }
`;

export const TextArea: TComponent<ITextAreaProps> = (props) => {
  const { styling, onChange, ...parameters } = props;

  return (
    <Wrapper
      onChange={handleChangeEvent(onChange)}
      styling={styling}
      {...parameters}
    />
  );
};

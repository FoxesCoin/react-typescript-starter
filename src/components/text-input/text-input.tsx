import { ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';

import { COLORS, hex2rgba } from 'style/colors';

import { TComponent } from 'typings/react';

interface ITextInputProps {
  value: string;

  setValue: (value: string) => void;

  title?: string;
  type?: 'password' | 'email';
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
}

const cssError = css`
  p {
    color: ${COLORS.lightCoral};
  }

  input {
    color: ${hex2rgba('lightCoral', 0.4)};
    background-color: ${COLORS.palePink};
    border: 1px solid ${COLORS.lightCoral};
  }
`;

const Label = styled.label<{ error?: boolean }>`
  position: relative;
  width: 100%;

  ${(props) => props.error && cssError}

  p {
    margin-bottom: 0.5rem;
  }

  input {
    border-radius: 0.25rem;
    width: 100%;

    &:disabled {
      color: ${hex2rgba('black', 0.2)};
    }
  }
`;

export const TextInput: TComponent<ITextInputProps> = (props) => {
  const {
    className,
    type,
    value,
    placeholder,
    setValue,
    disabled,
    title,
    error,
  } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <Label className={className} error={error}>
      {title && <p>{title}</p>}
      <input
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        type={type}
        disabled={disabled}
      />
    </Label>
  );
};

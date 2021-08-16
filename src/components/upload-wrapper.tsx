import styled from 'styled-components';

import { handleFileChange } from 'services/utils';

import { TWrapper } from 'typings/react';

export type TTypeFilePicker = keyof typeof ACCEPT;

interface IProps {
  type: TTypeFilePicker;

  setFile: (file: File) => void;
}

const Input = styled.input`
  display: none;
`;

export const ACCEPT = {
  image: 'image/*',
  video: 'video/mp4',
  document: '.csv,.xls,.xlsx',
  media: 'image/*,video/mp4',
};

export const UploadWrapper: TWrapper<IProps> = (props) => {
  const { className, setFile, type, children } = props;

  return (
    <label className={className}>
      <Input
        type="file"
        accept={ACCEPT[type]}
        onChange={handleFileChange(setFile)}
      />
      {children}
    </label>
  );
};

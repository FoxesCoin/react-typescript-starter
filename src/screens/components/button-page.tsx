import { Button } from 'components/button';

import { TPage } from 'typings/react';

import { Theme } from 'style/theme';

export const ButtonPage: TPage = () => {
  return (
    <div>
      <Button
        text="Button"
        onClick={() => {
          return;
        }}
      />
      <Button
        isLoading
        text="Button"
        onClick={() => {
          return;
        }}
      />
      <Button
        disabled
        text="Button"
        onClick={() => {
          return;
        }}
      />
      <Button
        icon={{
          picture: 'logo',
        }}
        text="Button"
        onClick={() => {
          return;
        }}
      />
      <Theme.Paragraph>Example long text</Theme.Paragraph>

      <Button
        text="Button with very long text for test"
        onClick={() => {
          return;
        }}
      />
      <Button
        text="Button with very long text for test"
        icon={{
          picture: 'logo',
        }}
        onClick={() => {
          return;
        }}
      />

      <Theme.Paragraph>Reverse</Theme.Paragraph>

      <Button
        isRightSideIcon
        icon={{
          picture: 'logo',
        }}
        text="Button"
        onClick={() => {
          return;
        }}
      />
    </div>
  );
};

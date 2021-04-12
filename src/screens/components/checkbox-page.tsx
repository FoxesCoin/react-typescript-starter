import { useState } from 'react';

import { Checkbox } from 'components/checkbox';

import { TPage } from 'typings/react';

import { Theme } from 'style/theme';

export const CheckboxPage: TPage = () => {
  const [isChecked, setChecked] = useState(false);
  const [isDisabledCheckbox, setDisabledChecked] = useState(false);

  return (
    <div>
      <Theme.Paragraph>Theme</Theme.Paragraph>

      <Checkbox isChecked={isChecked} onCheck={setChecked} text="Checkbox" />
      <Checkbox
        isChecked={isChecked}
        onCheck={setChecked}
        text="Checkbox"
        theme="inside"
      />

      <Theme.Paragraph>Without text</Theme.Paragraph>

      <Checkbox isChecked={isChecked} onCheck={setChecked} />
      <Checkbox isChecked={isChecked} onCheck={setChecked} theme="inside" />

      <Theme.Paragraph>Disabled</Theme.Paragraph>

      <Checkbox
        disabled
        isChecked={isDisabledCheckbox}
        onCheck={setDisabledChecked}
        text="Checkbox"
      />
      <Checkbox
        disabled
        isChecked={isDisabledCheckbox}
        onCheck={setDisabledChecked}
        text="Checkbox"
        theme="inside"
      />

      <Theme.Paragraph>Left side text</Theme.Paragraph>

      <Checkbox
        isLeftText
        isChecked={isChecked}
        onCheck={setChecked}
        text="Checkbox"
      />
      <Checkbox
        isLeftText
        isChecked={isChecked}
        onCheck={setChecked}
        text="Checkbox"
        theme="inside"
      />
    </div>
  );
};

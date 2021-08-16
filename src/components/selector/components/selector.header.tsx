import { useSelectorContext } from '../selector.context';

import { TContainer } from 'typings/react';

import { Theme } from 'style/theme';

interface ISelectorHeaderProps {
  placeholder?: string;
}

export const SelectorHeader: TContainer<ISelectorHeaderProps> = (props) => {
  const { className, placeholder = '', children } = props;
  const { value, isOpen, disabled, setOpen } = useSelectorContext();

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <Theme.FlexLine
      className={`selector-header ${className}`}
      onClick={disabled ? undefined : handleClick}
    >
      {!value && placeholder && (
        <Theme.Text color="spanishGray">{placeholder}</Theme.Text>
      )}
      {children ?? value}
    </Theme.FlexLine>
  );
};

import styled from 'styled-components';

import { Picture } from 'components/picture';

import { COLORS } from 'style/colors';

import { Theme } from 'style/theme';

interface IItemProps<T extends TSimple> {
  item: T;

  setValue: (value: T) => void;
}

const Item = styled(Theme.FlexRow)`
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  border: 1px solid ${COLORS.black};
  pointer-events: none;
`;

export const SelectorItem = <T extends TSimple>(props: IItemProps<T>) => {
  const { item, setValue } = props;

  const handleClick = () => {
    setValue(item);
  };

  return (
    <Item>
      <Theme.Text>{item}</Theme.Text>
      <Picture picture="cancel" onClick={handleClick} size={12} />
    </Item>
  );
};

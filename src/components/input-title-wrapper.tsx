import styled from 'styled-components';

import { TWrapper } from 'typings/react';

import { Theme } from 'style/theme';

export interface IInputTitleWrapperProps {
  title: string;

  subtitle?: string;
}

const Wrapper = styled(Theme.GapColumn)`
  flex: 1;
`;

export const InputTitleWrapper: TWrapper<IInputTitleWrapperProps> = (props) => {
  const { className, title, children, subtitle } = props;

  return (
    <Wrapper className={className} gap={12}>
      <Theme.Text>{title}</Theme.Text>
      {children}
      {subtitle && <Theme.Text>{subtitle}</Theme.Text>}
    </Wrapper>
  );
};

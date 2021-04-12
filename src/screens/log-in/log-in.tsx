import { Link } from 'react-router-dom';

import { ROUTES } from 'constants/router';

import { TComponent } from 'typings/react';

import { Theme } from 'style/theme';

export const LogIn: TComponent = (props) => {
  const { className } = props;

  return (
    <Theme.FullScreenCenter style={{ gap: 24 }} className={className}>
      <Link to={ROUTES.BUTTON}>Button</Link>
      <Link to={ROUTES.INPUT}>Input</Link>
      <Link to={ROUTES.SELECTOR}>Selector</Link>
      <Link to={ROUTES.CHECKBOX}>Checkbox</Link>
    </Theme.FullScreenCenter>
  );
};

import { useHistory } from 'react-router';

export const useMoveRoute = () => {
  const { push } = useHistory();

  const moveToRouteCallback = (route: string) => () => {
    push(route);
  };

  const moveToRoute = (route: string) => {
    push(route);
  };

  return { moveToRouteCallback, moveToRoute };
};

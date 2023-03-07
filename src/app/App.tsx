import './styles';
import { FC } from 'react';
import { RouterProvider } from './providers/router';
import { StoreProvider } from '../shared/services/store';

export const App: FC = () => {
  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
};

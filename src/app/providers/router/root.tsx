import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/header';

export const Root: FC = () => (
  <div className="router-root">
    <Header />
    <Outlet />
  </div>
);

import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './config';

export const Provider: FC = () => <RouterProvider router={router} />;

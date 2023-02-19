import { createBrowserRouter } from 'react-router-dom';
import { Feed } from '../../../pages/feed';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Feed />,
  },
]);

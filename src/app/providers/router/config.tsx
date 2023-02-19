import { createBrowserRouter } from 'react-router-dom';
import { Feed } from '../../../pages/feed';
import { NewsItem } from '../../../pages/news-item';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Feed />,
  },
  {
    path: 'news/:newsItemId',
    element: <NewsItem />,
  },
]);

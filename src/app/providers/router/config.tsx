import { createBrowserRouter } from 'react-router-dom';
import { Feed } from '../../../pages/feed';
import { NewsItem } from '../../../pages/news-item';
import { Pages } from '../../../shared/core/router';
import { Root } from './root';

export const router = createBrowserRouter([
  {
    id: Pages.ROOT,
    path: '/',
    element: <Root />,
    children: [
      {
        id: Pages.FEED,
        path: '/',
        element: <Feed />,
        index: true,
      },
      {
        id: Pages.NEWS_ITEM,
        path: '/news/:newsItemId',
        element: <NewsItem />,
      },
    ],
  },
]);

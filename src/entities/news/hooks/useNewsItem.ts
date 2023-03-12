import { useEffect } from 'react';
import {
  HackerNewsApi,
  TNewsItem,
  TNewsItemId,
} from '../../../shared/services/hacker-news-api';
import {
  useStoreDispatch,
  useStoreState,
} from '../../../shared/services/store';

export function useNewsItem(itemId: TNewsItemId): [TNewsItem, boolean] {
  const store = useStoreState();
  const dispatch = useStoreDispatch();
  const news = store.news.storage[itemId];
  const hasFetchedEver = news !== undefined;

  useEffect(() => {
    if (hasFetchedEver) {
      return;
    }

    HackerNewsApi.getNewsItem({ id: itemId }).then((news) => {
      dispatch({
        type: 'add_news_item',
        payload: news,
      });
    });
  }, [itemId, news]);

  return [news, hasFetchedEver];
}

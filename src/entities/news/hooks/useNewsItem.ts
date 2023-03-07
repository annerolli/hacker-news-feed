import { useEffect } from 'react';
import {
  HackerNewsApi,
  TNewsItem,
  TNewsItemId,
} from '../../../shared/services/hacker-news-api';
import {
  useStoreSetState,
  useStoreState,
} from '../../../shared/services/store';

export function useNewsItem(itemId: TNewsItemId): [TNewsItem, boolean] {
  const store = useStoreState();
  const setStore = useStoreSetState();
  const news = store.news.storage[itemId];
  const hasFetchedEver = news !== undefined;

  useEffect(() => {
    if (hasFetchedEver) {
      return;
    }

    HackerNewsApi.getNewsItem({ id: itemId }).then((news) => {
      setStore((state) => {
        return {
          ...state,
          news: {
            ...state.news,
            storage: {
              ...state.news.storage,
              [itemId]: news,
            },
          },
        };
      });
    });
  }, [itemId, news]);

  return [news, hasFetchedEver];
}

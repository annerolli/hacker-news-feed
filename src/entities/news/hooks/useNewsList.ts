import { useEffect } from 'react';
import { HackerNewsApi } from '../../../shared/services/hacker-news-api';
import {
  useStoreSetState,
  useStoreState,
} from '../../../shared/services/store';

export function useNewsList() {
  const state = useStoreState();
  const setState = useStoreSetState();
  const list = state.news.ids;
  const hasFetchedEver = list !== null;

  useEffect(() => {
    if (hasFetchedEver) return;

    HackerNewsApi.getNewsList()
      .then((news) => {
        setState((state) => {
          return {
            ...state,
            news: {
              ...state.news,
              ids: news.slice(0, 10),
            },
          };
        });
      })
      .catch(() => {
        setState((state) => {
          return {
            ...state,
            news: {
              ...state.news,
              ids: [],
            },
          };
        });
      });
  }, []);

  return list;
}

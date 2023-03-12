import { useEffect } from 'react';
import { HackerNewsApi } from '../../../shared/services/hacker-news-api';
import {
  useStoreDispatch,
  useStoreState,
} from '../../../shared/services/store';

export function useNewsList() {
  const state = useStoreState();
  const dispatch = useStoreDispatch();
  const list = state.news.ids;
  const hasFetchedEver = list !== null;

  useEffect(() => {
    if (hasFetchedEver) return;

    HackerNewsApi.getNewStories()
      .then((news) => {
        dispatch({
          type: 'set_news_ids',
          payload: news.slice(0, 10),
        });
      })
      .catch(() => {
        dispatch({
          type: 'set_news_ids',
          payload: [],
        });
      });
  }, []);

  return list;
}

import { HackerNewsApi } from '../../../shared/services/hacker-news-api';
import { useStoreDispatch } from '../../../shared/services/store';

export function useFetchNewsList() {
  const dispatch = useStoreDispatch();

  return () => {
    return HackerNewsApi.getNewStories()
      .then((news) => {
        dispatch({
          type: 'set_news_ids',
          payload: news.slice(0, 10),
        });

        return news;
      })
      .catch(() => {
        dispatch({
          type: 'set_news_ids',
          payload: [],
        });

        return [];
      });
  };
}

import { FC, useEffect, useState } from 'react';
import {
  HackerNewsApi,
  TNewsItem,
} from '../../shared/services/hacker-news-api';
import { FeedItem } from './FeedItem';

type TProps = {
  itemId: number;
};

export const FeedItemApi: FC<TProps> = ({ itemId }) => {
  const [news, setNews] = useState<TNewsItem | null>(null);

  useEffect(() => {
    HackerNewsApi.getNewsItem({ id: itemId }).then((item) => {
      setNews(item);
    });
  }, []);

  if (news === null) {
    return null;
  }

  return <FeedItem data={news} />;
};

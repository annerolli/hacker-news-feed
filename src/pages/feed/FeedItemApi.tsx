import { FC } from 'react';
import { TItemId } from '../../shared/services/hacker-news-api';
import { useNewsItem } from '../../entities/news';
import { FeedItem } from './FeedItem';

type TProps = {
  itemId: TItemId;
};

export const FeedItemApi: FC<TProps> = ({ itemId }) => {
  const [news, hasFetchedEver] = useNewsItem(itemId);

  if (!hasFetchedEver) {
    return null;
  }

  return <FeedItem data={news} />;
};

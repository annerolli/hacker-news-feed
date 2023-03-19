import { FC } from 'react';
import { TItemId } from '../../shared/services/hacker-news-api';
import { NewsItemCard, useNewsItem } from '../../entities/news';
import { OpenNewsItem } from './ui/open-news-item';

type TProps = {
  itemId: TItemId;
};

export const FeedItemApi: FC<TProps> = ({ itemId }) => {
  const [news, hasFetchedEver] = useNewsItem(itemId);

  if (!hasFetchedEver) {
    return null;
  }

  return (
    <NewsItemCard data={news} actions={<OpenNewsItem itemId={itemId} />} />
  );
};

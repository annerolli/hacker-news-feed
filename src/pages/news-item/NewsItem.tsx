import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { NewsItemApi } from './NewsItemApi';

type TParams = {
  newsItemId: string;
};

/**
 * @todo обработать редирект
 */
export const NewsItem: FC = () => {
  const { newsItemId } = useParams<TParams>();

  if (newsItemId === undefined) {
    // redirect
    return null;
  }

  return <NewsItemApi itemId={+newsItemId} />;
};

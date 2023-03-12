import { Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TItemId } from '../../shared/services/hacker-news-api';
import { useNewsItem } from '../../entities/news';

type TParams = {
  newsItemId: string;
};

export const NewsItem: FC = () => {
  const { newsItemId } = useParams<TParams>();

  if (newsItemId === undefined) {
    // redirect
    return null;
  }

  return <NewsItemApi itemId={+newsItemId} />;
};

type TProps = {
  itemId: TItemId;
};

export const NewsItemApi: FC<TProps> = ({ itemId }) => {
  const [news, hasFetchedEver] = useNewsItem(itemId);

  if (!hasFetchedEver) return <p>loading...</p>;

  const date = new Date(news.time * 1000);

  return (
    <Container maxWidth="lg" component="main">
      <header>
        <Typography variant="h1">{news.title}</Typography>
        <Typography variant="subtitle1">{news.by}</Typography>
        <Typography variant="caption" component="time">
          {date.toString()}
        </Typography>
        <br />
        <Link href={news.url} target="_blank" rel="noopener">
          Open in sourse
        </Link>
      </header>
    </Container>
  );
};

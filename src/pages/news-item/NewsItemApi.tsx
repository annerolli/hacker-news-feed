import { Container, Link, Typography } from '@mui/material';
import { FC } from 'react';
import { useNewsItem } from '../../entities/news';
import { TItemId } from '../../shared/services/hacker-news-api';
import { Comments } from '../../widgets/comments';

type TProps = {
  itemId: TItemId;
};

export const NewsItemApi: FC<TProps> = ({ itemId }) => {
  const [news, hasFetchedEver] = useNewsItem(itemId);

  if (!hasFetchedEver) return <p>loading...</p>;

  const date = new Date(news.time * 1000).toLocaleString('ru-RU', {
    hour12: false,
  });

  return (
    <Container maxWidth="lg" component="main">
      <header>
        <Typography variant="h2" component="h1">
          {news.title}
        </Typography>
        <Typography variant="subtitle1">{news.by}</Typography>
        <Typography variant="caption" component="time">
          {date}
        </Typography>
        <br />
        <Link href={news.url}>{news.url}</Link>
      </header>

      <Comments itemIds={news.kids} />
    </Container>
  );
};

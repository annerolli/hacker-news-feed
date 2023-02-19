import { Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  HackerNewsApi,
  TNewsItem,
} from '../../shared/services/hacker-news-api';

type TParams = {
  newsItemId: string;
};

export const NewsItem: FC = () => {
  const [newsItem, setNewsItem] = useState<TNewsItem | null>(null);
  const { newsItemId } = useParams<TParams>();

  useEffect(() => {
    if (newsItemId === undefined) return;

    HackerNewsApi.getNewsItem({ id: +newsItemId }).then((news) => {
      setNewsItem(news);
    });
  }, [newsItemId]);

  if (newsItem === null) return <p>loading</p>;

  const date = new Date(newsItem.time * 1000);

  return (
    <Container maxWidth="lg" component="main">
      <header>
        <Typography variant="h1">{newsItem.title}</Typography>
        <Typography variant="subtitle1">{newsItem.by}</Typography>
        <Typography variant="caption" component="time">
          {date.toString()}
        </Typography>
        <br />
        <Link href={newsItem.url} target="_blank" rel="noopener">
          Open in sourse
        </Link>
      </header>
    </Container>
  );
};

import { FC, useEffect, useState } from 'react';
import {
  HackerNewsApi,
  TNewsList,
} from '../../shared/services/hacker-news-api';
import { FeedItemApi } from './FeedItemApi';
import { List, ListItem, Typography } from '@mui/material';

export const Feed: FC = () => {
  const [list, setList] = useState<TNewsList | null>(null);

  useEffect(() => {
    HackerNewsApi.getNewsList()
      .then((news) => {
        setList(news.slice(0, 10));
      })
      .catch(() => {
        setList([]);
      });
  }, []);

  if (list === null) {
    return <Typography variant="body1">loading...</Typography>;
  }

  if (list.length === 0) {
    return <Typography variant="body1">Новостей нет</Typography>;
  }

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 1140,
        bgcolor: 'background.paper',
        margin: '0 auto',
      }}
    >
      {list.map((item) => (
        <ListItem key={item} alignItems="flex-start">
          <FeedItemApi itemId={item} />
        </ListItem>
      ))}
    </List>
  );
};

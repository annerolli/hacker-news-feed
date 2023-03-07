import { FC } from 'react';
import { FeedItemApi } from './FeedItemApi';
import { List, ListItem, Typography } from '@mui/material';
import { useNewsList } from '../../entities/news';

export const Feed: FC = () => {
  const list = useNewsList();

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

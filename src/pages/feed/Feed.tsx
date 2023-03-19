import { FC } from 'react';
import { FeedItemApi } from './FeedItemApi';
import { Container, Grid, Typography } from '@mui/material';
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
    <Container>
      <Grid container spacing={2}>
        {list.map((item) => (
          <Grid item key={item} xs={4}>
            <FeedItemApi itemId={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

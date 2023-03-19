import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { TStory } from '../../../../shared/services/hacker-news-api';
import { Votes } from '../votes';

type TProps = {
  data: TStory;
  actions?: ReactNode;
};

export const NewsItemCard: FC<TProps> = ({ data, actions }) => {
  const date = new Date(data.time * 1000).toLocaleString('ru-RU', {
    hour12: false,
  });

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.by}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {date}
        </Typography>
        <Votes value={data.score} />
      </CardContent>

      {Boolean(actions) && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

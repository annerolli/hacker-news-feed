import { FC } from 'react';
import { TNewsItem } from '../../shared/services/hacker-news-api';
import { Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

type TProps = { data: TNewsItem };

export const FeedItem: FC<TProps> = ({ data }) => {
  const date = new Date(data.time * 1000);

  return (
    <article>
      <Typography variant="h5" component="h2">
        {data.title}
      </Typography>
      <Typography variant="subtitle1">{data.by}</Typography>
      <time>{date.toString()}</time>
      <Rating name="read-only" value={data.score} readOnly />
      <Link to={`news/${data.id}`}>Open</Link>
    </article>
  );
};

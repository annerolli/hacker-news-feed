import { FC } from 'react';
import { TComment } from '../../../../shared/services/hacker-news-api';

type TProps = {
  data: TComment;
};

export const CommentItem: FC<TProps> = ({ data }) => {
  const date = new Date(data.time * 1000).toLocaleString('ru-RU', {
    hour12: false,
  });

  return (
    <div>
      <b>{data.by}</b>
      <p>{data.text}</p>
      <span>{date}</span>
    </div>
  );
};

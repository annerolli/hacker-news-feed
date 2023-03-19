import { Typography } from '@mui/material';
import { FC } from 'react';
import { declOfNumber } from '../../../../shared/lib/string';

type TProps = {
  commentsCount: number;
};

function langHeader(count: number) {
  return `${count} ${declOfNumber(count, [
    'Комментарий',
    'Комментария',
    'Комментариев',
  ])}`;
}

export const Title: FC<TProps> = ({ commentsCount }) => (
  <Typography variant="h3">{langHeader(commentsCount)}</Typography>
);

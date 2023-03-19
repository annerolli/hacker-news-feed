import { Recommend } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { FC } from 'react';
import s from './Votes.module.css';

type TProps = {
  value: number;
};

export const Votes: FC<TProps> = ({ value }) => (
  <div className={s.Votes}>
    <Recommend />
    <Typography variant="caption">{value}</Typography>
  </div>
);

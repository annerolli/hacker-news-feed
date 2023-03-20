import { Cached } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';
import { useFetchNewsList } from '../../../../entities/news';

export const ForceUpdateFeed: FC = () => {
  const fetchNewsList = useFetchNewsList();

  return (
    <IconButton
      aria-label="Обновить список новостей"
      color="inherit"
      onClick={fetchNewsList}
    >
      <Cached />
    </IconButton>
  );
};

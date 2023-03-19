import { Typography } from '@mui/material';
import { FC } from 'react';
import { TItemId } from '../../../../shared/services/hacker-news-api';
import { useFetchItemsController } from '../../hooks';

import { Layout } from '../layout';
import { List } from '../list';
import { Title } from '../title';

type TProps = {
  itemIds?: TItemId[];
};

export const Comments: FC<TProps> = ({ itemIds = [] }) => {
  const { loading, items } = useFetchItemsController(itemIds);

  if (loading) {
    return (
      <Layout header={<Title commentsCount={itemIds.length} />}>
        <Typography variant="body2">Загружаем...</Typography>
      </Layout>
    );
  }

  if (items === null) return null;

  if (items.length === 0) {
    return (
      <Layout header={<Title commentsCount={items.length} />}>
        <Typography variant="body2">Комментариев нет</Typography>
      </Layout>
    );
  }

  return (
    <Layout header={<Title commentsCount={items.length} />}>
      <List comments={items} />
    </Layout>
  );
};

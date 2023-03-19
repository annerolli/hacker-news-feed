import { Button } from '@mui/material';
import { FC } from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';
import { TItemId } from '../../../../shared/services/hacker-news-api';

type TProps = {
  itemId: TItemId;
};

export const OpenNewsItem: FC<TProps> = ({ itemId }) => {
  const to = `news/${itemId}`;
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to);

  return (
    <Button size="small" href={href} onClick={handleClick}>
      Open
    </Button>
  );
};

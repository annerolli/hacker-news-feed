import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FC } from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';

export const GoToFeed: FC = () => {
  const href = useHref('/');
  const handleClick = useLinkClickHandler('/');

  return (
    <IconButton
      sx={{ mr: 2 }}
      color="inherit"
      aria-label="Вернуться к списку новостей"
      href={href}
      onClick={handleClick}
    >
      <ArrowBack />
    </IconButton>
  );
};

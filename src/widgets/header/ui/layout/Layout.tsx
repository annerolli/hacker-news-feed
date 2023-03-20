import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';

type TProps = PropsWithChildren<{
  before?: ReactNode;
  after?: ReactNode;
}>;

export const Layout: FC<TProps> = ({ children, before, after }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {before}
        {Boolean(children) && (
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {children}
          </Typography>
        )}
        {after}
      </Toolbar>
    </AppBar>
  );
};

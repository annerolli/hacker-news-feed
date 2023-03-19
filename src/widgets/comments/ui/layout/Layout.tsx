import { FC, PropsWithChildren, ReactNode } from 'react';
import s from './Layout.module.css';

type TProps = PropsWithChildren<{
  header: ReactNode;
  aside?: ReactNode;
}>;

export const Layout: FC<TProps> = ({ header, aside, children }) => (
  <div>
    <header className={s['Layout__header']}>
      {header}
      {aside}
    </header>
    <div>{children}</div>
  </div>
);

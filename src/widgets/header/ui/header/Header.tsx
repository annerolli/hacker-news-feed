import { FC } from 'react';
import { useActions } from '../../hooks';
import { Layout } from '../layout';

export const Header: FC = () => {
  const { Before, After } = useActions();

  return (
    <Layout
      before={Before !== null && <Before />}
      after={After !== null && <After />}
    >
      Hacker News
    </Layout>
  );
};

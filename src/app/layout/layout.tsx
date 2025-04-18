import { Layout } from 'antd';
import { Header } from 'widgets/header';
import { Outlet, useLocation } from 'react-router-dom';

import styles from './layout.module.scss';

export const MainLayout = () => {
  const location = useLocation();
  const isDetailPage =
    location.pathname.startsWith('/photo') ||
    location.pathname.startsWith('/videos');

  return (
    <Layout className={styles.layout}>
      {!isDetailPage && <Header />}
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

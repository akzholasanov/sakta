import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from 'widgets/header';

import styles from './layout.module.scss';

export const MainLayout = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/photo');

  return (
    <Layout className={styles.layout}>
      {!isDetailPage && <Header />}
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

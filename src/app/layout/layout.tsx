import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';
import styles from './layout.module.scss';

export const MainLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
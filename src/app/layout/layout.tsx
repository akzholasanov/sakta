import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';

export const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Content style={{ minHeight: '100vh' }}>
        <Header />
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

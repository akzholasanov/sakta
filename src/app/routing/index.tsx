import { Detail } from 'pages/detail/ui';
import { Profile } from 'pages/profile/ui';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from 'shared/ui/main-layout';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'profile', element: <Profile /> },
      { path: 'contact', element: <Detail /> },
    ],
  },
]);

import { createHashRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from 'app/layout';
import { HomePage } from 'pages/home';

const routers = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routers} />;
};

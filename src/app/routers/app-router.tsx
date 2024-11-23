import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from 'app/layout';
import { HomePage } from 'pages/home';
import { DetailPage } from 'pages/detail-page';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ':type/:id',
        element: <DetailPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routers} />;
};

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from 'app/layout';
import { HomePage } from 'pages/home';
import { SearchPage } from 'pages/search';
import { DetailPage } from 'pages/detail';

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
      {
        path: 'search/:query',
        element: <SearchPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routers} />;
};

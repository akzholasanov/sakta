import { MainLayout } from 'app/layout';
import { DetailPage } from 'pages/detail';
import { HomePage } from 'pages/home';
import { SearchPage } from 'pages/search';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

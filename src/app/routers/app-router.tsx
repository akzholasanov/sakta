import { MainLayout } from 'app/layout';
import { HomePage } from 'pages/home';
import { SearchPage } from 'pages/search';
import { DetailPage, VideoDetailPage } from 'pages/detail';
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
        path: 'videos/:id',
        element: <VideoDetailPage />,
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

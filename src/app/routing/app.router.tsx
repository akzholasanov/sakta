import React from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from 'react-router-dom';
import clsx from 'clsx';
import { MainLayout } from 'app/layout';
import { Home } from 'pages/home';
import { useTheme } from 'entities';


import '../styles/index.scss';

export const AppRouter = () => {
  const { theme } = useTheme();

  const routers = createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout />}
      handle={{ crumb: <Link to="/">Home</Link> }}
    >
      <Route index element={<Home />} />
    </Route>,
  );

  const router = createHashRouter(routers, {});

  return (
    <div className={clsx('app', theme)}>
      <RouterProvider router={router} />
    </div>
  );
};

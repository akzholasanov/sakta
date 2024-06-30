
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from 'react-router-dom';
import clsx from 'clsx';
import { Join } from 'pages/join';
import { Home } from 'pages/home';
import { useTheme } from 'entities';
import { AboutUs } from 'pages/aboutus';
import { MainLayout } from 'app/layout';

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
      <Route path="/about" element={<AboutUs />} />
      <Route path="/join" element={<Join />} />
    </Route>,
  );

  const router = createBrowserRouter(routers, {});

  return (
    <div className={clsx('app', theme)}>
      <RouterProvider router={router} />
    </div>
  );
};

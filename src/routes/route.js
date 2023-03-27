import { Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from '../components/Loading';
import { isLoggedIn } from '../util/auth';
import { Card } from '../components';

const ThemeTest = lazy(() => import('../components/ThemeTest/ThemeTest'));
const Dashboard = lazy(() => import('../screens/Dashboard'));
const LoginPage = lazy(() => import('../screens/Login/Login'));
const Tables = lazy(() => import('../screens/Tables'));
const Cards = lazy(() => import('../screens/Cards'));

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const loggedIn = isLoggedIn();
  return !loggedIn ? <Navigate to="/login" /> : <Element {...rest} />;
};

const UnprotectedRoute = ({ element: Element, ...rest }) => {
  return <Element {...rest} />;
};

const NotFound = () => {
  return <div>Not Found</div>;
};

const routes = [
  {
    path: '/',
    element: <UnprotectedRoute element={ThemeTest} />,
  },
  {
    path: '/login',
    element: <UnprotectedRoute element={LoginPage} />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute
        element={() => (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        )}
      />
    ),
  },
  {
    path: '/tables',
    element: (
      <ProtectedRoute
        element={() => (
          <Suspense fallback={<Loading />}>
            <Tables type="paginated" />
          </Suspense>
        )}
      />
    ),
  },
  {
    path: '/tables/paginated',
    element: (
      <ProtectedRoute
        element={() => (
          <Suspense fallback={<Loading />}>
            <Tables type="paginated" />
          </Suspense>
        )}
      />
    ),
  },
  {
    path: '/tables/transparent',
    element: (
      <ProtectedRoute
        element={() => (
          <Suspense fallback={<Loading />}>
            <Tables type="transparent" />
          </Suspense>
        )}
      />
    ),
  },
  {
    path: '/tables/background',
    element: (
      <ProtectedRoute
        element={() => (
          <Suspense fallback={<Loading />}>
            <Tables type="background" />
          </Suspense>
        )}
      />
    ),
  },
  {
    path: '/card',
    element: (
      <ProtectedRoute
        element={() => (
          <Suspense fallback={<Loading />}>
            <Cards />
          </Suspense>
        )}
      />
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export { routes, ProtectedRoute, UnprotectedRoute };

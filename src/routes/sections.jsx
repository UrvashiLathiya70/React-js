import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';


export const LoginPage = lazy(() => import('src/pages/login'));
export const RegisterPage = lazy(() => import('src/pages/regiter_page'));
export const VerifyOtp = lazy(() => import('src/pages/login'));


export default function Router() {

  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      
    },
    {
      path: '/',
      element:  <LoginPage />,
      index: true,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/otp-verify',
      element: <VerifyOtp />,
    }
  ]);

  return routes;
}

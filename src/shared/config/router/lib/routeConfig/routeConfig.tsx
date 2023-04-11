import { Layout } from '@/app/layout';
import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/notFound';
import { TourPage } from '@/pages/tour';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'tours/:id',
        element: <TourPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

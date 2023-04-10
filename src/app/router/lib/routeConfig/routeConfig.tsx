import { Layout } from '@/app/layout';
import { CalendarPage } from '@/pages/calendar';
import { HomePage } from '@/pages/home';
import { ToursPage } from '@/pages/tours';
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
        path: 'tours',
        element: <ToursPage />
      },
      {
        path: '/calendar',
        element: <CalendarPage />
      }
    ]
  }
]);

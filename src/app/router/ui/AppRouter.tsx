import { RouterProvider } from 'react-router-dom';
import { router } from '../lib/routeConfig/routeConfig';

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

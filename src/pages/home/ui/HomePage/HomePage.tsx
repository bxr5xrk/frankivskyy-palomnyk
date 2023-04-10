import { Categories } from '@/entities/Categories';
import ToursList from '@/entities/Tours/ui/ToursList';

export default function HomePage() {
  return (
    <>
      <Categories />

      <ToursList />
    </>
  );
}

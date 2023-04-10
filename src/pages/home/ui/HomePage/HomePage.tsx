import { Categories } from '@/entities/Categories';
import { TourList } from '@/entities/Tours';
import { Calendar } from '@/widgets/Calendar';

export default function HomePage() {
  return (
    <>
      <Categories />

      <Calendar />

      <TourList />
    </>
  );
}

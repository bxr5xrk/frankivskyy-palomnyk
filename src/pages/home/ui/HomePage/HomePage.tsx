import { Categories } from '@/entities/Categories';
import { TourList } from '@/entities/Tours';
import { Calendar } from '@/widgets/Calendar';

export default function HomePage() {
  return (
    <>
      <div className="flex gap-10">
        <Calendar />

        <div className="space-y-4">
          <Categories />

          <TourList />
        </div>
      </div>
    </>
  );
}

import { Categories } from '@/entities/Categories';
import SortingMenu from '@/entities/Sorting/ui/SortingMenu';
import { TourList } from '@/entities/Tours';
import { Calendar } from '@/widgets/Calendar';

export default function HomePage() {
  return (
    <>
      <div className="flex gap-10">
        <Calendar />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Categories />

            <SortingMenu />
          </div>

          <TourList />
        </div>
      </div>
    </>
  );
}

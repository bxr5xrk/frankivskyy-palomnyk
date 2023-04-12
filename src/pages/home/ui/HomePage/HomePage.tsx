import { Categories } from '@/features/Categories';
import { SortingMenu } from '@/features/Sorting';
import { TourList } from '@/features/Tours';
import { Calendar } from '@/widgets/Calendar';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Франківський Паломник';
  }, []);

  return (
    <>
      <div className="relative flex">
        <Calendar />

        <div className="ms:py-0 w-full space-y-4 py-5">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <Categories />

            <SortingMenu />
          </div>

          <TourList />
        </div>
      </div>
    </>
  );
}

import { useTours } from '@/entities/tours';
import Spinner from '@/shared/ui/Spinner';
import TourItem from './TourItem';

export default function TourList() {
  const { data: tours, isLoading, isFetching } = useTours({ filters: true });

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  return tours ? (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
      {tours.map((tour) => (
        <TourItem
          date={{ start: tour.start_date, end: tour.end_date }}
          key={tour.id}
          id={tour.id}
          image={tour.images[0]}
          title={tour.title}
          extendedTitle={tour.extended_title}
          categories={tour.categories}
        />
      ))}
    </ul>
  ) : null;
}

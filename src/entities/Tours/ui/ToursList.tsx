import { useTours } from '@/features/tours';
import Spinner from '@/shared/ui/Spinner';
import { Link } from 'react-router-dom';

export default function ToursList() {
  const { data: tours, isLoading, isFetching } = useTours({});

  if (isLoading || isFetching) {
    return <Spinner />;
  }

  return tours ? (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {tours.map((tour) => (
        <li key={tour.id} className="relative">
          <Link to={`/tours/${tour.id}`}>
            <div className="group block h-44 w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={tour.images[0]}
                alt={tour.title}
                className="pointer-events-none transform object-cover group-hover:opacity-75"
              />
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {tour.title}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {tour.title}
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {tour.extended_title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  ) : null;
}

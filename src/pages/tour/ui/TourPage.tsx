import { useTour } from '@/shared/api/tours';
import { diffDates } from '@/shared/lib/diffDates';
import { formatDate } from '@/shared/lib/formatDate';
import { formatPrice } from '@/shared/lib/formatPrice';
import Spinner from '@/shared/ui/Spinner';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';

export default function TourPage() {
  const { id } = useParams();

  const {
    data: tour,
    isLoading,
    isFetching
  } = useTour(Number(id) ?? 0, { skip: !id });

  const stats = tour
    ? [
        {
          name: 'Ціна',
          value:
            formatPrice(tour.price, 'USD') +
            ' + ' +
            formatPrice(tour.additional_price, 'UAH')
        },
        {
          name: 'Тривалість',
          value: diffDates(tour.start_date, tour.end_date) + ' днів'
        },
        {
          name: 'Дата',
          value: formatDate(tour.start_date) + ' - ' + formatDate(tour.end_date)
        }
      ]
    : [];

  return (
    <div>
      {isLoading && isFetching ? <Spinner /> : null}

      {tour ? (
        <>
          {/* go back link */}
          <Link to="/" className="inline-block">
            <ArrowLeftIcon
              className="h-5 w-5 text-gray-600 hover:text-gray-800"
              aria-hidden
            />
          </Link>

          {/* header */}
          <div className="text-center">
            <h2 className="font-medium text-gray-500">{tour.title}</h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {tour.extended_title}
            </p>
            <p className="mt-4 text-gray-500">{tour.attractions}</p>
          </div>

          {/* stats */}
          <dl className="mx-auto mt-5 flex flex-col justify-center gap-8 border-b border-t border-gray-200 px-6 py-7 text-center md:flex-row md:py-14 lg:px-8">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="mx-auto flex flex-row items-center gap-3 md:flex-col"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}:
                </dt>
                <dd className="text-md font-semibold tracking-tight text-gray-900 sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* images */}
          <div className="my-8 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            {tour.images.map((image, index) => (
              <div
                key={index + 1}
                className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={String(index + 1) + 'image'}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* description */}
          <div className="space-y-5">
            {tour.description.split('[split]').map((sentence) => (
              <p key={sentence} className="mt-4 indent-4 text-gray-500">
                {sentence}
              </p>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

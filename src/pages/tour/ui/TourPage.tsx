import { useTour } from '@/features/tours';
import { formatDate } from '@/shared/lib/formatDate';
import { formatPrice } from '@/shared/lib/formatPrice';
import Spinner from '@/shared/ui/Spinner';
import { useParams } from 'react-router-dom';

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
          <div className="border-b border-gray-200 pb-10 text-center">
            <h2 className="font-medium text-gray-500">{tour.title}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {tour.extended_title}
            </p>
            <p className="mt-4 text-gray-500">{tour.attractions}</p>
          </div>

          {/* stats */}
          <div className="">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.name}
                    className="mx-auto flex max-w-xs flex-col gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* images */}
          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
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
        </>
      ) : null}
    </div>
  );
}

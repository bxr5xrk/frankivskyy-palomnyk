import { formatDate } from '@/shared/lib/formatDate';
import type { Calendar } from '@/shared/types/tours';

interface ListProps {
  calendarConfig: Calendar;
  handleClick: (i: number) => void;
}

export default function List({ calendarConfig, handleClick }: ListProps) {
  return (
    <ul className="flex flex-col divide-y overflow-hidden">
      {Object.keys(calendarConfig).map((month) => (
        <li className="space-y-2 p-3" key={month}>
          <h2 className="text-base font-semibold capitalize leading-6 text-gray-900">
            {month}
          </h2>

          <div className="ml-3">
            {calendarConfig[month].map((tour) => (
              <button
                onClick={() => handleClick(tour.id)}
                className="flex w-full flex-col space-y-1 rounded-md p-2 hover:bg-gray-100"
                key={tour.id}
              >
                <p className="text-gray-500">{formatDate(tour.start_date)}</p>
                <p className="truncate font-medium text-gray-900">
                  {tour.title}
                </p>
              </button>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

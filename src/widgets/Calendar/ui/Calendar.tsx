import { type Tour, useTours } from '@/features/tours';
import { formatDate } from '@/shared/lib/formatDate';
import { Link } from 'react-router-dom';

interface CalendarItem extends Pick<Tour, 'start_date' | 'id' | 'title'> {}

const groupEventsByMonth = (events: CalendarItem[]) => {
  const groups: Record<string, CalendarItem[]> = {};
  events.forEach((event) => {
    const date = new Date(event.start_date);
    const month = date.toLocaleDateString('uk-UA', {
      month: 'long'
    });

    if (!groups[month]) {
      groups[month] = [];
    }

    groups[month].push(event);
  });
  return groups;
};

export default function Calendar() {
  const { data: tours } = useTours({ filters: false });

  const sortedTours = tours
    ? [...tours].sort((a, b) => a.start_date.localeCompare(b.start_date))
    : [];

  const calendarConfig = groupEventsByMonth(
    sortedTours.map((i) => ({
      start_date: i.start_date,
      id: i.id,
      title: i.title
    }))
  );

  return (
    <div className="min-h-[300px] min-w-[300px] max-w-[300px] rounded-md bg-gray-50 px-2">
      {/* <h1 className="min-w-[300px] text-base font-semibold capitalize leading-6 text-gray-900">
        Календар
      </h1> */}

      <ul className="flex flex-col divide-y overflow-hidden">
        {Object.keys(calendarConfig).map((month) => (
          <li className="space-y-2 p-3" key={month}>
            <h2 className="text-base font-semibold capitalize leading-6 text-gray-900">
              {month}
            </h2>

            <div className="ml-3">
              {calendarConfig[month].map((tour) => (
                <Link
                  to={`/tours/${tour.id}`}
                  className="flex flex-col space-y-1 rounded-md p-2 hover:bg-gray-100"
                  key={tour.id}
                >
                  <p className="text-gray-500">{formatDate(tour.start_date)}</p>
                  <p className="truncate font-medium text-gray-900">
                    {tour.title}
                  </p>
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

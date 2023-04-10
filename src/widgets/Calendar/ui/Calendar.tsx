import { type Tour, useTours } from '@/features/tours';
import { formatDate } from '@/shared/lib/formatDate';

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
  const { data: tours } = useTours();

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

  console.log(calendarConfig);

  return (
    <div>
      <h1>Календар</h1>

      {/* {sortedTours?.map((i) => (
        <div key={i.id}>
          <h2>{formatDate(i.start_date)}</h2>
          <p>{i.title}</p>
        </div>
      ))} */}
    </div>
  );
}

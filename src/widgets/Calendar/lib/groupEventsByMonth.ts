import { type Tour } from '@/features/tours';

interface CalendarItem extends Pick<Tour, 'start_date' | 'id' | 'title'> {}

export const groupEventsByMonth = (events: CalendarItem[]) => {
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

import { diffDates } from '@/shared/lib/diffDates';
import { formatDate } from '@/shared/lib/formatDate';
import { formatPrice } from '@/shared/lib/formatPrice';
import type { Tour } from '@/shared/types/tours';

export const getStats = (tour?: Tour) =>
  tour
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

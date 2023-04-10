import { useTours } from '@/features/tours';

export default function ToursList() {
  const { data: tours } = useTours({});

  return tours ? (
    <div className="grid grid-cols-3 gap-10">
      {tours.map((tour) => (
        <div
          className="grid grid-cols-1 gap-5 rounded-lg p-5 shadow-md"
          key={tour.id}
        >
          <h2>{tour.title}</h2>
          <p>{tour.price}</p>
        </div>
      ))}
    </div>
  ) : null;
}

import { useTour } from '@/features/tours';
import { useParams } from 'react-router-dom';

export default function TourPage() {
  const { id } = useParams();

  const { data: tour } = useTour(Number(id) ?? 0, { skip: !id });

  return (
    <div>
      <h1>{tour?.title}</h1>
    </div>
  );
}

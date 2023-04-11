import { useTours } from '@/entities/tours';
import { allowOrDisallowScroll } from '@/shared/lib/allowOrDisallowScroll';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { groupEventsByMonth } from '../lib/groupEventsByMonth';
import List from './List';
import SideOverWrapper from './SideOverWrapper';
import SideWrapper from './SideWrapper';
import Toggle from './Toggle';

export default function Calendar() {
  const navigate = useNavigate();
  const { data: tours } = useTours({ filters: false });
  const [showSideOver, setShowSideOver] = useState(false);

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

  const handleClickTour = (id: number) => {
    if (showSideOver) {
      setShowSideOver(false);
    }

    allowOrDisallowScroll(true);
    navigate(`/tours/${id}`);
  };

  return (
    <>
      <SideWrapper>
        <List calendarConfig={calendarConfig} handleClick={handleClickTour} />
      </SideWrapper>

      <SideOverWrapper
        show={showSideOver}
        icon={
          !showSideOver ? (
            <Toggle
              onClick={() => {
                allowOrDisallowScroll(false);
                setShowSideOver(true);
              }}
            />
          ) : null
        }
        onHide={() => {
          allowOrDisallowScroll(true);
          setShowSideOver(false);
        }}
      >
        <List calendarConfig={calendarConfig} handleClick={handleClickTour} />
      </SideOverWrapper>
    </>
  );
}

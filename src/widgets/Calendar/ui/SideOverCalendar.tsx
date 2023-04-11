import { useTours } from '@/features/tours';
import { cl } from '@/shared/lib/cl';
import { formatDate } from '@/shared/lib/formatDate';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { groupEventsByMonth } from '../lib/groupEventsByMonth';

export default function SideOverCalendar() {
  const navigate = useNavigate();
  const { data: tours } = useTours({ filters: false });
  const [show, setShow] = useState(false);

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
    <div className="block md:hidden">
      {/* toggle */}
      {!show ? (
        <button
          type="button"
          className="fixed -left-10 top-20 z-20 inline-flex h-16 w-16 rounded-full border border-primary-600 bg-primary-400 p-3 pl-4 pt-4"
          onClick={() => {
            document.body.style.overflowY = 'hidden';
            setShow(true);
          }}
        >
          <ChevronRightIcon className="absolute right-0 top-5 h-5 w-5 text-white" />
        </button>
      ) : null}

      {/* background */}
      <div
        onClick={() => {
          document.body.style.overflowY = 'auto';
          setShow(false);
        }}
        className={cl(
          'fixed inset-0 z-10 bg-black opacity-50 duration-200 ease-in-out lg:invisible',
          show ? 'visible' : 'invisible'
        )}
      ></div>

      {/* calendar */}
      <div
        className={cl(
          show ? 'visible opacity-100' : 'invisible opacity-0',
          'fixed inset-2 z-20 space-y-2 overflow-y-scroll rounded-lg bg-gray-50 p-2 duration-300 ease-in-out sm:p-4'
        )}
      >
        <button
          type="button"
          className="inline-block pl-4 pt-4"
          onClick={() => {
            document.body.style.overflowY = 'auto';
            setShow(false);
          }}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="z-10 rounded-md bg-gray-50 px-2">
          <ul className="flex flex-col divide-y overflow-hidden">
            {Object.keys(calendarConfig).map((month) => (
              <li className="space-y-2 p-3" key={month}>
                <h2 className="text-base font-semibold capitalize leading-6 text-gray-900">
                  {month}
                </h2>

                <div className="ml-3">
                  {calendarConfig[month].map((tour) => (
                    <button
                      onClick={() => {
                        document.body.style.overflowY = 'auto';
                        navigate(`/tours/${tour.id}`);
                        setShow(false);
                      }}
                      className="flex w-full flex-col space-y-1 rounded-md p-2 hover:bg-gray-100"
                      key={tour.id}
                    >
                      <p className="text-gray-500">
                        {formatDate(tour.start_date)}
                      </p>
                      <p className="truncate font-medium text-gray-900">
                        {tour.title}
                      </p>
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

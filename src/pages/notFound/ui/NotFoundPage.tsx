import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex h-full flex-col items-center px-6 py-24 text-center sm:py-32 lg:px-8">
      <p className="text-primary-600 text-base font-semibold">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Сторінку не знайдено
      </h1>

      <p className="mt-6 text-base leading-7 text-gray-600">
        Вибачте, ми не можемо знайти сторінки яку ви шукаєте
      </p>

      <Link
        to="/"
        className="mt-10 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Назад на головну
      </Link>
    </div>
  );
}

import React from 'react';

interface StatCardProps {
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, description }) => {
  return (
    <div className="flex flex-col flex-1 shrink px-16 py-12 rounded-3xl basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="gap-2.5 self-center px-12 py-2.5 text-6xl font-bold whitespace-nowrap rounded-2xl border border-gray-100 border-solid bg-neutral-100 text-zinc-900 max-md:px-5 max-md:text-4xl">
        {value}
      </div>
      <p className="mt-8 text-lg font-medium leading-7 text-center text-neutral-600">
        {description}
      </p>
    </div>
  );
};

export default StatCard;

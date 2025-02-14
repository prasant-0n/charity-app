import React from 'react';

interface GoalCardProps {
  title: string;
  description: string;
}

const GoalCard: React.FC<GoalCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-wrap flex-1 shrink gap-5 items-start p-10 bg-white rounded-2xl border border-gray-200 border-solid basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
        <h3 className="text-2xl font-semibold text-neutral-800 max-md:max-w-full">
          {title}
        </h3>
        <p className="mt-2.5 text-lg font-medium leading-7 text-neutral-600 max-md:max-w-full">
          {description}
        </p>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2945fcf02b00d0e1e77a87503060ed9baeadc7b5f4872c564870997ec202beef?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
        className="object-contain shrink-0 w-6 aspect-square"
        alt=""
      />
    </div>
  );
};

export default GoalCard;

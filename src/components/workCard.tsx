import React from 'react';

interface WorkCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, iconSrc }) => {
  return (
    <div className="flex flex-1 shrink gap-2 items-start p-10 bg-white rounded-2xl border border-gray-200 border-solid basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
        <h3 className="text-2xl font-semibold text-neutral-800">{title}</h3>
        <p className="mt-2.5 text-lg font-medium leading-7 text-neutral-600">
          {description}
        </p>
      </div>
      <img
        loading="lazy"
        src={iconSrc}
        className="object-contain shrink-0 w-6 aspect-square"
        alt=""
      />
    </div>
  );
};

export default WorkCard;

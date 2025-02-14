import React from 'react';

export interface ImpactCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink p-5 bg-gray-50 rounded-2xl border-2 border-solid basis-0 border-gray-200 min-w-[240px]">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full rounded-2xl aspect-[1.54]"
      />
      <div className="flex flex-col px-4 pt-8 pb-2 w-full rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
        <p className="mt-2 text-base font-medium leading-6 text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImpactCard;

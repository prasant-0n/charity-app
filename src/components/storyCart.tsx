import React from 'react';

export interface StoryCardProps {
  name: string;
  age: string;
  country: string;
  imageSrc: string;
  title: string;
  description: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  name,
  age,
  country,
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink p-5 bg-gray-50 rounded-2xl border-2 border-solid basis-0 border-gray-200 min-w-[240px]">
      <div className="flex overflow-hidden flex-col w-full text-base rounded-2xl border-solid shadow-lg  border-gray-200">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${name}'s story`}
          className="object-contain w-full rounded-2xl aspect-[1.27]"
        />
        <div className="flex gap-3.5 items-start px-6 py-4 w-full bg-white max-md:px-5">
          <div className="flex flex-col flex-1 shrink whitespace-nowrap rounded-3xl basis-0">
            <div className="font-medium text-neutral-600">Name</div>
            <div className="font-semibold text-zinc-900">{name}</div>
          </div>
          <div className="shrink-0 self-stretch w-0 h-12 bg-gray-50 border border-gray-200 border-solid" />
          <div className="flex flex-col flex-1 shrink rounded-3xl basis-0">
            <div className="font-medium text-neutral-600">Age</div>
            <div className="font-semibold text-zinc-900">{age}</div>
          </div>
          <div className="shrink-0 self-stretch w-0 h-12 bg-gray-100 border border-gray-100 border-solid" />
          <div className="flex flex-col flex-1 shrink whitespace-nowrap rounded-3xl basis-0">
            <div className="font-medium text-neutral-600">Country</div>
            <div className="font-semibold text-zinc-900">{country}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-8 w-full">
        <div className="flex flex-col w-full rounded-xl shadow-lg px-4 py-2">
          <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
          <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600">
            {description}
          </p>
        </div>
        <button className="gap-2.5 self-stretch px-6 py-3.5 mt-6 w-full text-sm font-medium border-2 border-solid bg-white border-gray-200 rounded-[100px] text-zinc-900 max-md:px-5">
          Read Full Story
        </button>
      </div>
    </div>
  );
};

export default StoryCard;

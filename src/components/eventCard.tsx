import React from 'react';

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  date,
  title,
  description,
}) => {
  return (
    <article className="flex overflow-hidden flex-col flex-1 shrink p-10 bg-gray-50 rounded-2xl border-2 border-solid basis-0 border-gray-200 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col w-full text-base font-medium rounded-2xl border-solid  border-neutral-100 text-neutral-600 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          className="object-contain w-full rounded-2xl aspect-[1.61] max-md:max-w-full"
          alt={title}
        />
        <div className="flex flex-col justify-center items-start p-4 w-full max-md:max-w-full">
          <div className="flex gap-0.5 items-center px-3.5 py-3 border-2 border-gray-200 border-solid bg-neutral-100 rounded-[100px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bef3176a7977fc1ec4c24bcb60af7bca1d1df44d04816593e8dbc818ba30ba85?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt=""
            />
            <time className="self-stretch my-auto">{date}</time>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <h3 className="text-xl font-semibold text-zinc-900 max-md:max-w-full">
          {title}
        </h3>
        <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 items-start mt-8 w-full text-sm font-medium max-md:max-w-full">
        <button className="flex-1 shrink gap-2.5 self-stretch px-5 py-3.5 border-2 border-solid bg-gray-200 border-zinc-200 min-w-[240px] rounded-[100px] text-zinc-900 shadow-lg">
          Learn More
        </button>
        <button className="flex-1 shrink gap-2.5 self-stretch px-5 py-3.5 text-white bg-neutral-800 min-w-[240px] rounded-[100px]">
          Join Now
        </button>
      </div>
    </article>
  );
};

export default EventCard;

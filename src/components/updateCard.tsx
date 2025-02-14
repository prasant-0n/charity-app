import React from 'react';

interface UpdateCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({
  image,
  date,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink p-10 bg-gray-50 rounded-2xl border-2 border-solid basis-0 border-gray-200 min-w-[240px] max-md:px-5 max-md:max-w-full shadow-2xl">
      <div className="flex overflow-hidden flex-col w-full text-base font-medium rounded-2xl  text-neutral-600 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          className="object-contain w-full rounded-2xl aspect-[1.61] max-md:max-w-full"
          alt={title}
        />
        <div className="flex flex-col justify-center items-start p-4 w-full max-md:max-w-full">
          <div className="flex gap-1 items-center px-3.5 py-3 border border-gray-100 border-solid bg-neutral-100 rounded-[100px]">
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
      <div className="flex flex-col mt-8 w-full max-md:max-w-full border-gray-200 border-2 rounded-xl p-4 shadow-xl">
        <h3 className="text-xl font-semibold text-zinc-900 max-md:max-w-full">
          {title}
        </h3>
        <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
};

export default UpdateCard;

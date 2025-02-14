import React from 'react';

export interface CaseStudyCardProps {
  imageSrc: string;
  readTime: string;
  date: string;
  title: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  imageSrc,
  readTime,
  date,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center p-10 bg-gray-50 rounded-2xl border-solid basis-0 border-2 border-gray-200 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full rounded-2xl aspect-[1.69] max-md:max-w-full"
      />
      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex gap-4 items-start self-start px-3.5 py-3 text-base font-medium border-2 border-gray-100 border-solid bg-gray-200 rounded-[100px] text-neutral-600">
            <div className="flex gap-1 items-center rounded-3xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac61109400305a74ddbc11274929b17aaf08c0975d1b169fb3de4f590c21e989?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                alt="Clock icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="self-stretch my-auto">{readTime}</div>
            </div>
            <div className="shrink-0 self-stretch w-0 h-6 border-2 border-gray-200 border-solid bg-neutral-100" />
            <div className="flex gap-1 items-center rounded-3xl">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bef3176a7977fc1ec4c24bcb60af7bca1d1df44d04816593e8dbc818ba30ba85?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                alt="Calendar icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="self-stretch my-auto">{date}</div>
            </div>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-zinc-900 max-md:max-w-full">
            {title}
          </h3>
        </div>
        <p className="mt-3 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          {description}
        </p>
      </div>
      <button className="gap-2.5 self-stretch px-5 py-3.5 mt-8 w-full text-sm font-medium border-2 border-solid bg-neutral-100 border-gray-200 rounded-[100px] text-zinc-900 max-md:max-w-full shadow-lg">
        View Case Study
      </button>
    </div>
  );
};

export default CaseStudyCard;

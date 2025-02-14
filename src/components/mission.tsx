import React from 'react';
import MissionPoint from './missionPoint';

const missionPoints = [
  'To help children level up their lives by providing them with the essential services they need to succeed.',
  'We believe that every child deserves the opportunity to reach their full potential, regardless of their circumstances.',
  'We provide a variety of programs and services to help children in need, including education, healthcare, nutrition, and enrichment.',
  'We believe that by providing these essential services, we can help children level up their lives and reach their full potential.',
];

const Mission: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 shrink self-start p-12 rounded-3xl border border-gray-100 border-solid basis-0 bg-neutral-100 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center w-full text-zinc-900 max-md:max-w-full">
        <h3 className="flex-1 shrink self-stretch my-auto text-4xl font-semibold basis-12 max-md:max-w-full">
          Mission
        </h3>
        <button className="flex gap-2.5 justify-center items-center self-stretch px-6 py-5 my-auto text-lg font-medium bg-white border border-gray-100 border-solid rounded-[100px] max-md:px-5">
          <span className="self-stretch my-auto">Learn More</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a735e7e2fb92684fb071cb12aeb3337726cbc8df9c06339cc8f917bd1bcaee65?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt=""
          />
        </button>
      </div>
      <div className="flex flex-col p-12 mt-12 w-full bg-white rounded-3xl border border-gray-100 border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {missionPoints.map((point, index) => (
          <MissionPoint key={index} number={index + 1} description={point} />
        ))}
      </div>
    </div>
  );
};

export default Mission;

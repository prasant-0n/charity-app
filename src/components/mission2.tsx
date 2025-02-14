import React from 'react';
import { Link } from 'react-router-dom';

interface MissionPoint {
  number: string;
  description: string;
}

const missionPoints: MissionPoint[] = [
  {
    number: '1',
    description:
      'To help children level up their lives by providing them with the essential services they need to succeed.',
  },
  {
    number: '2',
    description:
      'We believe that every child deserves the opportunity to reach their full potential, regardless of their circumstances.',
  },
  {
    number: '3',
    description:
      'We provide a variety of programs and services to help children in need, including education, healthcare, nutrition, and enrichment.',
  },
  {
    number: '4',
    description:
      'We believe that by providing these essential services, we can help children level up their lives and reach their full potential.',
  },
];

const Mission: React.FC = () => {
  return (
    <section className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-36 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl font-semibold leading-tight text-zinc-900 max-md:max-w-full">
          Empowering Children, Creating Futures
        </h2>
        <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          At ForHelp, we are on a heartfelt mission to empower underprivileged
          children by providing them with the essential resources and
          opportunities they need to build a brighter future.
        </p>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="gap-2.5 self-center px-6 py-4 text-base font-medium border border-gray-200 border-solid bg-gray-50 rounded-[100px] text-zinc-900 max-md:px-5 max-md:max-w-full">
          We believe that by working together, we can create a world where every
          child has the opportunity to reach their full potential.
        </div>
        <div className="flex flex-col mt-10 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/925d99b43cd03cacdd1b672a3a1cf5e7e7a0a93a01f586b50c4ed56062b5c1f1?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
              alt="Children playing"
              className="object-contain aspect-[0.84] min-w-[240px] w-[521px] max-md:max-w-full"
            />
            <div className="flex flex-col flex-1 shrink self-start p-10 rounded-2xl border border-gray-200 border-solid basis-0 bg-gray-50 min-w-[240px] max-md:px-5 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 items-center w-full text-zinc-900 max-md:max-w-full">
                <h3 className="flex-1 shrink self-stretch my-auto text-3xl font-semibold basis-10 max-md:max-w-full">
                  Mission
                </h3>
                <Link
                  to="/learn-more"
                  className="flex gap-2.5 justify-center items-center self-stretch px-5 py-3.5 my-auto text-sm font-medium bg-white border border-gray-200 border-solid rounded-[100px]"
                >
                  <span className="self-stretch my-auto">Learn More</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b6b3d88d78a2e84fa4059d7e64a3be25bc77e05b4c81f7c045b64eba229c2f3?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                  />
                </Link>
              </div>
              <div className="flex flex-col p-10 mt-10 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                {missionPoints.map((point, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <div className="mt-8 w-full bg-gray-50 border border-gray-200 border-solid min-h-[1px] max-md:max-w-full" />
                    )}
                    <div className="flex flex-wrap gap-2.5 items-center mt-8 w-full max-md:max-w-full">
                      <div className="flex justify-center items-center gap-2.5 self-stretch px-2.5 my-auto w-11 h-11 text-xl font-semibold text-center whitespace-nowrap bg-lime-100 rounded-[100px] text-zinc-900">
                        {point.number}
                      </div>
                      <p className="flex-1 shrink self-stretch my-auto text-base font-medium leading-6 basis-5 text-zinc-800 max-md:max-w-full">
                        {point.description}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

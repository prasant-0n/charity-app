import React from 'react';
import { Link } from 'react-router-dom';

interface VisionPoint {
  number: string;
  description: string;
}

const visionPoints: VisionPoint[] = [
  {
    number: '1',
    description:
      'A world where every child has the opportunity to reach their full potential.',
  },
  {
    number: '2',
    description:
      'A world where children are healthy, educated, and well-nourished.',
  },
  {
    number: '3',
    description:
      'A world where children have the opportunity to participate in extracurricular activities and have fun.',
  },
  {
    number: '4',
    description: 'A world where children are safe and loved.',
  },
];

const Vision: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 mt-10 w-full max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-start p-10 rounded-2xl border border-gray-200 border-solid basis-0 bg-gray-50 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center w-full text-zinc-900 max-md:max-w-full">
          <h3 className="flex-1 shrink self-stretch my-auto text-3xl font-semibold basis-10 max-md:max-w-full">
            Vision
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
        <div className="flex flex-col p-10 mt-10 w-full h-full bg-white rounded-2xl border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
          {visionPoints.map((point, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="mt-8 w-full bg-gray-100 border border-gray-200 border-solid min-h-[1px] max-md:max-w-full" />
              )}
              <div className="flex flex-wrap gap-2.5 items-center mt-8 w-full max-md:max-w-full">
                <div className="flex justify-center items-center gap-2.5 self-stretch px-2.5 my-auto w-11 h-11 text-xl font-semibold text-center whitespace-nowrap bg-lime-100 rounded-[100px] text-zinc-900">
                  {point.number}
                </div>
                <p className="flex-1 shrink self-stretch my-auto text-base font-medium basis-5 text-zinc-800 max-md:max-w-full">
                  {point.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf22c94a86a3251e3cab7341a4a3d4b51b528812f9e93405a4b834fdd3da92a4?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
        alt="Children playing together"
        className="object-contain aspect-[0.85] min-w-[240px] w-[521px] max-md:max-w-full"
      />
    </div>
  );
};

export default Vision;

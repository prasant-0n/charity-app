import React from 'react';
import StatCard from './statCard';
import { SVGLineGlowAnimateContainer } from './SVGLineGlowAnimate';

const stats = [
  {
    value: '85%',
    description:
      'Children enrolled in the Loved program are increasingly poised to emerge as future leaders within their communities.',
  },
  {
    value: '3,250',
    description:
      'The average time that children supported by Loved program spend in secure and nurturing activities.',
  },
  {
    value: '69%',
    description:
      'Secondary education completion is more probable for 69% of children enrolled in the Loved program.',
  },
];

const Stats: React.FC = () => {
  return (
    <section className="flex flex-col mt-36 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-52 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="text-5xl font-semibold leading-tight text-zinc-900 max-md:max-w-full max-md:text-4xl">
          Give a Child Hope Today
        </h2>
        <p className="mt-3.5 text-lg font-medium text-neutral-600 max-md:max-w-full">
          Welcome to our charity's online platform, where we unite hearts and
          efforts to bring hope to the lives of children in need.
        </p>
      </div>
      <div className="flex flex-wrap items-start mt-20 w-full bg-gray-50 rounded-3xl  max-md:mt-10 max-md:max-w-full border border-solid border-gray-200 p-4 transition-all duration-500">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              // Use SVGLineGlowAnimate as the divider between StatCards
              <SVGLineGlowAnimateContainer
              // movementDelay={index * 3000}
              // id={index}
              // additionalHeight={20} // Adjust height if necessary
              />
            )}
            <StatCard value={stat.value} description={stat.description} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;

import React from 'react';
import WorkCard from './workCard';

const workMethods = [
  {
    title: 'Needs Assessment',
    description:
      'We start by understanding the unique challenges of the communities we serve.',
    iconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/13e2b4b0343cd9c5b3124adc6f7054ed3f2497d28f63ecf0a275013bf4caff04?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
  },
  {
    title: 'Collaborative Partnerships',
    description:
      'We team up with local organizations and volunteers to maximize our impact.',
    iconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/aa842dbdaa9b0ca5b584e113af5e2d8b43ce51860ffd1d428b21bbff439fc202?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
  },
  {
    title: 'Transparent Impact Reporting',
    description:
      'We provide regular updates on our projects to build trust and accountability.',
    iconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/2945fcf02b00d0e1e77a87503060ed9baeadc7b5f4872c564870997ec202beef?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
  },
];

const HowWeWork: React.FC = () => {
  return (
    <section className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
      <div className="relative">
        <div className="flex flex-col items-center px-8 md:px-64 w-full text-center md:absolute md:top-1/2 bottom-0 transform -translate-y-1/2 mt-40">
          <div className="bg-white p-6 md:p-12 rounded-3xl w-full max-w-4xl shadow-lg">
            <h2 className="text-lg md:text-5xl font-semibold text-zinc-900">
              How We Work
            </h2>
            <p className="mt-3.5 text-lg font-medium leading-7 text-neutral-600 max-md:max-w-full">
              At ForHelp, we begin by assessing community needs, collaborating
              with local partners, and ensuring transparency in our operations.
              Our approach is rooted in understanding, collaboration, and
              accountability, allowing us to create a meaningful impact.
            </p>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c3ab171d1ad2704c5a42ed138fe7d1e326c2b6f288ce71b15772861bf70eb92?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
          className="object-contain w-full aspect-[2.99] max-md:max-w-full"
          alt="How We Work background"
        />
      </div>
      <div className="flex flex-col w-full mt-20 max-md:mt-28">
        <div className="flex flex-wrap gap-8 items-start p-12 mt-8 w-full rounded-3xl border border-gray-200 border-solid bg-gray-50 max-md:px-5 max-md:max-w-full">
          {workMethods.map((method, index) => (
            <WorkCard key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;

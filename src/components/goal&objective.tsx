import React from 'react';
import GoalCard from './goalCard';

const goals = [
  {
    title: 'The goal of ForHelp',
    description:
      'The goal of ForHelp is to help children level up their lives by providing them with the essential services they need to succeed.',
  },
  {
    title: "The organization's objective",
    description:
      "Providing education and tutoring to children in need, Providing healthcare and nutrition to children in need, Providing enrichment opportunities to children in need, Advocating for children's rights",
  },
];

const GoalsAndObjectives: React.FC = () => {
  return (
    <section className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
      <div className="relative">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0f1df3f0c95a2b22d1cb83c1e01307f0e2f61b5a3ad76be6144dcf77779f194?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
          className="object-contain w-full aspect-[2.99] max-md:max-w-full"
          alt="Goals and Objectives background"
        />
        <div className="flex flex-col px-64 w-full text-center max-md:px-5 max-md:max-w-full absolute  top-96">
          <div className="flex flex-col p-12 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
            <h2 className="text-5xl font-semibold leading-tight text-zinc-900 max-md:max-w-full max-md:text-4xl">
              Goals and Objectives
            </h2>
            <p className="mt-3.5 text-lg font-medium leading-7 text-neutral-600 max-md:max-w-full">
              ForHelp's goals and objectives are centered around making a
              meaningful impact on the lives of those in need. We strive to
              provide essential resources, support, and opportunities to
              underprivileged communities, fostering positive change and
              creating a brighter future for all.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-md:max-w-full mt-20">
        <div className="flex flex-wrap gap-8 items-start p-12 mt-8 w-full rounded-3xl border border-gray-200 border-solid bg-gray-50 max-md:px-5 max-md:max-w-full">
          {goals.map((goal, index) => (
            <GoalCard key={index} {...goal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsAndObjectives;

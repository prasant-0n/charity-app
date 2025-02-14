import React from 'react';
import ImpactCard, { ImpactCardProps } from './impactCard';

const impacts: ImpactCardProps[] = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/24c0c471927ec78c116ad89c4229e623ace2ea2f09e59b5a1ed50e1e6e49b4b6?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    title: 'Program Expansion',
    description:
      'Donations enable organizations to expand their programs and reach more individuals in need. With increased funding, they can extend their services, support additional beneficiaries, and make a significant impact on the community.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/f6807823fda4be570e065a1cf8e03ab93a27035752435d2bde727f485aa860ea?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    title: 'Enhanced Services',
    description:
      'Donations allow organizations to enhance the quality and scope of their services. They can invest in better facilities, resources, and equipment, ensuring that beneficiaries receive the best possible support and care.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/14e24492b95fdad4108cb4ce97e064bf9ffcc3d70c04e3f3caa2fd50b5f4679e?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    title: 'Empowering Beneficiaries',
    description:
      'Donations empower individuals and communities by providing them with resources, education, and opportunities to improve their lives. This empowerment encourages self-sufficiency and fosters a sense of pride and ownership.',
  },
];

const DonationImpactSection: React.FC = () => {
  return (
    <section className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-36 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl font-semibold leading-tight text-zinc-900 max-md:max-w-full">
          Amplifying Change Through Donations
        </h2>
        <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          Discover the remarkable impact of your donations on ForHelp's mission
          to empower underprivileged children. Your support plays a pivotal role
          in driving positive change across various initiatives.
        </p>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          {impacts.map((impact, index) => (
            <ImpactCard key={index} {...impact} />
          ))}
        </div>
        <button className="flex gap-2.5 items-center self-center px-5 py-3.5 mt-10 text-sm font-medium border-2 border-solid bg-neutral-100 border-gray-200 rounded-[100px] text-zinc-900">
          <span className="self-stretch my-auto">View More Impacts</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fba79890d57e79e258cb92015bb02a05419721898f0a07a51b65dff4bfca5fa?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
            alt="Arrow right"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </button>
      </div>
    </section>
  );
};

export default DonationImpactSection;

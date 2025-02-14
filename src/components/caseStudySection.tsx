import React from 'react';
import CaseStudyCard, { CaseStudyCardProps } from './caseStudyCard';

const caseStudies: CaseStudyCardProps[] = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/051cf8712a889d77d50add95722a5e07504058b7e42aef1c420994f6cc141894?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    readTime: '5 min Read',
    date: 'July 15, 2023',
    title: 'A Journey of Resilience',
    description:
      "This case study follows the inspiring story of Aisha, a determined young girl from a rural village in Kenya, who faced significant obstacles in accessing education. Through ForHelp's Education Sponsorship program, Aisha received the necessary resources, including school fees and supplies, to pursue her dreams.",
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5834f94f73bb5f73906b9c6746dfabd24d2cf23f2276e9ed1bf95c22a0adeba3?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    readTime: '4 min Read',
    date: 'August 5, 2023',
    title: 'Healing Through Art - The Story of Raj',
    description:
      "Raj, a soft-spoken boy from a troubled background in India, struggled to express himself emotionally. This case study delves into how ForHelp's Music Therapy program provided Raj with an outlet for his emotions and a newfound passion for music. Through the healing power of music and emotional support.",
  },
];

const CaseStudiesSection: React.FC = () => {
  return (
    <section className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-36 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl font-semibold leading-tight text-zinc-900 max-md:max-w-full">
          Our Case Studies
        </h2>
        <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          Discover the remarkable impact of your donations on ForHelp's mission
          to empower underprivileged children. Your support plays a pivotal role
          in driving positive change across various initiatives.
        </p>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
        <button className="flex gap-2.5 items-center self-center px-5 py-3.5 mt-10 text-sm font-medium border-2 border-solid bg-neutral-100 border-gray-200 rounded-[100px] text-zinc-900">
          <span className="self-stretch my-auto">View More Case Studies</span>
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

export default CaseStudiesSection;

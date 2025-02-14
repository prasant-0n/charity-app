import React from 'react';
import StoryCard, { StoryCardProps } from './storyCart';

const stories: StoryCardProps[] = [
  {
    name: 'Sofia',
    age: '10 Years',
    country: 'Kenya',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/39c67a2068ba8f7e0aa81c8980d20e9e5aca7570417b92b9ad4ae5d9c1dde618?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    title: 'Finding Hope Amidst Destruction',
    description:
      'Sofia, a bright and determined young girl from a rural village in Kenya, faced significant challenges accessing education.',
  },
  {
    name: 'Raj',
    age: '12 Years',
    country: 'India',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/45736a7380574f6bb36cf8ae1a37b2c12cbc00f16ed8d8ff1771cf513fe50eb5?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    title: 'Healing Through Music',
    description:
      "Raj, a soft-spoken boy from a troubled background, struggled to express himself. Through ForHelp's Music Therapy program.",
  },
  {
    name: 'Maria',
    age: '8 Years',
    country: 'Brazil',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/7303a6953a91b43f93d0c0c40a4dd93b58849d57b73d73e5d585b7474b870d13?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    title: 'Empowered to Dream Big',
    description:
      "Maria, an orphaned girl with a difficult past, found a loving home in ForHelp's orphanage in Brazil.",
  },
];

const TransformationSection: React.FC = () => {
  return (
    <section className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-36 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl font-semibold leading-tight text-zinc-900 max-md:max-w-full">
          Inspiring Transformations
        </h2>
        <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          Witness the transformative journey of young souls as they overcome
          adversity, discover their potential, and chase their dreams. These
          stories of hope and resilience showcase the profound difference that
          compassion and support can make in the lives of underprivileged
          children.
        </p>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
        <button className="flex gap-2.5 items-center self-center px-5 py-3.5 mt-10 text-sm font-medium border-2 border-solid bg-gray-200 border-zinc-200 rounded-[100px] text-zinc-900">
          <span className="self-stretch my-auto">View More Stories</span>
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

export default TransformationSection;

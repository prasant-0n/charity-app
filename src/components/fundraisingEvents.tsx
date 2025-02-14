import React from 'react';

type EventCardProps = {
  title: string;
  description: string;
  image: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col flex-1 shrink p-8 bg-gray-50 rounded-2xl border-solid basis-0 border-2 border-gray-200 min-w-64 max-md:px-5">
      <div className="flex flex-col w-full">
        <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
        <p className="mt-1.5 text-base font-medium leading-6 text-neutral-600">
          {description}
        </p>
      </div>
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain mt-6 w-full rounded-2xl aspect-[1.4]"
      />
      <div className="flex gap-4 items-start self-center mt-6">
        <a
          href="#get-involved"
          className="flex justify-center gap-2 items-center py-2 px-3 bg-zinc-900 rounded-[100px] "
        >
          <span className="self-stretch my-auto text-sm font-medium text-white">
            Get Involved
          </span>
          <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto bg-zinc-800 h-8 rounded-[100px] w-8 ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8e0e0e6270f4ad9313e2f1f81d14578f3e99e81cad27584ce459971d19d505?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
              alt=""
              className="object-contain aspect-square w-[12px]"
            />
          </div>
        </a>
        <a
          href="#description"
          className="flex justify-center text-center gap-2 self-stretch px-5 py-2 text-sm font-medium border border-solid bg-neutral-100 border-zinc-200 rounded-[100px] text-zinc-900 shadow-lg"
        >
          <span className="self-stretch my-auto text-sm font-medium ">
            Get Involved
          </span>
        </a>
      </div>
    </div>
  );
};

const FundraisingEvents: React.FC = () => {
  const events = [
    {
      title: 'Walkathons',
      description:
        'Walkathons are a great way to get exercise and raise money for ForHelp at the same time.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/5e261ac15796baa674305fff983de29f421c862dc4b9bd037f5a2a1de915b332?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    },
    {
      title: '5K Runs',
      description:
        '5K runs are another great way to get exercise and raise money for ForHelp.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/2ac76dc21e1d92745a2db8d878dcd042b383d34341cd2074d885ee6ea0bcf5c6?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    },
    {
      title: 'Comedy Nights',
      description:
        'Comedy nights are a fun and entertaining way to raise money for ForHelp.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/894de9b50909c616ba4aca676786e1c343cf0a9204196f4957867ec66ddea789?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    },
    {
      title: 'Concerts',
      description:
        'Concerts are a great way to enjoy live music and raise money for ForHelp at the same time.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/9660e0659bc578f2e2cc3bac95dc60cef1cb39013f3247542508624719d602b0?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    },
  ];

  return (
    <section className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-36 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl font-semibold leading-tight text-zinc-900 max-md:max-w-full">
          Fundraising Events
        </h2>
        <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          ForHelp hosts a variety of fundraising events throughout the year.
          These events are a great way to raise money for ForHelp and to have
          fun with other people who care about helping children in need.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 items-start mt-10 w-full max-md:max-w-full">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
      <a
        href="#all-opportunities"
        className="flex gap-1.5 items-center self-center px-5 py-3.5 mt-10 text-sm font-medium border border-solid bg-neutral-100 border-zinc-200 rounded-[100px] text-zinc-900"
      >
        <span className="self-stretch my-auto">View All Opportunities</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f953de10a1ad89419d8eecb422b31ec3349b4feb97c306c5f3ebed00001e147?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
      </a>
    </section>
  );
};

export default FundraisingEvents;

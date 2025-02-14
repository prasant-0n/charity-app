import React from 'react';

const VolunteerOpportunities: React.FC = () => {
  return (
    <section className="flex flex-wrap overflow-hidden relative gap-10 justify-center items-start px-16 py-24 mt-16 w-full bg-gray-50 rounded-2xl border-solid border-2 border-gray-200 max-md:px-5 max-md:mt-10 max-md:max-w-full ">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92cad10d2008a326d0d9a05fd347a191882744009fe7689186ab60701ba2099a?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
        alt=""
        className="object-contain absolute top-0 -left-2.5 z-0 shrink-0 h-20 aspect-[1.34] w-[107px]"
      />
      <h2 className="gap-2.5 p-4 text-4xl font-semibold leading-tight bg-lime-200 rounded-2xl min-w-[240px] text-zinc-900 max-md:max-w-full">
        Volunteer Opportunities
      </h2>
      <div className="flex z-0 flex-col flex-1 shrink basis-8 min-w-[240px] max-md:max-w-full">
        <p className="text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          ForHelp offers a variety of volunteer opportunities for people of all
          ages and skill levels. Whether you're interested in tutoring children,
          helping with fundraising events, or simply lending a helping hand,
          there's a volunteer opportunity for you.
        </p>
        <div className="flex flex-wrap gap-4 items-start self-start mt-8">
          <a
            href="#volunteer"
            className="flex gap-2.5 items-center py-2 pr-2 pl-5 bg-zinc-900 rounded-[100px]"
          >
            <span className="self-stretch my-auto text-sm font-medium text-white">
              Be a Volunteer
            </span>
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto bg-zinc-800 h-[38px] rounded-[100px] w-[38px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8e0e0e6270f4ad9313e2f1f81d14578f3e99e81cad27584ce459971d19d505?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                alt=""
                className="object-contain aspect-square w-[18px]"
              />
            </div>
          </a>
          <a
            href="#opportunities"
            className="gap-2.5 self-stretch px-5 py-4 text-sm font-medium border border-solid bg-gray-50 border-zinc-200 rounded-[100px] text-zinc-900 shadow-lg"
          >
            View Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunities;

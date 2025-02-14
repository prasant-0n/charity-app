import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-wrap overflow-hidden relative gap-10 justify-center items-start px-16 py-24 mt-16 bg-gray-50 rounded-2xl border-solid border-2 border-gray-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a6b6c03a9f11192b2efe4f77b465637dc1847dac8bfded03fe78af289981a64?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
        alt=""
        className="object-contain absolute top-0 -left-2.5 z-0 shrink-0 h-20 aspect-[1.34] w-[107px]"
      />
      <div className="flex z-0 flex-col text-4xl font-semibold leading-tight min-w-[240px] text-zinc-900">
        <div className="gap-2.5 self-start p-4 bg-lime-200 rounded-2xl">
          Stories of{' '}
        </div>
        <div className="gap-2.5 p-4 bg-lime-200 rounded-2xl">
          Hope and Resilience
        </div>
      </div>
      <div className="flex z-0 flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <p className="text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          Explore heartwarming and inspiring stories of children whose lives
          have been positively impacted by ForHelp's initiatives. Witness the
          transformative journey of young souls as they overcome adversity,
          discover their potential, and chase their dreams. These stories of
          hope and resilience showcase the profound difference that compassion
          and support can make in the lives of underprivileged children.
        </p>
        <div className="flex flex-wrap gap-5 items-start self-start mt-8">
          <button className="flex gap-2.5 items-center py-2 pr-2 pl-5 bg-zinc-900 rounded-[100px]">
            <span className="self-stretch my-auto text-sm font-medium text-white">
              Join the Movement
            </span>
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto bg-zinc-800 h-[38px] rounded-[100px] w-[38px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/edff7548c73d889fc19974ea83dab076c18825a4346cdec6f6f038b844cee16a?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                alt="Join icon"
                className="object-contain aspect-square w-[18px]"
              />
            </div>
          </button>
          <button className="gap-2.5 self-stretch px-5 py-4 text-sm font-medium border-2 border-solid bg-gray-200 border-zinc-200 rounded-[100px] text-zinc-900">
            Support Our Cause
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-wrap overflow-hidden relative gap-10 justify-center items-start px-16 py-24 mt-16 bg-gray-50 rounded-2xl border-solid border-2 border-gray-200 max-md:px-5 max-md:mt-10 max-md:max-w-full shadow-lg">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/24f3f3d9ad1fe4c4306fe482d3b913bcf75f1c097468d2431194e2fd0650c5c7?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
        alt=""
        className="object-contain absolute top-0 -left-2.5 z-0 shrink-0 h-20 aspect-[1.34] w-[107px]"
      />
      <div className="flex z-0 flex-col text-4xl font-semibold leading-tight min-w-[240px] text-zinc-900 max-md:max-w-full">
        <div className="gap-2.5 p-4 bg-lime-200 rounded-2xl max-md:max-w-full">
          Empowering Children for a
        </div>
        <div className="gap-2.5 self-start p-4 bg-lime-200 rounded-2xl">
          Brighter Tomorrow
        </div>
      </div>
      <div className="flex z-0 flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <p className="text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          At ForHelp, our commitment to creating a lasting impact on the lives
          of underprivileged children drives our efforts in four core Impact
          Areas. Through Education Support, Healthcare for Children, Nutrition
          Programs, and Child Protection Initiatives, we strive to build a
          strong foundation for their future. Together, let's transform their
          lives, one step at a time, and pave the way for a world where every
          child can flourish and dream without limits.
        </p>
        <div className="flex gap-5 items-start self-start mt-8">
          <button className="flex gap-2.5 items-center py-2 pr-2 pl-5 bg-zinc-900 rounded-[100px]">
            <span className="self-stretch my-auto text-sm font-medium text-white">
              Join the Movement
            </span>
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto bg-zinc-800 h-[38px] rounded-[100px] w-[38px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8e0e0e6270f4ad9313e2f1f81d14578f3e99e81cad27584ce459971d19d505?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                alt=""
                className="object-contain aspect-square w-[18px]"
              />
            </div>
          </button>
          <button className="gap-2.5 self-stretch px-5 py-4 text-sm font-medium border border-solid bg-neutral-100 border-zinc-200 rounded-[100px] text-zinc-900">
            Support Our Cause
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

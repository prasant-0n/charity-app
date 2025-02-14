import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-wrap overflow-hidden relative gap-10 justify-center items-start px-16 py-24 mt-16 bg-gray-50 rounded-2xl border-solid border-[6px] border-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92cad10d2008a326d0d9a05fd347a191882744009fe7689186ab60701ba2099a?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
        alt=""
        className="object-contain absolute top-0 -left-2.5 z-0 shrink-0 h-20 aspect-[1.34] w-[107px]"
      />
      <div className="flex z-0 flex-col text-4xl font-semibold leading-tight min-w-[240px] text-zinc-900 max-md:max-w-full">
        <h1 className="gap-2.5 self-start p-4 bg-lime-200 rounded-t-2xl  max-md:max-w-full">
          Your donation will help level
        </h1>
        <p className="gap-2.5 p-4 bg-lime-200 rounded-l-none rounded-b-2xl rounded-r-2xl max-md:max-w-full">
          up the lives of children in need.
        </p>
      </div>
      <div className="flex z-0 flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        <p className="text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          Every child deserves the opportunity to reach their full potential,
          regardless of their circumstances. ForHelp is a charity organization
          dedicated to helping children in need. We provide a variety of
          programs and services to help children succeed in school, stay
          healthy, and have a brighter future.
        </p>
        {/* <a
          href="/donate"
          className="flex gap-2.5 items-center self-start py-2 pr-2 pl-5 mt-8 bg-zinc-900 rounded-[100px]"
        >
          <span className="self-stretch my-auto text-sm font-medium text-white">
            Donate Now
          </span>
          <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto bg-zinc-800 h-[38px] rounded-[100px] w-[38px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8e0e0e6270f4ad9313e2f1f81d14578f3e99e81cad27584ce459971d19d505?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
              alt=""
              className="object-contain aspect-square w-[18px]"
            />
          </div>
        </a> */}
        <a
          href="/donate"
          className="relative flex gap-2.5 items-center self-start  mt-8 rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 overflow-hidden"
        >
          {/* Rotating Background Gradient */}
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-2.5 bg-zinc-900 rounded-full py-2 pr-2 pl-5">
            <span className="text-sm font-medium text-white">Donate Now</span>
            <div className="flex gap-2.5 items-center p-2.5 bg-gray-950 h-[38px] rounded-full w-[38px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8e0e0e6270f4ad9313e2f1f81d14578f3e99e81cad27584ce459971d19d505?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                alt=""
                className="object-contain aspect-square w-[18px]"
              />
            </div>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
const Data = [
  {
    title: 'Child Selection',
    content:
      'We identify children in need, considering their background and circumstances.',
  },
  {
    title: 'Dedicated Sponsors',
    content: 'Each child is matched with a caring sponsor for ongoing support.',
  },
  {
    title: 'Comprehensive Assistance',
    content:
      'Sponsors provide resources for education, healthcare, and basic needs.',
  },
  {
    title: 'Measurable Impact',
    content:
      "We track progress and share results, showcasing the positive change sponsors make in these children's lives.",
  },
];

const Images = ['child_1.svg', 'child_2.svg', 'child_3.svg', 'child_4.svg'];
const SponsorChild: React.FC = () => {
  return (
    <section className="flex flex-col justify-center p-16 mt-32 w-full bg-gray-50 rounded-2xl border-solid border-2 border-gray-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <h2 className="gap-2.5 px-4 py-3.5 text-3xl font-semibold leading-tight bg-lime-200 rounded-xl min-w-[240px] text-zinc-900">
          Sponsor a Child
        </h2>
        <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px] max-md:max-w-full">
            <p className="text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
              Sponsoring a child through ForHelp is a great way to make a
              difference in the life of a child in need. When you sponsor a
              child, you provide them with financial support to help them with
              their education, healthcare, and other basic needs.
            </p>
            <div className="flex gap-4 items-start self-start mt-8">
              <a
                href="#find-child"
                className="flex gap-2.5 items-center py-2 pr-2 pl-5 bg-zinc-900 rounded-[100px]"
              >
                <span className="self-stretch my-auto text-sm font-medium text-white">
                  Find A Child
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
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-center p-4 mt-10 w-full rounded-2xl border-2 border-gray-200 border-solid bg-gray-50 max-md:max-w-full">
        {Images.map((val) => (
          <img
            key={val}
            loading="lazy"
            src={`/${val}`}
            alt={`Sponsored child ${val}`}
            className="object-contain flex-1 shrink self-stretch my-auto rounded-2xl aspect-[0.92] basis-0 min-w-[240px] w-[270px] shadow-2xl"
          />
        ))}
      </div>
      <div className="flex flex-col p-10 mt-10 w-full rounded-3xl border-2 border-gray-200 border-solid bg-gray-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center w-full text-zinc-900 max-md:max-w-full">
          <h3 className="flex-1 shrink self-stretch my-auto text-3xl font-semibold basis-10 max-md:max-w-full">
            How it works
          </h3>
          <a
            href="#learn-more"
            className="flex gap-2.5 justify-center items-center self-stretch px-5 py-3.5 my-auto text-sm font-medium bg-neutral-100 border-2 shadow-md border-gray-200 border-solid rounded-[100px]"
          >
            <span className="self-stretch my-auto">Learn More</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b6b3d88d78a2e84fa4059d7e64a3be25bc77e05b4c81f7c045b64eba229c2f3?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 p-5 mt-10 w-full bg-gray-50 rounded-2xl shadow-2xl border-2 border-gray-100 border-solid max-sm:max-w-full">
          {Data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 shrink justify-center p-6 rounded-2xl border border-gray-50 border-solid basis-0 bg-neutral-100 min-w-[240px] max-md:px-5 max-md:max-w-full"
            >
              <div className="flex gap-1.5 items-center w-full max-md:max-w-full">
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 bg-lime-200 rounded-[79px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                    alt=""
                    className="object-contain w-5 aspect-square"
                  />
                </div>
                <h4 className="flex-1 shrink self-stretch my-auto text-lg font-semibold basis-5 text-zinc-900">
                  {item.title}
                </h4>
              </div>
              <p className="mt-4 text-base font-medium leading-6 text-zinc-800 max-md:max-w-full">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorChild;

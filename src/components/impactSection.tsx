import React from 'react';

interface ImpactItemProps {
  value: string;
  label: string;
}

const ImpactItem: React.FC<ImpactItemProps> = ({ value, label }) => (
  <div className="flex flex-col flex-1 shrink rounded-3xl basis-0 min-w-[240px]">
    <div className="gap-2.5 self-start px-6 py-2 text-4xl font-semibold whitespace-nowrap bg-lime-200 rounded-xl text-zinc-900 max-md:px-5">
      {value}
    </div>
    <div className="mt-1.5 text-lg font-medium text-neutral-600">{label}</div>
  </div>
);

const ImpactSection: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-10 items-center py-10 pr-12 pl-16 mt-32 rounded-2xl border-gray-100 border-solid bg-neutral-100 border-[6px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-stretch py-5 my-auto min-w-[240px] w-[374px]">
        <div className="flex flex-col w-full">
          <h2 className="text-3xl font-semibold leading-10 text-zinc-900">
            Making a Meaningful Difference Together
          </h2>
          <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600">
            At Forhelp, we believe that true impact is achieved when
            individuals, communities, and organizations come together with a
            shared purpose – to create positive change in the world.
          </p>
        </div>
        <a
          href="/donate"
          className="flex gap-2.5 items-center self-start py-2 pr-2 pl-5 mt-10 bg-zinc-900 rounded-[100px]"
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
        </a>
      </div>
      <div className="flex flex-col flex-1 shrink self-stretch p-16 my-auto bg-white rounded-2xl basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
          <ImpactItem value="70%" label="Education Support" />
          <ImpactItem value="24/7" label="Healthcare for Children" />
        </div>
        <div className="mt-8 w-full border border-solid bg-zinc-200 border-zinc-200 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-6 items-start mt-8 w-full max-md:max-w-full">
          <ImpactItem value="108" label="Nutrition Programs" />
          <ImpactItem value="+105" label="Happy Children" />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

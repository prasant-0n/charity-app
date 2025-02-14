import React from 'react';

const DonateSection: React.FC = () => {
  return (
    <section className="flex flex-col px-8 py-24 mt-36 w-full bg-lime-300 rounded-3xl max-md:px-4 max-md:py-16 max-md:mt-16 max-sm:mt-10">
      <div className="flex flex-col text-center w-full px-64 max-lg:px-32 max-md:px-8 max-sm:px-4">
        <h2 className="text-5xl font-semibold leading-tight text-zinc-900 max-lg:text-4xl max-lg:leading-[54px] max-md:text-3xl max-md:leading-[48px] max-sm:text-2xl max-sm:leading-[40px]">
          Donate Now and Help Level Up the Lives of Children in Need
        </h2>
        <p className="mt-5 text-lg font-medium leading-7 text-neutral-600 max-lg:mt-4 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">
          Your donation will help provide essential services to children in
          need, such as education, healthcare, nutrition, and enrichment.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-6 py-4 px-8 mt-12 bg-lime-100 rounded-lg md:rounded-full self-center max-lg:px-6 max-md:px-4 max-sm:flex-col max-sm:px-3 max-sm:py-6 max-sm:mt-8 max-sm:gap-4">
        <p className="text-lg font-medium text-zinc-900 max-lg:text-base max-sm:text-center max-sm:text-sm">
          Click here to donate now and help level up the lives of children in
          need.
        </p>
        <button className="flex items-center gap-2.5 py-2.5 px-6 bg-lime-300 rounded-full max-lg:px-4 max-sm:w-full max-sm:justify-center max-sm:py-3 max-sm:px-5">
          <span className="text-lg font-medium text-zinc-900 max-lg:text-base max-sm:text-sm">
            Donate Now
          </span>
          <div className="flex items-center justify-center p-2.5 w-10 h-10 bg-lime-200 rounded-full max-lg:w-8 max-lg:h-8 max-sm:w-7 max-sm:h-7">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/07916417f1e7aa954f1b4bcbcf387058201394d2124c6e297b307d149084380e?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
              className="object-contain w-5 max-lg:w-4 max-sm:w-3"
              alt="Donate Icon"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default DonateSection;

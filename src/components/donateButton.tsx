import React from 'react';

const DonateButton: React.FC = () => {
  return (
    <button className="flex gap-2.5 items-center self-center py-2.5 pr-2.5 pl-6 mt-12 rounded-[100px] max-md:pl-5 max-md:mt-10 bg-[linear-gradient(110deg,#c7f57a,45%,#a7e667,55%,#c7f57a)] bg-[length:200%_100%] animate-background-shine">
      <span className="self-stretch my-auto text-lg font-medium text-zinc-900">
        Donate Now
      </span>
      <div className="flex gap-2.5 items-center self-stretch p-3.5 my-auto w-12 h-12 bg-lime-200 rounded-[100px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07916417f1e7aa954f1b4bcbcf387058201394d2124c6e297b307d149084380e?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
          className="object-contain w-5 aspect-square"
          alt=""
        />
      </div>
    </button>
  );
};

export default DonateButton;

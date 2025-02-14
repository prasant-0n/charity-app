import React from 'react';

interface VisionPointProps {
  number: number;
  description: string;
}

const VisionPoint: React.FC<VisionPointProps> = ({ number, description }) => {
  return (
    <>
      {number > 1 && (
        <div className="mt-10 w-full bg-gray-100 border border-gray-100 border-solid min-h-[1px] max-md:max-w-full" />
      )}
      <div className="flex flex-wrap gap-3 items-center mt-10 w-full max-md:max-w-full">
        <div className="gap-2.5 self-stretch px-3.5 my-auto text-2xl font-semibold text-center whitespace-nowrap bg-lime-100 h-[58px] rounded-[100px] text-zinc-900 w-[58px] flex justify-center items-center ">
          {number.toString().padStart(2, '0')}
        </div>
        <div className="flex-1 shrink self-stretch my-auto text-lg font-medium basis-7 text-zinc-800 max-md:max-w-full">
          {description}
        </div>
      </div>
    </>
  );
};

export default VisionPoint;

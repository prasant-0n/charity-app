import React from 'react';

interface ImpactAreaProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  secondaryButtonText: string;
  isReversed?: boolean;
}

const ImpactAreaSection: React.FC<ImpactAreaProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  secondaryButtonText,
  isReversed = false,
}) => {
  const contentOrder = isReversed ? 'order-2' : 'order-1';
  const imageOrder = isReversed ? 'order-1' : 'order-2';
  const buttonOrder = isReversed
    ? 'absolute bottom-0 right-0 rounded-tl-[4rem] justify-end'
    : 'absolute bottom-0 left-0 rounded-tr-[4rem] justify-start';

  return (
    <div className="flex flex-wrap gap-10 pb-16 w-full border-solid border-t-2 border-t-gray-200 max-md:max-w-full">
      <div
        className={`flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full ${contentOrder}`}
      >
        <div className="flex flex-wrap flex-1 size-full max-md:max-w-full">
          <div className="flex gap-2.5 pb-20 h-full">
            <div className="w-0 border-solid bg-neutral-100 border-2 border-gray-200 min-h-[224px]" />
          </div>
          <div className="flex flex-col flex-1 shrink self-end pt-10 w-full text-4xl font-bold basis-0 min-w-[240px] text-zinc-200 max-md:max-w-full ">
            <div className="flex-1 shrink gap-2 self-stretch p-10 w-full border-solid border-2 bg-gray-50 border-gray-200 rounded-l-none rounded-b-2xl max-md:px-5 max-md:max-w-full -ml-1 shadow-xl rounded-xl">
              {title}
            </div>
          </div>
        </div>
        <div className="flex flex-col p-10 mt-20 w-full bg-gray-50 rounded-2xl border-solid border-2 border-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full shadow-xl">
          <h2 className="text-2xl font-semibold text-zinc-900 max-md:max-w-full">
            {title}
          </h2>
          <p className="mt-4 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col flex-1 shrink self-end pt-20 basis-0 min-w-[240px] max-md:max-w-full ${imageOrder}`}
      >
        <div className="flex overflow-hidden flex-col w-full rounded-2xl border-2 border-solid border-gray-200 max-md:max-w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="object-contain w-full rounded-2xl aspect-[1.13] max-md:max-w-full shadow-xl"
          />
          <div className="relative">
            <div
              className={`flex flex-wrap max-md: justify-end gap-2 items-start self-start p-2 md:p-5 bg-white ${buttonOrder}`}
            >
              {/* Primary Button */}
              <button className="flex gap-2.5 items-center py-2 pr-2 pl-5 bg-zinc-900 min-w-[200px] sm:min-w-[240px] rounded-[100px] max-w-full">
                <span className="self-stretch my-auto text-sm font-medium text-white">
                  {buttonText}
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

              {/* Secondary Button */}
              <button className="gap-2.5 self-stretch px-4 py-3 text-sm font-medium border border-solid bg-gray-200 border-zinc-200 rounded-[100px] text-zinc-900 w-full sm:w-auto">
                {secondaryButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactAreaSection;

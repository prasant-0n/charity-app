import React from 'react';

interface FeatureCardProps {
  imageSrc?: string;
  title: string;
  iconSrc?: string;
  content?: string;
  description?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  iconSrc,
  content,
  description,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      {imageSrc && (
        <img
          loading="lazy"
          src={imageSrc}
          className="object-contain w-full rounded-xl aspect-[0.97]"
          alt={title}
        />
      )}
      <div
        className={`flex gap-2.5 items-center py-2.5 pr-6 pl-2.5 mt-5 w-full border border-gray-100 border-solid bg-neutral-100 rounded-[100px] max-md:pr-5 ${content ? 'flex-col p-8 bg-lime-200 rounded-3xl' : ''}`}
      >
        {iconSrc && (
          <div className="flex gap-2.5 items-center self-stretch p-3.5 my-auto bg-lime-300 h-[58px] rounded-[100px] w-[58px]">
            <img
              loading="lazy"
              src={iconSrc}
              className="object-contain aspect-square w-[30px]"
              alt=""
            />
          </div>
        )}
        <div
          className={`self-stretch my-auto text-lg font-semibold text-zinc-900 ${content ? 'text-4xl' : ''}`}
        >
          {content || title}
        </div>
      </div>
      {description && (
        <p className="mt-1.5 text-lg font-medium leading-7 text-zinc-800">
          {description}
        </p>
      )}
    </div>
  );
};

export default FeatureCard;

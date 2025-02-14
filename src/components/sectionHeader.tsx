import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col px-36 w-full text-center max-md:px-5 max-md:max-w-full">
      <h2 className="text-4xl font-semibold leading-tight text-zinc-900 max-md:max-w-full">
        {title}
      </h2>
      <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;

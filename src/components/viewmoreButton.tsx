import React from 'react';

interface ViewMoreButtonProps {
  label: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ label }) => {
  return (
    <button className="flex gap-2.5 items-center self-center px-5 py-3.5 mt-10 text-sm font-medium border border-solid bg-gray-200 border-zinc-200 rounded-[100px] text-zinc-900 shadow-lg">
      <span className="self-stretch my-auto">{label}</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab7c7dbc5ba4367cf8d54daffb8b7a4ec389fd5fce5d92053b9bf2d629a85cd9?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        alt=""
      />
    </button>
  );
};

export default ViewMoreButton;

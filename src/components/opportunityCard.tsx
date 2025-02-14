import React from 'react';

type OpportunityCardProps = {
  title: string;
  description: string;
  image: string;
  requirements: string;
  responsibilities: string;
  benefits: string;
};

const OpportunityCard: React.FC<OpportunityCardProps> = ({
  title,
  description,
  image,
  requirements,
  responsibilities,
  benefits,
}) => {
  return (
    <div className="flex flex-wrap gap-5 p-6 w-full bg-gray-50 rounded-2xl border-solid border-2 border-gray-200 max-md:px-5 max-md:max-w-full mt-4">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain flex-1 shrink w-full rounded-3xl aspect-[0.96] basis-16 min-w-[240px] max-md:max-w-full"
      />
      <div className="flex flex-col flex-1 shrink pr-10 pl-6 my-auto basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-end w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink basis-7 min-w-[240px]">
            <h3 className="text-2xl font-semibold text-zinc-900">{title}</h3>
            <p className="mt-1.5 text-base font-medium leading-6 text-neutral-600">
              {description}
            </p>
          </div>
          <a
            href="#volunteer"
            className="flex gap-2.5 items-center py-2 pr-2 pl-5 bg-zinc-900 rounded-[100px]"
          >
            <span className="self-stretch my-auto text-sm font-medium text-white">
              Be a Volunteer
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
        <div className="flex flex-col p-4 mt-10 w-full rounded-2xl border shadow-lg border-gray-200 border-solid bg-gray-50 max-md:max-w-full">
          {[
            { title: 'Requirements', content: requirements },
            { title: 'Responsibilities', content: responsibilities },
            { title: 'Benefits', content: benefits },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-6 mt-4 w-full bg-white rounded-2xl border border-gray-200 border-solid max-md:px-5 max-md:max-w-full shadow-sm"
            >
              <div className="flex gap-2 items-center w-full max-md:max-w-full">
                <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 bg-lime-200 rounded-[100px]">
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
              <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;

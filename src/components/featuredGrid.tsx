import React from 'react';

const FeatureGrid: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-start mt-6 w-full">
      {/* First Feature */}
      <div className="flex flex-col flex-1 min-w-[240px]">
        <div className="border-dotted border-2 border-gray-500 rounded-xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d646cf05882cd30f86464098696fd18fb381861efccb60e6d926f760433b799?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
            className="object-contain w-full rounded-t-xl aspect-[0.97]"
            alt="Amplify Their Voice"
          />
        </div>
        <div className="flex items-center p-4 mt-4 border border-gray-200 bg-gray-50 rounded-full">
          <div className="flex items-center justify-center w-14 h-14 bg-lime-300 rounded-full p-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7778d21a3993bfdf217c298f6ac42d54268ab7d66f8580c935f39b98c1ba490a?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
              className="object-contain aspect-square w-8"
              alt="Amplify Icon"
            />
          </div>
          <span className="ml-4 text-lg font-semibold text-zinc-900">
            Amplify Their Voice
          </span>
        </div>
      </div>

      {/* Second Feature */}
      <div className="flex flex-col flex-1 min-w-[240px]">
        <img
          src="./Group.svg"
          alt="Group Icon"
          className="w-12 h-12 mb-4 self-center"
        />
        <div className="flex items-center p-4 mt-4 border border-gray-200 bg-gray-50 rounded-full">
          <p className="text-lg font-semibold text-zinc-900">
            Help for 8,892 Children in India
          </p>
        </div>
        <div className="flex flex-col p-6 mt-4 bg-lime-200 rounded-3xl text-center">
          <span className="text-4xl text-zinc-900">62%</span>
          <p className="mt-2 text-lg text-zinc-800">
            India Grieves the Passing of Thousands, Faces Challenges in the Wake
            of Catastrophe.
          </p>
        </div>
      </div>

      {/* Third Feature */}
      <div className="flex flex-col flex-1 min-w-[240px]">
        <div className="flex flex-col items-center p-6 bg-lime-200 rounded-3xl text-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f682a2752ff0022849c923ed3f833398aaca0c91ee5e61f6f039f21c7ff03a2d?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
            className="object-contain w-12 mb-4"
            alt="Support Icon"
          />
          <h3 className="text-xl font-semibold text-zinc-900">Support</h3>
          <p className="mt-2 leading-6 text-zinc-800">
            Support a child in need. Make a meaningful connection. Help break
            the cycle of poverty.
          </p>
        </div>
        <div className="flex items-center p-4 mt-4 border border-gray-200 bg-gray-50 rounded-full">
          <span className="text-lg font-semibold text-zinc-900">
            Find a Child
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/07916417f1e7aa954f1b4bcbcf387058201394d2124c6e297b307d149084380e?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
            className="object-contain w-5 ml-2"
            alt="Find Icon"
          />
        </div>
      </div>

      {/* Fourth Feature */}
      <div className="flex flex-col flex-1 min-w-[240px]">
        <div className="flex items-center p-4 mt-4 border border-gray-200 bg-neutral-100 rounded-full">
          <span className="text-lg font-semibold text-zinc-900">
            Be a Volunteer
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/07916417f1e7aa954f1b4bcbcf387058201394d2124c6e297b307d149084380e?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
            className="object-contain w-5 ml-2"
            alt="Volunteer Icon"
          />
        </div>
        <div className="border-dotted border-2 border-gray-500 mt-4 rounded-xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa27e390a4726c6dd1331dc864082d00fc91b4d60efa95395817bae454871bb?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
            className="object-contain w-full rounded-xl"
            alt="Be a Volunteer"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;

import React from 'react';

interface DonationTypeProps {
  title: string;
  items: Array<{
    icon: string;
    heading: string;
    description: string;
  }>;
}

const DonationTypeCard: React.FC<DonationTypeProps> = ({ title, items }) => (
  <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full mt-8">
    <div className="relative flex flex-col items-start px-5 w-auto text-xl font-semibold text-center text-zinc-900 max-md:max-w-full">
      <div className="absolute -bottom-8 self-stretch px-5 py-4 bg-lime-200 rounded-xl bg-[linear-gradient(110deg,#c7f57a,45%,#a7e667,55%,#c7f57a)] bg-[length:200%_100%] animate-background-shine">
        {title}
      </div>
    </div>
    <div className="flex flex-col px-5 pt-12 pb-5 w-full bg-gray-50 rounded-2xl border-solid border-2 border-gray-200 max-md:max-w-full shadow-sm">
      <div className="flex flex-col p-4 w-full rounded-3xl border border-gray-200 border-solid bg-gray-50 max-md:max-w-full shadow-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-6 mt-4 w-full bg-gray-50 rounded-2xl border border-gray-200 border-solid max-md:px-5 max-md:max-w-full shadow-xl"
          >
            <div className="flex flex-wrap gap-2 items-center w-full max-md:max-w-full">
              <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-10 h-10 bg-lime-200 rounded-[100px]">
                <img
                  loading="lazy"
                  src={item.icon}
                  alt=""
                  className="object-contain w-5 aspect-square"
                />
              </div>
              <div className="flex-1 shrink self-stretch my-auto text-lg font-semibold basis-5 text-zinc-900 max-md:max-w-full">
                {item.heading}
              </div>
            </div>
            <div className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DonationTypes: React.FC = () => {
  const donationTypes = [
    {
      title: 'One-Time Donation',
      items: [
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Amount',
          description:
            'You can donate any amount you like, but we recommend a minimum donation of $25.',
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Processing',
          description:
            'Your donation will be processed securely through our website or by phone. We use a secure payment processor that encrypts your personal and financial information.',
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Receipt',
          description:
            'You will receive a tax-deductible receipt for your donation via email within 24 hours of your donation.',
        },
      ],
    },
    {
      title: 'Monthly Giving',
      items: [
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Amount',
          description:
            'You can choose to donate any amount you like, but we recommend a minimum monthly donation of $10.',
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Automatic Withdrawal',
          description:
            'Your donation will be automatically withdrawn from your bank account each month on the same day. You can cancel your monthly donation at any time.',
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Benefits',
          description:
            'Monthly donors receive exclusive benefits, such as early access to events, discounts on merchandise, and the opportunity to be featured in our newsletter.',
        },
      ],
    },
    {
      title: 'Corporate Donations',
      items: [
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Size',
          description: 'We welcome corporate donations of all sizes.',
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Honor',
          description:
            'Your donation can be made in honor of an employee, customer, or client.',
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Appreciation',
          description:
            'We can provide you with a letter of appreciation for your donation.',
        },
      ],
    },
    {
      title: 'Legacy Giving',
      items: [
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Will or Trust',
          description: 'You can include ForHelp in your will or trust.',
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Specific Amount',
          description:
            'You can designate a specific amount of money or property to ForHelp.',
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/62793fdfbd28fcea6413bc0088aaef262c2eb4dc33f1724ff835aded4febef38?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
          heading: 'Life Insurance',
          description:
            'You can name ForHelp as a beneficiary of your life insurance policy.',
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-36 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl font-semibold leading-tight text-zinc-900 max-md:max-w-full">
          Donation Types
        </h2>
        <p className="mt-2.5 text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
          For Help hosts a variety of fundraising events throughout the year.
          These events are a great way to raise money for ForHelp and to have
          fun with other people who care about helping children in need.
        </p>
      </div>
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 items-start w-full max-md:max-w-full ">
          {donationTypes.map((type, index) => (
            <DonationTypeCard
              key={index}
              title={type.title}
              items={type.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationTypes;

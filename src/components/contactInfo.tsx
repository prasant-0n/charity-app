import React from 'react';

interface ContactItemProps {
  title: string;
  content: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ title, content }) => (
  <div className="flex flex-1 shrink gap-3 items-start px-8 py-6 bg-gray-50 rounded-xl border-solid basis-0 border-[3px] border-neutral-100 min-w-[240px] max-md:px-5">
    <div className="flex flex-col flex-1 shrink text-base font-medium basis-5">
      <div className="text-neutral-600">{title}</div>
      <div className="mt-1.5 text-zinc-900">{content}</div>
    </div>
    <div className="flex gap-2.5 items-center p-2.5 bg-zinc-800 h-[38px] rounded-[100px] w-[38px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/edff7548c73d889fc19974ea83dab076c18825a4346cdec6f6f038b844cee16a?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
        alt=""
        className="object-contain aspect-square w-[18px]"
      />
    </div>
  </div>
);

const ContactInfo: React.FC = () => {
  const contactItems = [
    { title: 'Address', content: 'Somewhere in the World' },
    { title: 'You Can Email Here', content: 'support@forhelp.com' },
    { title: 'Call us on', content: '+00 000 00 000' },
    { title: 'Working Hours', content: '10:00 am - 6:00 pm' },
  ];

  return (
    <section className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
        {contactItems.map((item, index) => (
          <ContactItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;

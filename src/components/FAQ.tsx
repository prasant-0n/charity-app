import React, { useState } from 'react';
import FAQItem from './FAQItem';

const faqItems = [
  {
    question: 'What is ForHelp?',
    answer:
      'ForHelp is a global charity organization dedicated to improving the lives of underprivileged children. We provide essential services such as food, education, healthcare, and shelter through donations and volunteer efforts.',
  },
  {
    question: 'How can I help ForHelp?',
    answer:
      'You can contribute by donating funds, becoming a volunteer, or participating in our fundraising events. Additionally, spreading awareness about our mission on social media helps us reach more supporters.',
  },
  {
    question: 'How does ForHelp use donations?',
    answer:
      'Donations are primarily used to fund educational programs, build healthcare facilities, and provide clean water to communities in need. We ensure every contribution goes directly to projects that make a tangible difference.',
  },
  {
    question: 'How can I be sure that my donation is used effectively?',
    answer:
      'We maintain transparency by offering detailed reports on how funds are allocated. ForHelp publishes annual financial statements, allowing donors to track the impact of their contributions.',
  },
  {
    question: "What is the impact of ForHelp's work?",
    answer:
      'ForHelp has positively transformed the lives of thousands of children across various regions. Through our efforts, we’ve provided education, healthcare, and sustainable living resources to empower disadvantaged communities.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-72 w-full text-center max-md:px-5 max-md:max-w-full">
        <h2 className="text-5xl font-semibold leading-tight text-zinc-900 max-md:max-w-full max-md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3.5 text-lg font-medium leading-7 text-neutral-600 max-md:max-w-full">
          Curious to know more about ForHelp and our mission? Look no further!
          We've compiled a list of frequently asked questions to provide you
          with the answers you seek.
        </p>
      </div>
      <div className="flex flex-col p-20 mt-12 w-full rounded-3xl border border-gray-100 border-solid bg-gray-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            index={index + 1}
            isOpen={openIndex === index + 1}
            onToggle={() => handleToggle(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;

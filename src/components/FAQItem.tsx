import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index, isOpen, onToggle }) => {
  return (
    <div
      className={`flex flex-wrap gap-6 items-center px-8 py-6 md:px-20 md:py-12 ${
        index > 1 ? 'mt-6 md:mt-8' : ''
      } w-full bg-white rounded-3xl border-t border-b border-solid border-y-gray-100 transition-all duration-300 ease-in-out max-md:px-4 max-md:py-8 hover:shadow-lg hover:bg-gray-50`}
    >
      {/* Index Number */}
      <div className="text-sm md:text-3xl font-bold text-zinc-900 w-[10px] md:w-[60px] max-md:text-2xl max-md:w-12">
        {index.toString().padStart(2, '0')}
      </div>

      {/* Question */}
      <div className="flex-1 shrink self-stretch text-sm md:text-2xl font-semibold text-zinc-800 max-md:text-lg">
        {question}
      </div>

      {/* Toggle Button */}
      <button
        className="flex justify-center items-center bg-lime-100 rounded-full p-2.5 md:p-3.5 h-[30px] w-[30px] md:h-[52px] md:w-[52px] transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
      >
        <img
          loading="lazy"
          src={
            isOpen
              ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/0819081e054a32bbabe6f372647c711bc298db4181c750a37bc2a1ff0a31db73?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1'
              : 'https://cdn.builder.io/api/v1/image/assets/TEMP/b17016a57d5a74b4bd248dbedbe050b392c292cda6c8b9f0e9da5e863870f9b5?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1'
          }
          className="w-4 h-4 md:w-6 md:h-6 object-contain transition-transform duration-300"
          alt={isOpen ? 'Collapse' : 'Expand'}
        />
      </button>

      {/* Answer */}
      <div
        id={`faq-answer-${index}`}
        className={`w-full mt-4 text-base md:text-lg font-medium text-neutral-600 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;

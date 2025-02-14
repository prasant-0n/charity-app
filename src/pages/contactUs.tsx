import { InputField } from '@/components/contactForm';
import ContactInfo from '@/components/contactInfo';
import DonateSection from '@/components/donateSection';
import VolunteerOpportunities from '@/components/volunteerOpportunities';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="flex flex-wrap overflow-hidden relative gap-16 justify-center items-start px-16 py-24 mt-16 bg-gray-50 rounded-2xl border-solid border-2 border-gray-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a6b6c03a9f11192b2efe4f77b465637dc1847dac8bfded03fe78af289981a64?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
          alt=""
          className="object-contain absolute top-0 -left-2.5 z-0 shrink-0 h-20 aspect-[1.34] w-[107px]"
        />
        <div className="flex z-0 flex-col text-4xl font-semibold leading-tight min-w-[240px] text-zinc-900 max-md:max-w-full">
          <h1 className="gap-2.5 p-4 bg-lime-200 rounded-2xl max-md:max-w-full">
            We Would Love to Hear
          </h1>
          <div className="gap-2.5 self-start p-4 bg-lime-200 rounded-2xl">
            from You
          </div>
        </div>
        <div className="flex z-0 flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <p className="text-base font-medium leading-6 text-neutral-600 max-md:max-w-full">
            Thank you for your interest in ForHelp and our mission to uplift
            underprivileged children. We value your thoughts, questions, and
            feedback. Please don't hesitate to reach out to us. Our dedicated
            team is here to assist you.
          </p>
          <div className="flex gap-2 items-center self-start px-4 py-3 mt-8 bg-white border border-gray-100 border-solid rounded-[100px]">
            <a
              href="#"
              aria-label="Facebook"
              className="flex gap-2.5 items-center self-stretch p-4 my-auto bg-lime-300 h-[52px] rounded-[100px] w-[52px]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/38087838a7532549d44400c26593b18f87d9e5e8322f340c8e75a14e4602807c?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                alt="Facebook icon"
                className="object-contain w-5 aspect-square"
              />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex gap-2.5 items-center self-stretch p-4 my-auto bg-lime-300 h-[52px] rounded-[100px] w-[52px]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50776841f6b1f99c203ab1f12e23480df87c97a909f281072aa80f86a4213af8?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                alt="Twitter icon"
                className="object-contain w-5 aspect-square"
              />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex gap-2.5 items-center self-stretch p-4 my-auto bg-lime-300 h-[52px] rounded-[100px] w-[52px]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecea6798351435deea3a7718c1472b595dfd3db8df015588ba66ac539abb50e2?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
                alt="Instagram icon"
                className="object-contain w-5 aspect-square"
              />
            </a>
          </div>
        </div>
      </section>
      <ContactInfo />
      <section className="flex overflow-hidden flex-wrap gap-10 p-16 mt-10 w-full bg-gray-50 rounded-2xl border-8 border-solid border-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[433px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/77cb4f6ebea347874e20ecb18d1a0efb4781fefb02e0ba26ef1fda38450abe65?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
            alt="Contact us illustration"
            className="object-contain flex-1 w-full rounded-xl aspect-[0.96] max-md:max-w-full"
          />
          <div className="flex gap-3 items-start px-8 py-6 mt-5 w-full bg-gray-50 rounded-xl border-solid border-[3px] border-neutral-100 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink text-base font-medium basis-5 min-w-[240px]">
              <h2 className="text-neutral-600">
                Partnerships and Collaborations
              </h2>
              <p className="mt-2 text-zinc-900">collabs@forhelp.com</p>
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
        </div>
        <form className="flex flex-wrap flex-1 shrink justify-center p-10 bg-white rounded-xl border basis-0 bo border-gray-200 min-w-[240px] max-md:px-5 max-md:max-w-full max-sm:p-4">
          {/* Input Fields */}
          <div className="flex flex-col w-full text-base max-md:max-w-full">
            <div className="flex flex-wrap gap-6 items-start w-full max-md:w-12 max-md:flex-col">
              <InputField
                label="First Name"
                type="text"
                placeholder="Enter First Name"
              />
              <InputField
                label="Last Name"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>

            <div className="flex flex-wrap gap-6 items-start mt-6 w-full max-md:flex-col">
              <InputField
                label="Email"
                type="email"
                placeholder="Enter your Email"
              />
              <InputField
                label="Phone"
                type="tel"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          {/* Amount Field */}
          <div className="flex flex-col mt-6 w-full text-base max-md:max-w-full max-sm:p-0">
            <label
              htmlFor="amount"
              className="font-semibold text-neutral-800 max-md:max-w-full"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter your Amount"
              className="flex-1 shrink gap-3 self-stretch px-4 py-5 mt-3.5 w-full font-medium leading-none bg-gray-50 rounded-md border border-gray-200 border-solid text-zinc-600 max-md:max-w-full"
              aria-label="Amount"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col mt-6 w-full text-base max-md:max-w-full max-sm:p-0">
            <label
              htmlFor="message"
              className="font-semibold text-neutral-800 max-md:max-w-full"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your Message"
              className="flex-1 shrink gap-3 px-4 pt-5 pb-24 mt-3.5 w-full font-medium leading-none bg-gray-50 rounded-md border border-gray-200 border-solid min-h-[138px] text-zinc-600 max-md:max-w-full"
              aria-label="Message"
            ></textarea>
          </div>

          {/* Terms and Submit Button */}
          <div className="flex flex-wrap gap-10 items-center mt-6 w-full font-medium max-md:flex-col max-sm:gap-4">
            <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto text-base basis-10 min-w-[240px] text-zinc-600 max-sm:min-w-full">
              <input
                type="checkbox"
                id="terms"
                className="shrink-0 self-stretch my-auto w-6 h-6 rounded border border-solid bg-neutral-100 border-zinc-200"
              />
              <label
                htmlFor="terms"
                className="flex-1 shrink self-stretch my-auto basis-0"
              >
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="gap-2.5 self-stretch px-5 py-3.5 my-auto text-sm text-white bg-zinc-900 rounded-[100px] max-sm:w-full"
            >
              Donate Now
            </button>
          </div>
        </form>
      </section>
      <div className="flex flex-wrap gap-10 items-start mt-10 w-full max-md:max-w-full">
        <VolunteerOpportunities />
        <DonateSection />
      </div>
    </div>
  );
};

export default ContactUs;

import FundraisingEvents from '@/components/fundraisingEvents';
import OpportunityCard from '@/components/opportunityCard';
import SponsorChild from '@/components/sponserChild';
import VolunteerOpportunities from '@/components/volunteerOpportunities';

const GetInvolved: React.FC = () => {
  const opportunities = [
    {
      title: 'Tutoring Children',
      description:
        'Help children succeed in school by tutoring them in math, reading, or other subjects.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d6968bbdb25566bf18117cfddbc069cf16fae2cf4b61d10e1fbd6c112f236792?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
      requirements:
        'Must be able to commit to a regular schedule and have a strong understanding of the subject matter.',
      responsibilities:
        'Will work with children one-on-one or in small groups to help them improve their academic skills.',
      benefits:
        'Gain satisfaction from helping to raise money for a good cause and meet new people.',
    },
    {
      title: 'Helping with Fundraising Events',
      description:
        'Help raise money for ForHelp by volunteering at bake sales, car washes, or other fundraising events.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d3be76e0e1d89e91db0dac1c7656fcc48cc0c90189e779605d414fbb3e36af6f?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
      requirements: 'Enthusiasm and willingness to engage with the public.',
      responsibilities:
        'Assist in organizing and running various fundraising events.',
      benefits:
        'Develop event planning skills and contribute directly to the cause.',
    },
    {
      title: 'Organizing and Running Enrichment Activities',
      description:
        'Organize and run enrichment activities for children, such as art classes, sports leagues, or clubs.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/e1cac706cb34add43b946e977f28466d579bef841e752ca92903b90a45ddc9a2?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
      requirements:
        'Experience or interest in specific activities and ability to work with children.',
      responsibilities:
        "Plan and lead engaging activities that promote children's development and interests.",
      benefits:
        "Share your passions while making a positive impact on children's lives.",
    },
  ];

  return (
    <div className="">
      <VolunteerOpportunities />
      <section className="flex flex-col mt-32 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col px-36 w-full text-center max-md:px-5 max-md:max-w-full">
          <h2 className="text-4xl font-semibold leading-10 text-zinc-900 max-md:max-w-full">
            Here are some of the <br /> volunteer opportunities available
          </h2>
          <p className="mt-2.5 text-base font-medium text-neutral-600 max-md:max-w-full">
            Welcome to our charity's online platform, where we unite hearts and
            efforts to bring hope to the lives of children in need.
          </p>
        </div>
        <div className="flex flex-col justify-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard key={index} {...opportunity} />
          ))}
        </div>
        <div className="flex gap-1.5 items-center self-center px-5 py-3.5 mt-10 text-sm font-medium border border-solid bg-gray-50 border-zinc-200 rounded-[100px] text-zinc-900 shadow-lg cursor-pointer">
          <span className="self-stretch my-auto">View All Opportunities</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f953de10a1ad89419d8eecb422b31ec3349b4feb97c306c5f3ebed00001e147?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </section>
      <FundraisingEvents />
      <SponsorChild />
    </div>
  );
};

export default GetInvolved;

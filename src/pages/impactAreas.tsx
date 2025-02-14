import DonateSection from '@/components/donateSection';
import ImpactAreaSection from '@/components/impactArea.section';
import Hero from '@/components/impactAreas.herosection';

const Data = [
  {
    title: 'Education Support',
    description:
      'Education is a powerful tool that can break barriers and change lives. Our Education Support program aims to provide underprivileged children with access to quality education, scholarships, and school supplies. With your help, we can foster a nurturing learning environment and empower these young minds to dream big and achieve their goals.',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/998c98c6403be64fb4a6c5268802168361b288eaa2ddd27f9663dc1db956aa08?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    imageAlt: 'Children studying in a classroom',
    buttonText: "Sponsor a Child's Education",
    secondaryButtonText: 'Learn More',
  },
  {
    title: 'Healthcare for Children',
    description:
      "Every child deserves to grow up in good health and happiness. Through our Healthcare for Children initiative, we ensure regular health check-ups and necessary medical support for underprivileged children. Together, let's keep illnesses at bay and provide the care and attention they need to thrive.",
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/9fcdbb57a39054a826b06722e8a6448df585c3f35cb75b67ef9fc161846fc94d?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    imageAlt: 'Child receiving medical care',
    buttonText: 'Donate to Health Programs',
    secondaryButtonText: 'Support Now',
    isReversed: true,
  },
  {
    title: 'Nutrition Programs',
    description:
      "Proper nutrition is fundamental for a child's physical and cognitive development. Our Nutrition Programs provide nutritious meals and essential dietary support to children facing food insecurity. With your support, we can ensure that no child goes to bed hungry and they have the fuel they need to focus on learning and growing.",
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/96315ad204e6cb4da10a4e10adf416b75fd39288b48e32f411406df7f4ab51fc?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    imageAlt: 'Children enjoying a nutritious meal',
    buttonText: 'Give the Gift of Nutrition',
    secondaryButtonText: 'Donate Today',
  },
  {
    title: 'Child Protection Initiatives',
    description:
      'Creating a safe and secure environment is vital for the overall growth and happiness of children. Our Child Protection Initiatives encompass measures to safeguard children from abuse, exploitation, and neglect. With your help, we can establish safe spaces and implement child protection policies to ensure that every child feels protected and loved.',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/df245e628854c5fd032d793e1a524d4150c24fd979050ea108c73739ba89297b?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    imageAlt: 'Children in a safe environment',
    buttonText: 'Be a Guardian of Hope',
    secondaryButtonText: 'Get Involved',
    isReversed: true,
  },
];

const ImpactAreas: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <section className="flex flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full">
        {Data.map((area, index) => (
          <ImpactAreaSection key={index} {...area} />
        ))}
      </section>
      <DonateSection />
    </div>
  );
};

export default ImpactAreas;

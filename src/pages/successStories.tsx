import React from 'react';

import DonateSection from '@/components/donateSection';
import Hero from '@/components/successStory.herosection';
import TransformationSection from '@/components/transformationSection';
import DonationImpactSection from '@/components/donationImpactSection';
import CaseStudiesSection from '@/components/caseStudySection';

const SuccessStories: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <TransformationSection />
      <DonationImpactSection />
      <CaseStudiesSection />
      <DonateSection />
    </div>
  );
};

export default SuccessStories;

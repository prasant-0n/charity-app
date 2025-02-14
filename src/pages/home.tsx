import DonateSection from '@/components/donateSection';
import FAQ from '@/components/FAQ';
import FeatureGrid from '@/components/featuredGrid';
import GoalsAndObjectives from '@/components/goal&objective';
import Hero from '@/components/hero';
import HowWeWork from '@/components/howWeWork';
import Mission from '@/components/mission2';
import Stats from '@/components/stats';
// import Testimonial from '@/components/testimonial';
import { InfiniteMovingCardsDemo } from '@/components/testimonial2';
import Vision from '@/components/vision';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <FeatureGrid />
      <Stats />
      <Mission />
      <Vision />
      <GoalsAndObjectives />
      <HowWeWork />
      {/* <Testimonial /> */}
      <InfiniteMovingCardsDemo />
      <FAQ />
      <DonateSection />
    </div>
  );
};

export default MainPage;

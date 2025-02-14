import ContactForm from '@/components/contactForm';
import Hero from '@/components/donate.heroSection';
import DonateSection from '@/components/donateSection';
import DonationTypes from '@/components/donationTypes';
import ImpactSection from '@/components/impactSection';
import React from 'react';

const Donate: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <ImpactSection />
      <DonationTypes />
      <ContactForm />
      <DonateSection />
    </div>
  );
};

export default Donate;

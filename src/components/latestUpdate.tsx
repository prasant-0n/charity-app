import React from 'react';
import SectionHeader from './sectionHeader';
import UpdateCard from './updateCard';
import ViewMoreButton from './viewmoreButton';

interface Update {
  image: string;
  date: string;
  title: string;
  description: string;
}

interface LatestUpdatesProps {
  updates: Update[];
}

const LatestUpdates: React.FC<LatestUpdatesProps> = ({ updates }) => {
  return (
    <section className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
      <SectionHeader
        title="Latest Updates"
        description="Discover our most recent developments and initiatives in our 'Latest Updates' section. We keep you in the loop with the latest news, events, and progress on our mission, ensuring you're always up-to-date with our efforts to make a positive change."
      />
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          {updates.map((update, index) => (
            <UpdateCard key={index} {...update} />
          ))}
        </div>
        <ViewMoreButton label="View More Updates" />
      </div>
    </section>
  );
};

export default LatestUpdates;

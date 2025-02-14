import React from 'react';
import SectionHeader from './sectionHeader';
import EventCard from './eventCard';
import ViewMoreButton from './viewmoreButton';

interface Event {
  image: string;
  date: string;
  title: string;
  description: string;
}

interface EventsAndFundraisersProps {
  events: Event[];
}

const EventsAndFundraisers: React.FC<EventsAndFundraisersProps> = ({
  events,
}) => {
  return (
    <section className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
      <SectionHeader
        title="Events and Fundraisers"
        description="Explore our upcoming events and fundraisers, where your participation directly supports our mission. Join us in making a meaningful impact together."
      />
      <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        <ViewMoreButton label="View More Events" />
      </div>
    </section>
  );
};

export default EventsAndFundraisers;

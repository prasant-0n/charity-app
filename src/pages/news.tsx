import DonateSection from '@/components/donateSection';
import EventsAndFundraisers from '@/components/eventsAndFundraisers';
import LatestUpdates from '@/components/latestUpdate';
import React from 'react';
import NewsBanner from '../components/newsBanner';

const updates = [
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/2dc1a24f24824a4b1e0cce1cb274d1d98a6cbc35d2062953dbb1eb819d9b4914?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    date: 'July 15, 2023',
    title: 'New School Building Inauguration',
    description:
      'We are delighted to announce the successful inauguration of a new school building in Greenfield Village. This state-of-the-art facility will provide a conducive learning environment for over 300 children, empowering them with quality education and a brighter future.',
  },
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/667215047e7e8976f711283a35487e9486285d32ee150b7c0a706a9608f2df93?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    date: 'July 28, 2023',
    title: 'Healthcare Outreach Program',
    description:
      'Our recent healthcare outreach program provided medical check-ups and essential healthcare services to over 500 underprivileged children in Riverside Community. Thanks to our dedicated team and volunteers, we continue to prioritize the well-being of these young souls.',
  },
];

const events = [
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6549def187a9ad1bb2d2206094c679363303471627a297bd6f9ce4179a0394dd?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    date: 'September 5, 2023',
    title: 'Charity Gala Night',
    description:
      'Join us for a memorable Charity Gala Night to raise funds for our Education Support program. Enjoy an evening of entertainment, auctions, and inspiring stories of transformed lives.',
  },
  {
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/9cf176438cb4803b9104f18cfa01ff1902084e25cd755e55bb99c092fe1baab9?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1',
    date: 'September 28, 2023',
    title: 'Walkathon for a Cause',
    description:
      'Lace up your sneakers and participate in our annual Walkathon to support our Healthcare for Children initiative. Every step you take brings us closer to ensuring better health for underprivileged children.',
  },
];

const News: React.FC = () => {
  return (
    <div className="">
      <NewsBanner />
      <LatestUpdates updates={updates} />
      <EventsAndFundraisers events={events} />
      <DonateSection />
    </div>
  );
};

export default News;

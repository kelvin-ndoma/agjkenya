import React from 'react'
import mic from '../assets/mic.jpg';
import ContentSection from '../components/ContentSection';
import Cards from '../components/Cards';
import Button from '../components/Button';
import Count from '../components/Count';
import { ThematicAreaCard } from '../components/ThematicAreaCard';

export default function Home() {
  const textContent = [
    'The Association of Grassroot Journalists Kenya (AGJK) strives to promote the flow of information and seeks to inspire successive generations of talented individuals to become dedicated journalists.',
    'AGJK upholds professionalism by supporting accurate and reliable reporting through various initiatives for community media nationwide.',
  ];

  const cardInfo = [
    {
      imageSrc: mic,
      title: "objective",
      description: "To form a vital network of community media outlets and journalists across the country"
    },
    {
      imageSrc: mic,
      title: "OUR VISION",
      description: 'To inspire and empower generations of journalists to engage communities through localized factual solution-based reporting.'
    },
    {
      imageSrc: mic,
      title: "OUR MISSION",
      description: 'To promote the flow of information while creating viable media, championinginnovation.'
    }
  ]

  // thematic focus
  const thematicAreaData = [
    {
      title: 'Capacity Building',
      description: 'To evaluate, monitor, supervise and fund journalists in producing relevant and objective content to be broadcasted in the communities.',
      // icon: mic,
    },
    {
      title: 'Sexual gender-based violence',
      description: 'Gender-based violence against women remains a serious issue in Kenya. Journalists can serve as catalysts for discussion, cultural change & providing crucial legal and support information.',
      // icon: mic,
    },
    {
      title: 'Reconciliation and Peace',
      description: 'Expanding communication beyond elite decision-makers allows for public participation and feedback from grassroots journalists.',
      // icon: mic,
    },
    {
      title: 'Advocacy and Networking',
      description: 'To uphold journalistic rights equally for members and provide a global networking platform for professionals.',
      // icon: mic,
    },
  ];

  return (
    <div className="home">
      <ContentSection
        title="Background"
        text={textContent}
        imageSrc={mic}
        imageAlt="AGJ Kenya"
      />
      <Cards cards={cardInfo} />
      {/* Join */}
      <div className="flex flex-col items-center justify-center bg-[#640433] py-6 md:py-10 px-6 text-white text-center mx-auto">
        <div className="max-w-3xl space-y-10">
          <p className="text-xl md:text-3xl py-2 font-bold capitalize">Join Us</p>
          <p className="text-sm md:text-base font-light">
            AGJK recognizes that there are many community media journalists spread out across community radio stations, television stations, freelancers, bloggers, and media practitioners who are dedicated to upholding the highest professional standards in their journalistic work, producing and disseminating factual and relevant information to the Kenyan masses through different community-based platforms.
          </p>
          <div className="flex justify-center mt-4">
            <Button buttons={[{ href: "/", label: "join now", variant: "secondary" }]} />
          </div>
        </div>
      </div>

      {/* Registered */}
      <div className="bg-white py-10 md:py-10 px-6 text-white text-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="space-y-4">
            <p className="font-semibold text-xl md:text-2xl text-[#640433]">Number of Registered</p>
            <p className="font-bold text-xl md:text-4xl text-[#7a7a7a]">JOURNALISTS</p>
          </div>
          <div className="flex justify-center">
            <Count />
            {/* Icons?? __framer........... */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {thematicAreaData.map((item, index) => (
          <ThematicAreaCard
            key={index}
            // icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

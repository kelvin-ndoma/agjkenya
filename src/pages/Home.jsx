import React from 'react'
import { motion } from 'framer-motion';
import ContentSection from '../components/ContentSection';
import Cards from '../components/Cards';
import Button from '../components/Button';
// import Count from '../components/Count';

import { itemVariants } from '../components/Variants';
import mic from '../assets/mic.jpg'
import { Testimonials } from './Testimonials';
import Partners from '../components/Partners';

export default function Home() {
  const textContent = [
    'The Association of Grassroot Journalists Kenya (AGJK) strives to promote the flow of information and seeks to inspire successive generations of talented individuals to become dedicated journalists.',
    'AGJK upholds professionalism by supporting accurate and reliable reporting through various initiatives for community media nationwide.',
  ];

  const cardInfo = [
    {
      imgSrc: mic,
      title: "objective",
      description: "To form a vital network of community media outlets and journalists across the country"
    },
    {
      imgSrc: mic,
      title: "OUR VISION",
      description: 'To inspire and empower generations of journalists to engage communities through localized factual solution-based reporting.'
    },
    {
      imgSrc: mic,
      title: "OUR MISSION",
      description: 'To promote the flow of information while creating viable media, championinginnovation.'
    }
  ]



  return (
    // max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16
    <div className="home">
      <ContentSection
        title="Background"
        text={textContent}
        imageSrc={mic}
        imageAlt="AGJ Kenya"
      />
      <Cards cards={cardInfo} />
      {/* Join */}
      <motion.div className="flex flex-col items-center justify-center bg-[#640433] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white text-center rounded-2xl"
        variants={itemVariants}>
        <div className="max-w-3xl space-y-10">
          <p className="text-xl md:text-2xl py-2 font-bold capitalize">Join Us</p>
          <p className="text-sm md:text-base font-light">
            AGJK recognizes that there are many community media journalists spread out across community radio stations, television stations, freelancers, bloggers, and media practitioners who are dedicated to upholding the highest professional standards in their journalistic work, producing and disseminating factual and relevant information to the Kenyan masses through different community-based platforms.
          </p>
          <div className="flex justify-center mt-4">
            <Button buttons={[{ href: "/", label: "join now", variant: "secondary" }]} />
          </div>
        </div>
      </motion.div>

      {/* partners section */}
      {/* <div className="bg-[#640433]"> */}
      <Partners />
      {/* </div> */}

      {/* Registered */}
      <Testimonials />

    </div>
  )
}

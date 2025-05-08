import React from 'react';
import { motion } from 'framer-motion';
import Count from '../components/Count';
import Button from '../components/Button';
import annete from '../assets/annete.webp';
import benja from '../assets/benja.webp';
import bosco from '../assets/bosco.webp';
import molly from '../assets/molly.webp';
import Marquee from '../components/Marquee';
import prescence from '../assets/prescence.svg'

const Partners = () => {

  const images = [
    annete,
    benja,
    bosco,
    molly,
  ];

  return (
    <div className="bg-white py-10 md:py-20 text-center px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 md:py-8 max-w-7xl mx-auto ">
        {/* First column */}
        <div className="space-y-4 mb-4">
          <Count />
          <p>
            <span className="font-semibold pr-2">Number of</span>
            <span className="font-bold capitalize text-xl md:text-2xl text-[#640433]">Registered journalists</span>
          </p>
        </div>
        {/* Second column with images and text below */}
        {/* Images section */}
        <div className="flex flex-col items-start space-y-4">
          {/* <div className="relative w-40 h-16 flex justify-start items-start">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className="absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  left: `${index * 35}px`,
                  zIndex: images.length - index,
                }}
              >
                <img
                  src={src}
                  alt={`client ${index + 1}`}
                  className="w-12 h-12 rounded-full shadow-[2px_2px_10px_0px_rgba(100,4,81,0.8)]"
                />
              </motion.div>
            ))}
          </div> */}
          <img className='w-auto h-full img-fluid flex justify-start items-start' src={prescence} alt="presence" />
          {/* Paragraph below images */}
          {/* <p className='text-start'>Don't just take our word for it - hear from people who've transformed their lives through AGJK</p>
          <div className="buttons flex flex-row gap-4 py-2">
            <Button buttons={[{ href: "/", label: "Start today", variant: "elevated" }]} />
            <Button buttons={[{ href: "/", label: "Read success stories", variant: "simple" }]} />
          </div> */}
        </div>
      </div>

      {/* partners marquee */}
      <Marquee />
    </div>
  );
};

export default Partners;
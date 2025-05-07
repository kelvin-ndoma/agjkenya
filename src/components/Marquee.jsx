import React from 'react';
import { motion } from 'framer-motion';
import partner from '../assets/hdoc.svg';
import geffect from '../assets/girl-effect.svg';
import ticah from '../assets/ticah.svg';
import shofco from '../assets/shofco.svg';
import pacja from '../assets/pacja.svg';
import saf from '../assets/saf.svg';
import amt from '../assets/amt.svg';
import cdtd from '../assets/cdtd.svg';
import habitat from '../assets/habitat.svg';
import amwik from '../assets/amwik.svg';

export const Marquee = () => {
    const partnerImg = [partner, geffect, ticah, shofco, pacja, saf, amt, habitat, cdtd, amwik];
    return (
        <>
            <div className="overflow-x-hidden">
                <motion.div
                    style={{ whiteSpace: 'nowrap' }}
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: 'linear',
                    }}
                >
                    <div className="inline-flex">
                        {partnerImg.map((image, index) => (
                            <img
                                key={`original-${index}`}
                                src={image}
                                alt="Partner"
                                className="h-60 w-60 object-contain mx-2"
                            />
                        ))}
                        {/* duplicate imgs for continuous scrolling */}
                        {partnerImg.map((image, index) => (
                            <img
                                key={`duplicate-${index}`}
                                src={image}
                                alt="Partner"
                                className="h-60 w-60 object-contain mx-2"
                            />
                        ))}
                    </div>
                </motion.div>
            </div></>
    )
}
export default Marquee;
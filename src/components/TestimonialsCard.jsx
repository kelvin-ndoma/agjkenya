import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from "./Variants";

const TestimonialCard = ({ quote, name, title, image }) => (
    <motion.div
        className="flex flex-col items-start justify-start p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#640433] bg-white"
        whileHover={{ y: -5 }}
        variants={itemVariants}
    >
        <div className="absolute top-4 left-4 text-gray-400 text-4xl font-bold opacity-50">
            “
        </div>
        <blockquote className="mt-8 md:mt-10"> 
            <p className="text-lg text-gray-800 leading-relaxed">
                {quote}
            </p>
        </blockquote>
        <div className="mt-6 flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={image}
                    alt={name}
                />
            </div>
            <div>
                <p className="text-base font-bold text-gray-900">{name}</p>
                <p className="text-sm text-gray-400 capitalize">{title}</p>
            </div>
        </div>
    </motion.div>
);

export default TestimonialCard;
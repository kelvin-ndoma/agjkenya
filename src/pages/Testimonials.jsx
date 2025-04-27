import React from 'react';
import { motion } from 'framer-motion';
import geffect from '../assets/girl-effect.svg';
import partner from '../assets/hdoc.svg';
import TestimonialCard from '../components/TestimonialsCard'; // Import the reusable component
import { ThematicAreaCard } from '../components/ThematicAreaCard';
import mic from '../assets/mic.jpg'

export const Testimonials = () => {

    // thematic focus
    const thematicAreaData = [
        {
            title: 'Capacity Building',
            description: 'To evaluate, monitor, supervise and fund journalists in producing relevant and objective content to be broadcasted in the communities.',
            icon: mic,
        },
        {
            title: 'Sexual gender-based violence',
            description: 'Gender-based violence against women remains a serious issue in Kenya. Journalists can serve as catalysts for discussion, cultural change & providing crucial legal and support information.',
            icon: mic,
        },
        {
            title: 'Reconciliation and Peace',
            description: 'Expanding communication beyond elite decision-makers allows for public participation and feedback from grassroots journalists.',
            icon: mic,
        },
        {
            title: 'Advocacy and Networking',
            description: 'To uphold journalistic rights equally for members and provide a global networking platform for professionals.',
            icon: mic,
        },
    ];

    const testimonialsData = [
        {
            quote: "'Equity is not about equality for women but rather an equal platform for all players'",
            name: 'Bev Watkinson',
            title: 'CONSULTANT',
            image: partner,
        },
        {
            quote: 'The workshops offered by AGJK are fantastic! I learned practical skills that I use every single day in my reporting.',
            name: 'Adam Chelse',
            title: 'HEAD OF SALES, INTEL',
            image: geffect,
        },
    ];

    return (
        <div className="bg-white py-4 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Thematic Areas of Focus */}
            <ThematicAreaCard
                join={thematicAreaData}
            />
            {/* Testimonials */}

            {/* What people say? */}
            <motion.div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white text-center rounded-2xl">
                <p className="text-xl md:text-4xl font-bold text-[#640433] mb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-8">What people say?</p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>

        </div>
    );
};

export default Testimonials; 
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
            description: 'At the heart of AGJK’s mission is the empowerment of community journalists through structured training, mentorship, and hands-on skills development. We invest in building the capacity of grassroots media practitioners by equipping them with critical knowledge in journalism ethics, digital storytelling, fact-checking, media law, and emerging technologies. Through workshops, mentorship programs, and conferences, we aim to strengthen their professional growth, enabling them to tell impactful stories that inspire change and accountability in their communities.',
            icon: mic,
        },
        {
            title: 'Advocacy / Campaigns',
            description: 'Advocacy is at the heart of AGJK’s mission. We work with over 80 community media outlets across Kenya, leveraging our vast grassroots network to amplify underrepresented voices and advance social justice causes. AGJK plays a strategic role in creating, curating, producing, and disseminating impactful campaign content in collaboration with local and international partners. From youth empowerment and gender equality to health rights and environmental action, our campaigns are community-driven and evidence-based, ensuring real stories shape real change on the ground',
            icon: mic,
        },
        {
            title: 'Organizational Growth',
            description: 'We believe in leading by example. AGJK is committed to strengthening its internal structures, governance systems, and sustainability strategies to remain a credible, transparent, and effective organization. By investing in our own growth—through strategic planning, partnerships, resource mobilization, and team development—we ensure that our mission has long-term impact and that we continue to serve as a strong voice for grassroots journalists across Kenya and beyond.',
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
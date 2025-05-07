import React from "react";
import PropTypes from "prop-types";
import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './Variants'

export const Interventions = ({ interventions }) => {
    return (
        <>
            {interventions.map((intervention, index) => (
                // Meeh...........Change card design
                <motion.div
                    className="mb-24 overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    key={index}
                >
                    {/* Image Card */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
                        variants={itemVariants}
                    >
                        <div className="relative h-32 md:h-64">
                            {/* <img
                                src={intervention.background}
                                alt="Tukisonga campaign participants"
                                className="w-full h-full object-cover"
                            /> */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 to-transparent flex items-end p-6 justify-between">
                                <div className="flex-grow">
                                    <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-2">
                                        {intervention.title}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">
                                        {intervention.header}
                                    </h3>
                                </div>
                                <div className="flex-shrink-0 bg-white rounded-full">
                                    {intervention.icon && (
                                        <img
                                            src={intervention.icon}
                                            alt="Intervention Icon"
                                            className="rounded-full h-16 w-16 md:w-32 md:h-32 object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 mb-4">
                                {intervention.description}</p>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </>
    )
}

// Props
Interventions.propTypes = {
    interventions: PropTypes.arrayOf(
        PropTypes.shape({
            // background: PropTypes.string,
            icon: PropTypes.string,
            title: PropTypes.string,
            header: PropTypes.string,
            description: PropTypes.string,
        })
    ).isRequired,
};

export default Interventions;
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { containerVariants } from "./Variants";

export const Interventions = ({ interventions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {interventions.map((intervention, index) => (
        <motion.div
          key={index}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#640433]"
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -5 }}
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-[#640433]/10 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
              {index === 0 ? "📘" : index === 1 ? "🌟" : "🌍"}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {intervention.header}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">{intervention.description}</p>
            <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              {intervention.title}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
// 🔏🤖🕊️
// Props
Interventions.propTypes = {
  interventions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      header: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Interventions;

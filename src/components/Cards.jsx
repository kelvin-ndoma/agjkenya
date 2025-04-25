import React from "react";
import PropTypes from "prop-types";

export const Cards = ({ cards }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      {/* card content */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border border-transparent hover:border-[#640433] bg-white shadow-xl space-y-10"
          >
            {/* ToDo: add a hover property for svg images?? switch imgs || change imgcolor || add img color property || use classnames */}
            <img
              className="info-icon img-fluid w-20 h-20 object-contain"
              src={card.imgSrc}
              alt={card.title}
            />
            <h3 className="info-title text-base md:text-xl font-bold uppercase py-2">
              {card.title}
            </h3>
            <p className="info-description text-[#AC9F9F] text-sm md:text-base text-center py-2 md:py-4">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;

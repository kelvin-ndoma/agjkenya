import React from 'react'
import PropTypes from 'prop-types';

export const ThematicAreaCard = ({ icon, title, description }) => {
    return (
        <div className="bg-[#640433] text-white py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex justify-start">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                    <p className="text-sm text-white opacity-75">{description}</p>
                </div>
            </div>
        </div>
    );
};

ThematicAreaCard.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
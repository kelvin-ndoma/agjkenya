import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttons }) => {
    if (!buttons || !Array.isArray(buttons)) {
        console.error("The 'buttons' prop is missing or invalid.");
        // prevent rendering if buttons is undefined or invalid
        return null;
    }

    return (
        <div className="flex justify-between mt-6 gap-8">
            {buttons.map((button, index) => {
                const ButtonTag = button.href ? "a" : "button";
                return (
                    <ButtonTag
                        key={index}
                        href={button.href}
                        onClick={button.onClick}
                        className={`w-32 lg:w-48 px-2 py-4 font-bold uppercase text-base text-center ${button.variant === "primary"
                            ? "text-white bg-[#000000] hover:bg-[#fee7f2]"
                            : "bg-white text-black hover:bg-[#ab0757]"
                            }`}
                    >
                        {button.label}
                    </ButtonTag>
                );
            })}
        </div>
    );
};

// PropTypes validation
Button.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            onClick: PropTypes.func,
            label: PropTypes.string.isRequired,
            variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
        })
    ).isRequired,
};

export default Button;

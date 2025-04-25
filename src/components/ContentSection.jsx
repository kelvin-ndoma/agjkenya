import React from 'react';
import Button from './Button';

const ContentSection = ({ title, text, imageSrc, imageAlt }) => {
    return (
        <div className="flex items-center justify-center bg-[#640433] py-6 md:py-10 px-6">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6">
                <div className="text-[#AC9F9F] md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 py-4">{title}</h1>
                    <p>
                        {text.map((paragraph, index) => (
                            <span key={index} className="block mb-4">
                                {paragraph}
                            </span>
                        ))}
                    </p>
                    <Button buttons={[{ href: "/", label: "read more", variant: "primary" }]} />
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContentSection;

import React from 'react';
import fb from '../assets/facebook.svg';
import ig from '../assets/instagram.svg';
import x from '../assets/twitter.svg';

const Footer = () => {
    // console.log("Footer is rendering");

    return (
        <footer className="bg-[#640433] text-white p-4 mt-2 md:mt-8">
            <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
                <span className="block text-center font-bold">
                    © {new Date().getFullYear()} <a href="/" className="hover:underline">Association of Grassroot Journalists of Kenya™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 gap-6 text-sm font-medium sm:mt-0">
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img className="w-6 h-6" src={fb} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img className="w-6 h-6" src={ig} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img className="w-6 h-6" src={x} alt="Twitter" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

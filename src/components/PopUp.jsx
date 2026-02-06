import React, { useState, useEffect } from 'react';

const MembershipPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup was shown in this session
    const popupShown = sessionStorage.getItem('membershipPopupShown');
    
    if (!popupShown) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('membershipPopupShown', 'true');
      }, 2000); // Show after 2 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleJoinNow = () => {
    // Redirect to Google Forms membership registration
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfPjK35Hj2tvfzzsMlYLXaDp1DLEhzLqfzPRKDDLznwUGk7Pw/viewform',
      '_blank',
      'noopener,noreferrer'
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[9999] animate-fadeIn p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden"
        style={{ boxShadow: '0 10px 30px rgba(100, 4, 51, 0.3)' }}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-light z-20 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white transition-all"
          aria-label="Close popup"
        >
          &times;
        </button>
        
        {/* Header with AGJK Branding */}
        <div className="bg-gradient-to-r from-[#640433] to-[#8a0c4a] text-white p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="mb-2">
                <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-[#ffd6e8] uppercase bg-white/15 rounded-full">
                  Exclusive Invitation
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Join Association of Grassroot Journalists Kenya
              </h2>
              
              <p className="text-[#ffd6e8] mt-2 text-lg">
                Become part of Kenya's largest network of community journalists
              </p>
            </div>
            
            {/* Logo/Badge Area */}
            <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border-2 border-white/20">
              <span className="text-white text-xl font-bold">AGJK</span>
            </div>
          </div>
        </div>
        
        {/* Content Body */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#640433] border-b border-gray-200 pb-2">
                Membership Benefits
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-[#640433]/10 p-1.5 rounded-full mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#640433]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Networking with journalists & experts</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#640433]/10 p-1.5 rounded-full mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#640433]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Access to exclusive resources & toolkits</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#640433]/10 p-1.5 rounded-full mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#640433]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Workshops & capacity building</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#640433]/10 p-1.5 rounded-full mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-[#640433]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Professional recognition & awards</span>
                </li>
              </ul>
            </div>
            
            {/* Right Column - Form Preview */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h4 className="text-lg font-semibold text-[#640433] mb-4">
                Quick Registration Details
              </h4>
              
              <div className="space-y-3">
                <div>
                  <div className="h-2 bg-gray-300 rounded mb-2 w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
                
                <div>
                  <div className="h-2 bg-gray-300 rounded mb-2 w-full"></div>
                  <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                </div>
                
                <div className="flex space-x-2">
                  <div className="h-2 bg-gray-300 rounded flex-1"></div>
                  <div className="h-2 bg-gray-300 rounded w-20"></div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <div className="h-2 bg-gray-300 rounded w-2/3 mb-2"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-4 italic">
                Simple 5-minute form • All information confidential • Free to apply
              </p>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-gray-700 font-medium">
                  Join <span className="text-[#640433] font-bold">500+</span> community journalists already registered
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Growing network across all 47 counties
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handleJoinNow}
                  className="px-8 py-3 bg-gradient-to-r from-[#640433] to-[#8a0c4a] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center"
                >
                  <span className="text-lg">Join AGJK Now</span>
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-6">
              By joining, you agree to AGJK's code of conduct and professional standards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPopup;
import React from 'react';

function Pdf() {
  return (
    <div className="container mx-auto p-4 bg-[#640433]/10 rounded-lg shadow-md">
      <h2 className="text-xl mb-4 text-gray-800 capitalize">Our member radio stations</h2>
      <div className="overflow-hidden rounded-md">
        <embed
          src="/documents/radios.pdf"
          type="application/pdf"
          className="w-full h-[400px]" // Adjusted height for better viewing
        />
      </div>
    </div>
  );
}

export default Pdf;
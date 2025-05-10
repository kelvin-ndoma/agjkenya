import React from 'react'
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import FourColCards from '../components/FourColCards';
import annete from '../assets/annete.webp';
import teresia from '../assets/teresia.webp';
import dennis from '../assets/dennis.webp';
import molly from '../assets/molly.webp';
import bosco from '../assets/bosco.webp';
import martin from '../assets/martin.webp';
import james from '../assets/james.webp';
import benja from '../assets/benja.webp';
import peris from '../assets/peris.webp';

const About = () => {
  const employeeInfo = [
    {
      employeePic: martin,
      employeeName: 'Martin Kedenge',
      employeeRole: 'Operations Manager',
    },
    {
      employeePic: peris,
      employeeName: 'Peris',
      employeeRole: 'PR & Communications',
    },
    {
      employeePic: dennis,
      employeeName: 'Dennis Beru',
      employeeRole: 'Team Lead',
    },
    {
      employeePic: bosco,
      employeeName: 'Bosco Kathima',
      employeeRole: 'Programs Lead',
    },
    {
      employeePic: benja,
      employeeName: 'Benjamin Radonde',
      employeeRole: 'Finance Officer',
    },
    {
      employeePic: annete,
      employeeName: 'Annette Kimeu',
      employeeRole: 'Programs Assistant',
    },
    {
      employeePic: molly,
      employeeName: 'Molly Peter\'s',
      employeeRole: 'Coordinator',
    },
    {
      employeePic: james,
      employeeName: 'James Mbulo Dolo',
      employeeRole: 'Project Officer',
    },
  ]
  
  return (
    <div className="overflow-hidden">
      <Hero
        title="About"
        titleExt="Us"
        subtitle="Empowering journalists through training, mentorship, and professional development."
        bgColorFrom="#800000"
        bgColorTo="#600000"
      />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <p className='text-xl md:text-3xl font-bold text-start'>
          <span className=''>The faces of</span>
          <span className='text-gray-600 pl-2'>Innovation</span>
        </p>
        <p className='font-thin'>Every one of our team members is dedicated and passionate in seeing AGJK achieve its mission​</p>

        {/* team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {employeeInfo.map((employee, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={employee.employeePic} 
                  alt={employee.employeeName}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{employee.employeeName}</h3>
              <p className="text-gray-600">{employee.employeeRole}</p>
            </div>
          ))}
        </div>

        {/* partners */}
        <div className="mt-20">
          <p className='text-xl md:text-3xl font-bold text-start'>
            <span className=''>Our</span>
            <span className='text-gray-600 pl-2'>Partners</span>
          </p>
          <p className='text-xl md:text-2xl font-bold text-start capitalize py-4 space-y-4 text-[#640433]'>
            <span> Collaborative excellence: Building bridges, <br /></span>
            <span>driving success</span>
          </p>
        </div>
      </div>
      <Marquee />
    </div>
  )
}

export default About;
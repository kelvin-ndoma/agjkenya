import React from 'react'
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
// import { containerVariants, itemVariants, fadeIn } from '../components/Variants'
import FourColCards from '../components/FourColCards';
import annete from '../assets/annete.jpg';
import teresia from '../assets/teresia.jpg';
import dennis from '../assets/dennis.jpg';
import molly from '../assets/molly.jpg';
import bosco from '../assets/bosco.jpg';
import martin from '../assets/martin.jpg';
import james from '../assets/james.jpg';
import benja from '../assets/benja.jpg';

const Team = () => {
  const employeeInfo = [
    {
      employeePic: annete,
      employeeName: 'Annette Kimeu',
      employeeRole: 'Programs Manager',
    },
    {
      employeePic: teresia,
      employeeName: 'Teresia Aluoch',
      employeeRole: 'Public Relations',
    },
    {
      employeePic: dennis,
      employeeName: 'Dennis Beru',
      employeeRole: 'Chairperson',
    },
    {
      employeePic: molly,
      employeeName: 'Molly Peter’s',
      employeeRole: 'Vice-Chairperson',
    },
    {
      employeePic: bosco,
      employeeName: 'Bosco Kathima',
      employeeRole: 'National Coordinator',
    },
    {
      employeePic: martin,
      employeeName: 'Martin Kedenge',
      employeeRole: 'Secretary',
    },
    {
      employeePic: james,
      employeeName: 'James Mbulo Dolo',
      employeeRole: 'Treasurer',
    },
    {
      employeePic: benja,
      employeeName: 'Benjamin Radonde',
      employeeRole: 'Accountant',
    }
  ]
  return (
    <>
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
        <p className='font-thin'>Every one of our team members is dedicated and passionate in sieng AGJK achieve its mission​</p>

        {/* team */}
        <FourColCards cards={employeeInfo} />

        {/* partners */}
        <p className='text-xl md:text-3xl font-bold text-start'>
          <span className=''>Our</span>
          <span className='text-gray-600 pl-2'>Partners</span>
        </p>
        <p className='text-xl md:text-2xl font-bold text-start capitalize py-4 space-y-4 text-[#640433]'>
          <span> Collaborative excellence: Building bridges, <br/></span>
          <span>driving success</span>
        </p>
        <Marquee />
      </div>
    </>
  )
}

export default Team;
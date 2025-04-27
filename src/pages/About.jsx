import React from 'react'
import Hero from '../components/Hero'
// import { containerVariants, itemVariants, fadeIn } from '../components/Variants'
import FourColCards from '../components/FourColCards';
import user from '../assets/user-avatar.jpg';

const About = () => {
  const employeeInfo= [
    {
      employeePic: user,
      employeeName: 'Annette Kimeu',
      employeeRole: 'Programs Manager',
    },
    {
      employeePic: user,
      employeeName: 'Teresia Aluoch',
      employeeRole: 'Public Relations',
    },
    {
      employeePic: user,
      employeeName: 'Dennis Beru',
      employeeRole: 'Chairperson',
    },
    {
      employeePic: user,
      employeeName: 'Molly Peter’s',
      employeeRole: 'Vice-Chairperson',
    },
    {
      employeePic: user,
      employeeName: 'Bosco Kathima',
      employeeRole: 'National Coordinator',
    },
    {
      employeePic: user,
      employeeName: 'Martin Kedenge',
      employeeRole: 'Secretary',
    },
    {
      employeePic: user,
      employeeName: 'James Mbulo Dolo',
      employeeRole: 'Treasurer',
    },
    {
      employeePic: user,
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
      </div>
    </>
  )
}

export default About
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import annete from '../assets/annete.webp';
import dennis from '../assets/dennis.webp';
import molly from '../assets/molly.webp';
import bosco from '../assets/bosco.webp';
import martin from '../assets/martin.webp';
import james from '../assets/james.webp';
import benja from '../assets/benja.webp';
import peris from '../assets/peris.webp';
import kioko from '../assets/Dennis.jpg'

const About = () => {
  const employeeInfo = [
      {
      employeePic: kioko,
      employeeName: 'Dennis Kioko',
      employeeRole: 'Board Chair',
    },
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
        {/* Mission Section */}
        <div className="mb-16">
          <div className="space-y-4 text-gray-700">
            <p>
              AGJK seeks to promote media viability across community media in Kenya thus creating an engaged citizenry well informed with issues affecting them directly and indirectly. This contribution is made through capacity building for skill development to community, citizen and school journalists, advocacy, highlighting leadership and governance while building vital networks for strong partnerships to realize media viability in the field of community media.
            </p>
            <p>
              AGJK recognizes that there are many community media journalists spread out across community radio stations, television stations, freelancers, bloggers and media practitioners who are dedicated to upholding the highest professional standards in their journalistic work, producing and disseminating factual and relevant information to the Kenyan masses through different community-based platforms.
            </p>
            <p>
              The Community media landscape in Kenya operates in a diverse media environment facing complex challenges with regards to sustainability and viability including persisting financial constraints. Community media outlets have however braced the challenges and continued producing objective and relevant content for different target audiences in Kenya.
            </p>
            <p>
              With access to information critical during the pandemic times and the Kenyan general elections, community media outlets filled the information void by broadcasting timely information to keep communities healthy and to enhance civic education to the general Kenyan citizenry.
            </p>
          </div>
        </div>

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
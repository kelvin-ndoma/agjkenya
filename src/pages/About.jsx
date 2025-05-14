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
      employeePic: dennis,
      employeeName: 'Dennis Beru',
      employeeRole: 'Team Lead',
    },
    {
      employeePic: molly,
      employeeName: 'Molly Peter\'s',
      employeeRole: 'Coordinator',
    },
    {
      employeePic: martin,
      employeeName: 'Martin Kedenge',
      employeeRole: 'Operations Manager',
    },
    {
      employeePic: bosco,
      employeeName: 'Bosco Kathima',
      employeeRole: 'Programs Lead',
    },
    {
      employeePic: peris,
      employeeName: 'Peris',
      employeeRole: 'PR & Communications',
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
      employeePic: james,
      employeeName: 'James Mbulo Dolo',
      employeeRole: 'Project Officer',
    },
  ]

  const pillars = [
    {
      title: "Capacity Building",
      subtitle: "Trainings / Skills Development",
      description: "At the heart of AGJK's mission is the empowerment of community journalists through structured training, mentorship, and hands-on skills development. We invest in building the capacity of grassroots media practitioners by equipping them with critical knowledge in journalism ethics, digital storytelling, fact-checking, media law, and emerging technologies. Through workshops, mentorship programs, and conferences, we aim to strengthen their professional growth, enabling them to tell impactful stories that inspire change and accountability in their communities.",
      icon: "📚",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Advocacy",
      subtitle: "Campaigns",
      description: "Advocacy is at the heart of AGJK's mission. We work with over 80 community media outlets across Kenya, leveraging our vast grassroots network to amplify underrepresented voices and advance social justice causes. AGJK plays a strategic role in creating, curating, producing, and disseminating impactful campaign content in collaboration with local and international partners. From youth empowerment and gender equality to health rights and environmental action, our campaigns are community-driven and evidence-based, ensuring real stories shape real change on the ground.",
      icon: "📢",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Organizational Growth",
      subtitle: "Sustainability & Development",
      description: "We believe in leading by example. AGJK is committed to strengthening its internal structures, governance systems, and sustainability strategies to remain a credible, transparent, and effective organization. By investing in our own growth—through strategic planning, partnerships, resource mobilization, and team development—we ensure that our mission has long-term impact and that we continue to serve as a strong voice for grassroots journalists across Kenya and beyond.",
      icon: "🌱",
      color: "from-green-500 to-teal-600"
    }
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
      AGJK supports media viability in Kenya by empowering community, citizen, and school journalists through skill-building, advocacy, and strategic partnerships. Our goal is to foster an informed and engaged citizenry.
    </p>
    <p>
      We work with a diverse network of community media practitioners—across radio, TV, blogs, and freelance platforms—who uphold high professional standards and deliver relevant, factual content.
    </p>
    <p>
      Despite financial and operational challenges, community media in Kenya continues to serve its audiences with impactful journalism, especially during critical moments like the pandemic and elections.
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

        {/* pillars */}
        <div className="mt-20">
          <p className='text-xl md:text-3xl font-bold text-start'>
            <span className=''>Our</span>
            <span className='text-gray-600 pl-2'>Pillars</span>
          </p>
          <p className='text-xl md:text-2xl font-bold text-start capitalize py-4 space-y-4 text-[#640433]'>
            <span>The foundation of our impact: Core principles that drive our mission forward</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-90`}></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{pillar.title}</h3>
                  <h4 className="text-lg font-semibold text-white/90 mb-4">{pillar.subtitle}</h4>
                  <p className="text-white/90 flex-grow">{pillar.description}</p>
                                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* partners */}
        <div className="mt-20">
          <p className='text-xl md:text-3xl font-bold text-start'>
            <span className=''>Our</span>
            <span className='text-gray-600 pl-2'>Partners</span>
          </p>
          <p className='text-xl md:text-2xl font-bold text-start capitalize py-4 space-y-4 text-[#640433]'>
            <span> Collaborative excellence: Building bridges, <br /></span>
          </p>
        </div>
      </div>
      <Marquee />
    </div>
  )
}

export default About;
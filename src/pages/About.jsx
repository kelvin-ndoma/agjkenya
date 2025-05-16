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
import kioko from '../assets/Dennis.jpg';

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
    },
    {
      title: "Advocacy",
      subtitle: "Campaigns",
      description: "Advocacy is at the heart of AGJK's mission. We work with over 80 community media outlets across Kenya, leveraging our vast grassroots network to amplify underrepresented voices and advance social justice causes. AGJK plays a strategic role in creating, curating, producing, and disseminating impactful campaign content in collaboration with local and international partners. From youth empowerment and gender equality to health rights and environmental action, our campaigns are community-driven and evidence-based, ensuring real stories shape real change on the ground.",
      icon: "📢",
    },
    {
      title: "Organizational Growth",
      subtitle: "Sustainability & Development",
      description: "We believe in leading by example. AGJK is committed to strengthening its internal structures, governance systems, and sustainability strategies to remain a credible, transparent, and effective organization. By investing in our own growth—through strategic planning, partnerships, resource mobilization, and team development—we ensure that our mission has long-term impact and that we continue to serve as a strong voice for grassroots journalists across Kenya and beyond.",
      icon: "🌱",
    }
  ]

  const interventions = [
    {
      title: "Gender",
      description: "AGJK is committed to promoting gender equality in media and society by empowering women and girls, challenging harmful stereotypes, and ensuring inclusive representation in storytelling. We support gender-sensitive journalism, amplify the voices of women changemakers, and work with communities to advocate for the rights and dignity of all genders—especially in underrepresented and marginalized areas.",
      icon: "♀️",
    },
    {
      title: "Health",
      description: "We recognize the power of community media in shaping public health awareness and behavior. AGJK works with partners and health experts to create and disseminate accurate, culturally relevant information on issues such as reproductive health, mental well-being, hygiene, and disease prevention. Our health interventions aim to equip community journalists with the tools to drive health literacy and improve outcomes in underserved communities.",
      icon: "🏥",
    },
    {
      title: "Governance and Social Accountability",
      description: "Through investigative reporting, civic education, and citizen engagement, AGJK promotes transparency, accountability, and ethical leadership at the grassroots level. We support journalists in uncovering issues such as corruption, service delivery gaps, and budget mismanagement while encouraging communities to actively participate in democratic processes and decision-making.",
      icon: "⚖️",
    },
    {
      title: "Environment and Climate Change",
      description: "As climate challenges increasingly affect vulnerable communities, AGJK trains and supports journalists to tell compelling stories around environmental conservation, climate adaptation, and sustainable living. We collaborate with climate advocates to raise awareness, influence policy, and drive local action that protects natural resources and builds community resilience.",
      icon: "🌍",
    },
    {
      title: "Technology and Artificial Intelligence",
      description: "We embrace the evolving digital landscape by integrating technology and AI into our work and training programs. AGJK equips community journalists with digital tools, promotes media innovation, and explores the ethical use of artificial intelligence in storytelling and fact-checking. This intervention ensures our members remain competitive, relevant, and impactful in a tech-driven world.",
      icon: "🤖",
    },
    {
      title: "Peace and Reconciliation",
      description: "AGJK plays an active role in promoting peacebuilding and social cohesion through conflict-sensitive journalism and community dialogues. We believe in the power of storytelling to heal divisions, foster mutual understanding, and support reconciliation processes. Our work encourages inclusive narratives that promote harmony, especially in conflict-prone or post-crisis communities.",
      icon: "🕊️",
    }
  ]
  
  
  return (
    <div className="overflow-hidden bg-gray-50">
      <Hero
        title="About"
        titleExt="Us"
        subtitle="Empowering journalists through training, mentorship, and professional development."
        bgColorFrom="#800000"
        bgColorTo="#600000"
      />
      
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className=" p-8 md:p-12 border-gray-100">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            Our <span className="text-maroon-600">Mission</span>
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              AGJK supports media viability in Kenya by empowering community, citizen, and school journalists through skill-building, advocacy, and strategic partnerships. Our goal is to foster an informed and engaged citizenry.
            </p>
            <p className="text-lg">
              We work with a diverse network of community media practitioners—across radio, TV, blogs, and freelance platforms—who uphold high professional standards and deliver relevant, factual content.
            </p>
            <p className="text-lg">
              Despite financial and operational challenges, community media in Kenya continues to serve its audiences with impactful journalism, especially during critical moments like the pandemic and elections.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            The <span className="text-maroon-600">Faces</span> of Innovation
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Every one of our team members is dedicated and passionate in seeing AGJK achieve its mission
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {employeeInfo.map((employee, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="relative w-56 h-56 mb-5 overflow-hidden rounded-full border-4 border-white shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
                <img 
                  src={employee.employeePic} 
                  alt={employee.employeeName}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{employee.employeeName}</h3>
              <p className="text-gray-600 font-medium">{employee.employeeRole}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Our <span className="text-maroon-600">Pillars</span>
          </h2>
          <p className="mt-4 text-xl text-maroon-600 font-medium max-w-3xl mx-auto">
            The foundation of our impact: Core principles that drive our mission forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full bg-white">
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="text-5xl mb-6 text-maroon-600">{pillar.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-5">{pillar.subtitle}</h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed flex-grow">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interventions Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Our <span className="text-maroon-600">Interventions</span>
          </h2>
          <p className="mt-4 text-xl text-maroon-600 font-medium max-w-3xl mx-auto">
            Areas of impact: Where we make a difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interventions.map((intervention, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent h-full bg-white">
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="text-5xl mb-6 text-maroon-600">
                  {intervention.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{intervention.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{intervention.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900">
            Our <span className="text-maroon-600">Partners</span>
          </h2>
          <p className="mt-4 text-xl text-maroon-600 font-medium max-w-3xl mx-auto">
            Collaborative excellence: Building bridges for better journalism
          </p>
        </div>
        
        {/* Marquee component would go here */}
        <Marquee />
      </section>
    </div>
  )
}
export default About;
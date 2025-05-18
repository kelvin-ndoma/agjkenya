import { Helmet } from 'react-helmet';
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
      employeeName: "Molly Peter's",
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
  ];

  const pillars = [
    {
      title: "Capacity Building",
      subtitle: "Trainings / Skills Development",
      description: "At the heart of AGJK's mission is the empowerment of community journalists through structured training, mentorship, and hands-on skills development. We invest in building the capacity of grassroots media practitioners by equipping them with critical knowledge in journalism ethics, digital storytelling, fact-checking, media law, and emerging technologies.",
      icon: "📚",
    },
    {
      title: "Advocacy",
      subtitle: "Campaigns",
      description: "AGJK works with over 80 community media outlets across Kenya to amplify underrepresented voices and advance social justice causes. We produce impactful campaign content around youth empowerment, gender equality, health rights, and environmental action.",
      icon: "📢",
    },
    {
      title: "Organizational Growth",
      subtitle: "Sustainability & Development",
      description: "AGJK strengthens internal governance systems and sustainability strategies through strategic planning, partnerships, and team development, ensuring long-term mission impact and organizational transparency.",
      icon: "🌱",
    }
  ];

  const interventions = [
    {
      title: "Gender",
      description: "AGJK promotes gender equality by empowering women, challenging stereotypes, and advocating for inclusive media representation across Kenyan communities.",
      icon: "♀️",
    },
    {
      title: "Health",
      description: "We partner with health experts to deliver culturally relevant health journalism on topics like reproductive health, hygiene, and disease prevention to underserved communities.",
      icon: "🏥",
    },
    {
      title: "Governance and Social Accountability",
      description: "We foster transparency and civic engagement by supporting investigative journalism and citizen participation in governance at the grassroots level.",
      icon: "⚖️",
    },
    {
      title: "Environment and Climate Change",
      description: "AGJK empowers journalists to cover climate change, conservation, and sustainability, building awareness and resilience in vulnerable communities.",
      icon: "🌍",
    },
    {
      title: "Technology and Artificial Intelligence",
      description: "AGJK trains community journalists on digital tools and ethical AI use to enhance storytelling, fact-checking, and media innovation.",
      icon: "🤖",
    },
    {
      title: "Peace and Reconciliation",
      description: "We foster peace and social cohesion through conflict-sensitive journalism and community dialogues, promoting healing and mutual understanding.",
      icon: "🕊️",
    }
  ];

  return (
    <div className="overflow-hidden bg-gray-50">
      <Helmet>
        <title>About AGJK – Empowering Community Journalists in Kenya</title>
        <meta
          name="description"
          content="Learn about AGJK's mission, leadership, and impact pillars in empowering grassroots journalists, promoting advocacy, and driving social change in Kenya."
        />
        <meta name="keywords" content="AGJK, grassroots journalism, community media Kenya, media advocacy, journalist training, AGJK team, AGJK mission, AGJK pillars" />
        <meta property="og:title" content="About AGJK – Empowering Community Journalists in Kenya" />
        <meta property="og:description" content="Meet the AGJK team and discover how we build capacity, lead advocacy, and drive community impact through grassroots journalism in Kenya." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {/* Combined About and Mission Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">
            About <span className="text-maroon-600">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know who we are, what we stand for, and how we're making an impact.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 md:p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our <span className="text-maroon-600">Mission</span>
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p className="text-lg">
              AGJK supports media viability in Kenya by empowering community, citizen, and school journalists through skill-building, advocacy, and strategic partnerships.
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
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            The <span className="text-maroon-600">Faces</span> of Innovation
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Every one of our team members is dedicated and passionate in seeing AGJK achieve its mission
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {employeeInfo.map((employee, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="relative w-52 h-52 mb-4 overflow-hidden rounded-full border-4 border-white shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
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
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-maroon-600">Pillars</span>
          </h2>
          <p className="mt-4 text-xl text-maroon-600 font-medium max-w-3xl mx-auto">
            The foundation of our impact: Core principles that drive our mission forward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full bg-white">
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="text-5xl mb-4 text-maroon-600">{pillar.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">{pillar.subtitle}</h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed flex-grow">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interventions Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-maroon-600">Interventions</span>
          </h2>
          <p className="mt-4 text-xl text-maroon-600 font-medium max-w-3xl mx-auto">
            Areas of impact: Where we make a difference
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interventions.map((intervention, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent h-full bg-white">
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="text-5xl mb-4 text-maroon-600">{intervention.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{intervention.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{intervention.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-maroon-600">Partners</span>
          </h2>
          <p className="mt-4 text-xl text-maroon-600 font-medium max-w-3xl mx-auto">
            Collaborative excellence: Building bridges for better journalism
          </p>
        </div>
        <Marquee />
      </section>
    </div>
  );
};

export default About;
import React from "react";
import { motion } from 'framer-motion';
import Hero from "../components/Hero";
import Map from "../components/Map";

const Contact = () => {
  const contactInfo = [
    {
      title: 'phone',
      description: '+254 769 539 198',
      icon: ''
    },
    {
      title: 'email',
      description: 'info@agjkenya.com',
      icon: ''
    }
  ]

  const busInfo = [
    {
      days: 'Monday - Friday',
      hours: '8:00 - 18:30',
    },
    {
      days: 'Saturday',
      hours: '8:00 - 14:00',
    }
  ]
  return (
    <>
      <Hero
        title="Contact"
        titleExt="Us"
        subtitle="We'd Love to Hear From You!"
        bgColorFrom="#800000"
        bgColorTo="#600000"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* form */}
          <div className="one">
            <p className="text-xl font-bold text-start py-4">
              Let's Connect. Your Questions Answered.
            </p>
            <form id="contactForm" className="space-y-8 p-4 md:p-8 bg-[#800000]/10 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" className="block mb-2 text-sm font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow-sm border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="janedoe@gmail.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label for="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="text"
                  className="shadow-sm border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-medium">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="shadow-sm border border-gray-300 text-gray-900 bg-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-accentColor focus:ring-4 focus:outline-none rounded-xl text-md font-semibold px-6 py-2 text-center text-white bg-[#640433] hover:bg-[#4c2f3d] sm:w-fit"
              >
                Send message
              </button>
            </form>
          </div>
          {/* info */}
          <div className="two">

            {/* row a: contact info */}
            <div className="contact-info">
              <p className="text-base font-thin text-gray-600 pb-2 md:pb-3">If you have any questions, please feel free to get in touch with us via phone, text email, the form beow, or even on social media</p>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2 p-4 bg-[#800000]/10 rounded-xl">
                  <p className="uppercase font-bold text-base">contact information</p>
                  <hr className="text-gray-500" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="grid grid-cols-1 gap-6 mb-2 items-center">
                      {/* Map contactInfo here */}
                      {contactInfo.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4 p-4 border-b-6 border-[#640433] rounded-2xl"
                        >
                          {/* Image Section */}
                          {item.icon && <img src={item.icon} alt={item.title} className="w-12 h-12" />}

                          {/* Text Section */}
                          <div>
                            <h3 className="text-sm capitalize font-semibold mb-1 text-start">{item.title}</h3>
                            <p className="text-sm opacity-75 text-start">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}

                    </div>

                  </div>
                </div>
                {/* business info */}
                <div className="space-y-2 p-4 bg-[#800000]/10 rounded-xl">
                  <p className="uppercase font-bold text-base">business information</p>
                  <hr className="text-gray-500" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="grid grid-cols-1 gap-6 mb-2 items-center">
                      {/* Map contactInfo here */}
                      {busInfo.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4 p-2 rounded-2xl"
                        >

                          {/* Text Section */}
                          <div>
                            <h3 className="text-sm capitalize font-semibold mb-1 text-start">{item.days}</h3>
                            <p className="text-sm opacity-75 text-start">{item.hours}</p>
                          </div>
                        </motion.div>
                      ))}

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* map */}
         <Map /> 
      </div>
    </>
  );
};

export default Contact;

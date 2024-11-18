import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const About = () => {
  // Skills data
  const skills = [
    { name: 'HTML & CSS', level: 'w-11/12' },
    { name: 'React JS', level: 'w-10/12' },
    { name: 'JavaScript', level: 'w-9/12' },
    { name: 'Node JS', level: 'w-8/12' },
  ];

  // Stats data
  const stats = [
    { value: 2, label: 'Years of Experience' },
    { value: 20, label: 'Projects Completed' },
    { value: 15, label: 'Happy Clients' },
    { value: 5, label: 'Certifications' },
  ];

  // State to manage skill animations
  const [viewedSkill, setViewedSkill] = useState(false);

  const handleViewChange = (isVisible) => {
    if (isVisible && !viewedSkill) {
      setViewedSkill(true); // Trigger animation only once
    }
  };

  return (
    <section className="bg-black text-white py-12 mt-28">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-purple-500 mb-8">
        About <span className="text-white">Me</span>
      </h2>

      {/* Content */}
      <div className="container mx-auto flex flex-col mt-10 items-center md:flex-row">
        {/* Left: Circular Image */}
        <div className="mb-8 flex justify-center md:w-1/3">
          <img
            src="./assids/Shubham.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:shadow-xl md:w-[20rem] md:h-[22rem]"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-md md:text-lg mb-6">
            I am a Full Stack Developer with strong expertise in React.js and a passion for building modern web applications. I specialize in crafting responsive user interfaces and delivering seamless user experiences. With proficiency in front-end and back-end technologies, I aim to bridge design and functionality in every project I work on.
          </p>

          {/* Skills Section with Visibility Sensor */}
          <VisibilitySensor onChange={handleViewChange} partialVisibility>
            <div className="mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <p className="text-lg">{skill.name}</p>
                  <div className="w-full max-w-[35rem] bg-gray-700 h-2 rounded-full">
                    <div
                      className={`bg-gradient-to-r from-purple-500 to-orange-500 h-2 rounded-full ${
                        viewedSkill ? skill.level : 'w-0'
                      } transition-all duration-700 ease-out`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </VisibilitySensor>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-purple-500">
                  <CountUp end={stat.value} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <p className="text-md md:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

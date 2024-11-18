import React from 'react';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Development Internship',
    duration: 'Mar 2024 - Oct 2024',
    steps: [
      'Amazing Experience, Interaction With Many Personalities And Next Level Learning From People.',
    ],
  },
  {
    id: 2,
    title: 'Complete CCNA, Cloud Computing Internship',
    duration: 'October 2022',
    steps: [
      'Amazing Experience, Interaction With Many Personalities And Next Level Learning From People.',
    ],
  },
  {
    id: 3,
    title: 'Attended Hackathon in SV Polytechnic College Bhopal',
    duration: 'October 2022',
    steps: [
      'Amazing Experience, Interaction With Many Personalities And Next Level Learning From People.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-12 mt-10">
      <h2 className="text-center text-4xl font-bold text-purple-500 mb-8">
        My <span className='text-white'>Experience</span>
      </h2>
      <div className="container px-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience) => (
          <div key={experience.id} className="p-6 rounded-lg border border-gray-200 cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-purple-500 mb-2">
              {experience.title}
            </h3>
            <p className="text-gray-300 mb-4">{experience.duration}</p>
            <ol className="list-inside text-gray-300 space-y-2">
              {experience.steps.map((step, index) => (
                <li key={index} className="transition duration-300">
                  {step}
                </li>
              ))}
            </ol>
            <button className="text-pink-500 mt-6 font-semibold hover:text-orange-800">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

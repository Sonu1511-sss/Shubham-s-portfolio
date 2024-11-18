import React from 'react';

const services = [
  { id: 1, title: 'WEB DESIGN', description: 'Full Stack Developer specializing in React.js and web design....' },
  { id: 2, title: 'CREATIVE DESIGN', description: 'Creative designer crafting visually engaging and functional digital experiences...' },
  { id: 3, title: 'SOCIAL MEDIA', description: 'Social media specialist driving online engagement...' },
  { id: 4, title: 'RESPONSIVE WEB DEVELOPMENT', description: 'Expert in building responsive websites for seamless user experiences...' },
  { id: 5, title: 'DIGITAL MARKETING', description: 'Skilled in digital marketing strategies to boost online presence....' },
  { id: 6, title: 'CONTENT WRITING', description: 'Experienced in crafting engaging content that resonates with audiences...' },
];

const Servise = () => {
  return (
    <section className="bg-black py-12 mt-10">
      <h2 className="text-center text-4xl font-bold text-purple-500 mb-8">
        My <span className='text-white'>Services</span>
      </h2>
      <div className="container px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="p-6 rounded-lg border border-gray-200 cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-purple-500 mb-2">
              {String(service.id).padStart(2, '0')} {service.title}
            </h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <button className="text-pink-500 font-semibold transition duration-300">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servise;

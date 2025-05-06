import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Travel Agenecy',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams..',
    image: './assids/project 1.png', // Replace with your project image URL
    link: 'https://puruliatravelsfinal.netlify.app/', // Link to the project or more details
  },
  {
    id: 2,
    title: 'Infinity Jobs',
    description: 'A MERN stack job portal for posting and applying to jobs with user login and responsive design..',
    image: './assids/Infinity-Jobs-2.png', // Replace with your project image URL
    link: 'https://job-portel-f-twv1.vercel.app/',
  },
  {
    id: 3,
    title: 'Lets Falafal',
    description: 'Fresh, authentic falafel made daily. Taste the difference!',
    image: './assids/project 3.png', // Replace with your project image URL
    link: 'https://lets-falafel.netlify.app/',
  },
  {
    id: 4,
    title: 'Traveler website',
    description: 'Explore hotels, tours, and palaces for unforgettable journeys!.',
    image: './assids/project 4.png', // Replace with your project image URL
    link: 'https://66acc8920e15ab2e97459d74--comforting-cascaron-3f1f3e.netlify.app/',
  },
  {
    id: 5,
    title: 'E-Cart Ecommerce ',
    description: 'Your go-to online store for quality products at unbeatable prices!.',
    image: './assids/project 5.png', // Replace with your project image URL
    link: 'https://e-cart-project-umber.vercel.app/',
  },
  {
    id: 6,
    title: 'Dribble clone',
    description: 'Explore, showcase, and connect with design inspiration in our Dribbble clone.',
    image: './assids/project 6.png', // Replace with your project image URL
    link: 'https://sonu1511-sss.github.io/landing-page/',
  },
];

const Portfolio = () => {
  return (
    <section className="py-12 mt-10 ">
      <h2 className="text-center text-4xl font-bold text-purple-500 mb-8">
        My <span className='text-white'>Portfolio</span>
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" p-6 rounded-lg border-2 border-gray-700 cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="rounded-lg mb-4 h-[12rem]" 
            />
            <h3 className="text-2xl font-bold text-purple-500 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              className="text-pink-500 font-semibold  transition duration-300"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
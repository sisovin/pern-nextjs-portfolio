import React from 'react';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      image: '/images/project1.png',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      image: '/images/project2.png',
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      image: '/images/project3.png',
    },
  ];

  return (
    <div>
      <section>
        <h1>My Portfolio</h1>
        <div>
          {projects.map((project, index) => (
            <div key={index}>
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

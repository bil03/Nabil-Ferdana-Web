import React from 'react';
import CardProject from '../components/CardProject';
import projects from '../utils/project.json';

function Project() {
  return (
    <div class="max-w-screen-lg mx-auto px-4 text-center">
      <h1 class="text-4xl font-bold mb-8">My Projects🧑‍💻</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {projects.map((project, i) => (
          <CardProject key={i} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;

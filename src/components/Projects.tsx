import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [revealedSecrets, setRevealedSecrets] = useState<number[]>([]);

  const handleSecretReveal = (id: number) => {
    if (!revealedSecrets.includes(id)) {
      setRevealedSecrets([...revealedSecrets, id]);
      
      if (revealedSecrets.length === 0) {
        // First secret revealed
        document.dispatchEvent(new CustomEvent('secretFound', { detail: 'hover-project' }));
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="gradient-blur bottom-[20%] left-[10%]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-secondary max-w-3xl mx-auto">
            A collection of my recent work across various domains and technologies.
            Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  
                  <div className="flex gap-2">
                    {project.secretNote && (
                      <button 
                        id="project-secret"
                        onClick={() => handleSecretReveal(project.id)}
                        className="p-2 bg-primary rounded-full transform transition-transform duration-300 hover:rotate-12 hoverable"
                      >
                        <Eye className="w-4 h-4 text-white" />
                      </button>
                    )}
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full transform transition-transform duration-300 hover:rotate-12 hoverable"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                {project.secretNote && revealedSecrets.includes(project.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-md"
                  >
                    <p className="text-sm italic text-primary">
                      <span className="font-semibold">Secret note:</span> {project.secretNote}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
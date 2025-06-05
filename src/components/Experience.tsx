import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Calendar, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="gradient-blur top-[30%] right-[20%]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-secondary max-w-3xl mx-auto">
            A timeline of my professional journey, highlighting key roles and experiences.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-transparent transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:text-right' : ''
              }`}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0
                    ? 'md:items-end md:pr-12'
                    : 'md:items-start md:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute top-0 left-0 md:left-1/2 w-6 h-6 bg-surface border-2 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                
                {/* Experience period */}
                <div className="ml-10 md:ml-0 mb-2 flex items-center text-sm text-primary">
                  {index % 2 !== 0 && <ChevronRight className="mr-1 h-4 w-4 md:hidden" />}
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{exp.period}</span>
                  {index % 2 === 0 && <ChevronRight className="ml-1 h-4 w-4 md:hidden" />}
                </div>
                
                {/* Experience content */}
                <div className="ml-10 md:ml-0">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <h4 className="text-lg text-primary mb-3">{exp.company}</h4>
                  <p className="text-text-secondary mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-surface text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
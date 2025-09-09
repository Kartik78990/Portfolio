import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Code, Palette, MoreHorizontal, Database } from 'lucide-react';

const About: React.FC = () => {
  const categories = [
    { name: 'frontend', icon: <Code className="w-5 h-5" />, label: 'Frontend' },
    { name: 'design', icon: <Palette className="w-5 h-5" />, label: 'Design' },
    { name: 'other', icon: <MoreHorizontal className="w-5 h-5" />, label: 'Other' },
    { name: 'Backend', icon: <Database className="w-5 h-5" />, label: 'Backend' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="gradient-blur top-[30%] right-[10%]"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text-secondary max-w-3xl mx-auto">
            I'm a passionate developer and designer with a love for creating interactive, user-focused experiences.
            My journey in tech began with simple HTML websites and has evolved into complex applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">My Story</h3>
            <div className="space-y-4 text-text-secondary">
              <p>
                I'm a creative technologist with 8+ years of experience building digital products and interactive experiences. 
                I specialize in frontend development, with a strong focus on creating engaging, accessible, and performant user interfaces.
              </p>
              <p>
                I believe in the power of technology to transform ideas into impactful solutions. My approach combines technical excellence 
                with creative problem-solving, always keeping the end user at the center of the design process.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or experimenting with creative coding and generative art.
              </p>
              <p className="text-xs text-text-tertiary italic">
                Psst... there are several hidden interactions throughout this site. Can you find them all?
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">My Skills</h3>
            
            <div className="space-y-8">
              {categories.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center gap-2 mb-4">
                    {category.icon}
                    <h4 className="text-lg font-medium">{category.label}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category.name)
                      .map((skill) => (
                        <div key={skill.name} className="hoverable">
                          <div className="flex justify-between mb-1">
                            <span>{skill.name}</span>
                            <span className="text-primary">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-primary rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

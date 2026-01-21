import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, SKILLS } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A track record of building scalable solutions for global companies.
          </p>
        </motion.div>

        {/* Skills Marquee (Simplified as a grid for clarity) */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 hover:border-primary/50 hover:bg-slate-750 transition-colors"
              >
                <skill.icon size={16} className="text-primary" />
                <span className="text-slate-200 text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div id="timeline" className="relative space-y-12 scroll-mt-24">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block" />

            {EXPERIENCE.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-darker transform -translate-x-1.5 md:-translate-x-2 mt-1.5 hidden md:block" />

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className={`p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-primary/30 transition-all ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    {/* Job Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
                        {job.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Standard Highlights */}
                    {job.highlights.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {job.highlights.slice(0, 4).map((point, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-300">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Nested Projects Timeline */}
                    {job.projects && (
                      <div className="mt-8">
                         <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">
                           Key Projects at {job.company}
                         </h4>
                         <div className="border-l-2 border-slate-800 ml-2 space-y-8">
                            {job.projects.map((project) => (
                                <div key={project.id} className="relative pl-6">
                                     {/* Project Dot */}
                                     <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-slate-900 border-2 border-secondary rounded-full z-10"></div>
                                     
                                     <h5 className="text-white font-bold text-lg leading-none mb-1">{project.name}</h5>
                                     <p className="text-primary/90 text-sm font-medium mb-2">{project.role}</p>
                                     <p className="text-slate-400 text-sm mb-3 text-sm leading-relaxed">{project.description}</p>
                                     
                                     <ul className="space-y-1 mb-3">
                                        {project.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start text-xs text-slate-300">
                                                <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-500 rounded-full flex-shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                     </ul>

                                     <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700/50">
                                            {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                         </div>
                      </div>
                    )}

                    {/* Job Tech Stack (Summary) */}
                    {(!job.projects || job.tech.length > 0) && (
                      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-slate-800/50">
                        {job.tech.map((t) => (
                          <span key={t} className="text-xs text-blue-300 bg-blue-900/20 px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
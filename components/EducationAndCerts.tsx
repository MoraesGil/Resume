import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, CERTIFICATES } from '../constants';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const EducationAndCerts: React.FC = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);

  // Show only first 6 certs by default
  const displayCerts = showAllCerts ? CERTIFICATES : CERTIFICATES.slice(0, 6);

  return (
    <section id="education" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Education Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 bg-primary/10 rounded-lg">
              <GraduationCap className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION_DATA.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-primary/40 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-mono text-slate-500">{edu.period}</span>
                </div>
                <p className="text-lg text-slate-300 mb-4">{edu.institution}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{edu.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Award className="text-purple-400" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white">Certificates</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCerts.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col justify-between hover:bg-slate-800 transition-colors"
              >
                <div>
                  <h4 className="text-slate-200 font-semibold mb-2">{cert.title}</h4>
                  <p className="text-slate-400 text-sm">{cert.issuer}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs font-mono text-slate-500">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {CERTIFICATES.length > 6 && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium text-sm"
              >
                {showAllCerts ? 'Show Less' : `Show All (${CERTIFICATES.length})`}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default EducationAndCerts;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-mono mb-4 text-lg">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Gilberto <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Moraes</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
              Senior Frontend Engineer & Full-stack Developer passionate about building high-complexity interfaces, accessible tools, and AI-native software.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700 hover:border-primary"
                >
                  <link.icon size={20} />
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>

            <motion.a
              href="#experience"
              whileHover={{ x: 5 }}
              className="inline-flex items-center text-primary font-semibold text-lg hover:underline underline-offset-4"
            >
              See my work <ArrowRight className="ml-2" size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl rotate-6 opacity-20 blur-lg"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-2xl flex flex-col justify-center">
                 <div className="font-mono text-sm text-slate-400">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = <span className="text-yellow-400">new</span> <span className="text-green-400">Developer</span>({'{'}
                    <div className="pl-4 my-2">
                        name: <span className="text-orange-300">'Gilberto Moraes'</span>,<br/>
                        role: <span className="text-orange-300">'Senior Frontend'</span>,<br/>
                        stack: [<span className="text-orange-300">'React'</span>, <span className="text-orange-300">'TS'</span>, <span className="text-orange-300">'GraphQL'</span>],<br/>
                        location: <span className="text-orange-300">'Remote'</span>
                    </div>
                    {'}'});
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="flex justify-center items-center gap-8 mb-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-4 bg-slate-900 rounded-full text-slate-400 group-hover:text-primary group-hover:bg-slate-800 transition-all transform group-hover:-translate-y-1">
                <link.icon size={24} />
              </div>
              <span className="text-sm text-slate-500 group-hover:text-slate-300">{link.platform}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-slate-900 pt-8">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Gilberto Moraes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
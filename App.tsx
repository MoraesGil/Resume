import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import EducationAndCerts from './components/EducationAndCerts';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-darker text-slate-300">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <EducationAndCerts />
      </main>
      <Contact />
    </div>
  );
}

export default App;
import React from 'react';
import sasmitImg from '../assets/trainers/sasmit.jpg';
import gauravImg from '../assets/trainers/gaurav.jpeg';
import salmanImg from '../assets/trainers/salman.jpeg';

const TrainersSection: React.FC = () => {
  const trainers = [
    {
      id: 1,
      name: 'Gaurav Tevathiya',
      role: 'Cloud and AI Architect',
      company: 'Cloud Blogger',
      experience: '10+ Years Experience',
      expertise: ['Azure', 'AWS', 'Google Cloud', 'DevOps', 'AI', 'Automation','Power BI'],
      image: gauravImg,
      bio: 'Expert in Azure, AWS, Google Cloud, DevOps, AI, and Automation. Passionate about empowering students with real-world cloud and automation skills to launch their tech careers.',
      linkedin: 'https://www.linkedin.com/company/cloud-blogger/',
      github: 'https://github.com/joincloudblogger',
      youtube: 'https://youtube.com/@joincloudblogger?si=aMuij9QQGyNGA-Qk'
    },
    {
      id: 2,
      name: 'Salman Shaik',
      role: 'Technical Community Manager',
      company: 'Cloud Blogger',
      experience: '5+ Year Experience',
      expertise: ['Cloud', 'DevOps', 'AI','Counseling'],
      image: salmanImg,
      bio: 'Salman is our Technical Manager and Career Counselor with expertise in Cloud, DevOps, and AI. He helps individuals build careers—from landing jobs to long-term success.',
      linkedin: 'https://www.linkedin.com/company/cloud-blogger/',
      github: 'https://github.com/joincloudblogger',
      youtube: 'https://youtube.com/@joincloudblogger?si=aMuij9QQGyNGA-Qk'
    },
    {
      id: 3,
      name: 'Sasmit Yadav',
      role: 'Developer Advocate',
      company: 'Cloud Blogger',
      experience: '1+ Year Experience',
      expertise: ['Azure AI Service', 'Node.js', 'Python','Power BI'],
      image: sasmitImg,
      bio: 'Developer Advocate skilled in Azure AI Service, Power BI, Node.js, and Python. Focused on helping students master modern programming and AI technologies for real-world applications.',
      linkedin: 'https://www.linkedin.com/company/cloud-blogger/',
      github: 'https://github.com/joincloudblogger',
      youtube: 'https://youtube.com/@joincloudblogger?si=aMuij9QQGyNGA-Qk'
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-grafanaGray scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
              Expert Trainers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our passionate team of DevOps professionals is dedicated to helping you succeed in your tech career journey.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-grafanaBg rounded-xl p-6 border border-gray-700 hover:border-grafanaBlue/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Trainer Header */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {typeof trainer.image === 'string' && trainer.image.startsWith('data') ? (
                    <img src={trainer.image} alt={trainer.name} className="w-16 h-16 rounded-full object-cover" />
                  ) : typeof trainer.image === 'string' && (trainer.image.endsWith('.jpg') || trainer.image.endsWith('.jpeg')) ? (
                    <img src={trainer.image} alt={trainer.name} className="w-16 h-16 rounded-full object-cover" />
                  ) : (
                    trainer.image
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-grafanaBlue transition-colors duration-300 text-center">
                  {trainer.name}
                </h3>
                <p className="text-gray-400 text-sm text-center">{trainer.role}</p>
                <p className="text-white text-sm font-medium text-center">{trainer.company}</p>
              </div>

              {/* Experience */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-grafanaBlue text-white">
                  {trainer.experience}
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {trainer.bio}
              </p>

              {/* Expertise */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Expertise</h4>
                <div className="flex gap-2 overflow-x-auto py-1 no-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                  {trainer.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300 hover:bg-grafanaBlue/20 hover:text-grafanaBlue transition-colors duration-300 whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                <a
                  href={trainer.linkedin}
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-grafanaBlue transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href={trainer.github}
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-grafanaGreen transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={trainer.youtube}
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                  title="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.993 2.993 0 0 0-2.107-2.117C19.24 3.5 12 3.5 12 3.5s-7.24 0-9.391.569A2.993 2.993 0 0 0 .502 6.186C0 8.338 0 12 0 12s0 3.662.502 5.814a2.993 2.993 0 0 0 2.107 2.117C4.76 20.5 12 20.5 12 20.5s7.24 0 9.391-.569a2.993 2.993 0 0 0 2.107-2.117C24 15.662 24 12 24 12s0-3.662-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-grafanaBg rounded-2xl p-8 border border-grafanaBlue/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Join our growing community and learn from passionate DevOps professionals who care about your success.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-grafana transition-all duration-300 transform hover:scale-105"
            >
              Start Learning Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection; 
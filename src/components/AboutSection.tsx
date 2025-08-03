import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-grafanaBg scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
                Cloud Blogger
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to bridge the gap between education and employment in the tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Mission & Story Card */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Cloud Blogger was founded in 2018 with a vision to empower aspiring tech professionals. Our goal is to provide practical, affordable, and career-focused education that leads directly to real opportunities in the tech industry.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We are committed to hands-on, project-based learning and dedicated support, ensuring every learner is job-ready and confident to take on the tech world.
              </p>

              {/* Story Card */}
              <div className="mb-8 flex justify-center">
                <div className="group bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 rounded-2xl p-6 border-2 border-transparent hover:border-grafanaOrange/60 shadow-lg flex items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer max-w-md w-full">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shadow-md">
                    {/* Rocket Icon */}
                    <svg className="w-8 h-8 text-grafanaOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12.5C5 7.805 8.805 4 13.5 4c.828 0 1.5.672 1.5 1.5S14.328 7 13.5 7c-2.485 0-4.5 2.015-4.5 4.5 0 .828-.672 1.5-1.5 1.5S5 13.328 5 12.5zM19 21l-7-7m0 0l-4 4m4-4v8" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white mb-1">Founded in 2018</div>
                    <div className="text-gray-200 text-sm font-medium">Empowering Tech Careers from Day One!</div>
                  </div>
                </div>
              </div>

              {/* Key Features - Card Style with Hover */}
              <div className="space-y-4">
                {[{
                  color: 'from-grafanaBlue to-grafanaGreen',
                  title: 'Industry-Driven Curriculum',
                  desc: 'Courses designed by industry experts and updated regularly to match current market demands.'
                }, {
                  color: 'from-grafanaGreen to-grafanaOrange',
                  title: 'Hands-on Learning',
                  desc: 'Learn by doing with real-world projects and live environments that mirror production systems.'
                }, {
                  color: 'from-grafanaOrange to-grafanaBlue',
                  title: 'Career-Focused Support',
                  desc: 'Comprehensive career services including resume prep, interview coaching, and direct placement assistance.'
                }].map((feature, i) => (
                  <div
                    key={feature.title}
                    className={
                      `group flex items-start space-x-4 bg-grafanaBg rounded-xl p-4 border-2 transition-all duration-500 relative overflow-hidden ` +
                      `border-gray-700 hover:border-grafanaGreen/40`
                    }
                  >
                    {/* Floating Accent Dot */}
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 group-hover:text-grafanaBlue transition-colors duration-300">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats & Values */}
            <div className="space-y-8">
              {/* Stats Cards with Hover & Animated Border */}
              <div className="grid grid-cols-2 gap-6">
                {[{
                  value: '7+',
                  label: 'Year Experience',
                  color: 'text-grafanaGreen'
                }, {
                  value: '3',
                  label: 'Expert Trainers',
                  color: 'text-grafanaBlue'
                }, {
                  value: '20+',
                  label: 'Live Projects',
                  color: 'text-grafanaOrange'
                }, {
                  value: '24/7',
                  label: 'Support',
                  color: 'text-grafanaGreen'
                }].map((stat, i) => (
                  <div key={stat.label} className="relative bg-grafanaBg rounded-xl p-6 border border-gray-700 text-center hover:border-grafanaBlue/50 transition-all duration-500 hover:scale-105 group overflow-hidden">
                    <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                    {/* Floating Accent Dots */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-grafanaGreen rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-500"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-grafanaBlue rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Values */}
              <div className="bg-grafanaBg rounded-xl p-8 border border-gray-700">
                <h4 className="text-2xl font-semibold text-white mb-6">Our Values</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-grafanaGreen rounded-full"></div>
                    <span className="text-gray-300">Quality Education</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-grafanaBlue rounded-full"></div>
                    <span className="text-gray-300">Student Success</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-grafanaOrange rounded-full"></div>
                    <span className="text-gray-300">Practical Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-grafanaGreen rounded-full"></div>
                    <span className="text-gray-300">Affordable Pricing</span>
                  </div>
                </div>
              </div>

              {/* CTA - More Prominent, Glowing */}
              <div className="bg-gradient-to-r from-grafanaBlue/30 to-blue-300/30 rounded-xl p-8 border border-grafanaBlue/30 shadow-lg flex flex-col items-center">
                <h4 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-grafanaGreen animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1V8h-1m-4 0h-1V4h-1" /></svg>
                  Ready to Start Your Journey?
                </h4>
                <p className="text-gray-300 text-base mb-4 text-center max-w-xs">
                  Join our growing community of learners and take the first step towards your DevOps career.
                </p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-grafana hover:shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400/40 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
import React from 'react';
// @ts-ignore
import linkedinLogo from '../assets/logo_addons/linkedin-logo.svg';
// @ts-ignore
import naukriLogo from '../assets/logo_addons/naukri-seeklogo.svg';
// @ts-ignore
import techInterviewLogo from '../assets/logo_addons/tech_interviewl_ogo.svg';
// @ts-ignore
import techSupportLogo from '../assets/logo_addons/tech-support-logo.svg';
// @ts-ignore
import resumeLogo from '../assets/logo_addons/resume-logo.svg';
// @ts-ignore
import oneToOneLogo from '../assets/logo_addons/one-to-one-logo.svg';

// SVG logo URLs (to be replaced by user-provided SVGs later)
const hrLogo = 'https://www.svgrepo.com/show/3870/managers.svg';
const placementLogo = 'https://www.svgrepo.com/show/45083/project-manager.svg';

const addons = [
  {
    id: 1,
    title: 'LinkedIn Optimization',
    description: 'Optimize your LinkedIn profile to attract top recruiters and opportunities.',
    logo: linkedinLogo,
    features: [
      'Profile optimization',
      'Keyword strategy',
      'Network building',
      'Content guidance',
    ],
  },
  {
    id: 2,
    title: 'Naukri Optimization',
    description: 'Boost your visibility and job matches on Naukri with a standout profile.',
    logo: naukriLogo,
    features: [
      'Profile optimization',
      'Recruiter targeting',
      'Resume upload tips',
      'Alert setup',
    ],
  },
  {
    id: 3,
    title: 'HR Interview Prep',
    description: 'Master HR interviews with mock sessions and expert feedback.',
    logo: hrLogo,
    features: [
      'Mock HR interviews',
      'Soft skills training',
      'Behavioral questions',
      'Feedback sessions',
    ],
  },
  {
    id: 4,
    title: 'Technical Interview Prep',
    description: 'Sharpen your technical skills and ace coding interviews.',
    logo: techInterviewLogo,
    features: [
      'Mock technical interviews',
      'Coding challenges',
      'System design practice',
      'Expert feedback',
    ],
  },
  {
    id: 5,
    title: '1-on-1 Review Meetings',
    description: 'Personalized feedback and guidance through one-on-one sessions with mentors.',
    logo: oneToOneLogo,
    features: [
      'Individual attention',
      'Goal setting',
      'Progress tracking',
      'Actionable feedback',
    ],
  },
  {
    id: 6,
    title: 'Tech Support',
    description: 'Get help with technical issues and doubts from our expert support team.',
    logo: techSupportLogo || '',
    features: [
      '24/7 support',
      'Doubt resolution',
      'Live troubleshooting',
      'Resource guidance',
    ],
  },
  {
    id: 7,
    title: 'Job Placement Assistance',
    description: 'Get direct placement assistance with our network of 500+ hiring companies.',
    logo: placementLogo,
    features: [
      'Direct referrals',
      'Interview scheduling',
      'Salary negotiation',
      'Onboarding support',
    ],
  },
  {
    id: 8,
    title: 'Resume Preparation',
    description: 'Craft a professional resume that stands out to recruiters and passes ATS filters.',
    logo: resumeLogo || '',
    features: [
      'ATS-friendly formatting',
      'Personalized resume review',
      'Keyword optimization',
      'Role-specific tailoring',
    ],
  },
];

const addonMeta: { [key: string]: { type: string; icon: React.ReactElement; badgeClass: string } } = {
  'LinkedIn Optimization': {
    type: 'Profile',
    icon: (
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0M12 14v7m-4-4h8" /></svg>
    ),
    badgeClass: 'bg-gradient-to-r from-grafanaBlue/20 to-grafanaBlue/30 text-grafanaBlue border border-grafanaBlue/30 group-hover:from-grafanaBlue/30 group-hover:to-grafanaBlue/40',
  },
  'Naukri Optimization': {
    type: 'Profile',
    icon: (
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0M12 14v7m-4-4h8" /></svg>
    ),
    badgeClass: 'bg-gradient-to-r from-grafanaBlue/20 to-grafanaBlue/30 text-grafanaBlue border border-grafanaBlue/30 group-hover:from-grafanaBlue/30 group-hover:to-grafanaBlue/40',
  },
  'HR Interview Prep': {
    type: 'Interview',
    icon: (
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
    ),
    badgeClass: 'bg-gradient-to-r from-grafanaOrange/20 to-grafanaOrange/30 text-grafanaOrange border border-grafanaOrange/30 group-hover:from-grafanaOrange/30 group-hover:to-grafanaOrange/40',
  },
  'Technical Interview Prep': {
    type: 'Interview',
    icon: (
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
    ),
    badgeClass: 'bg-gradient-to-r from-grafanaOrange/20 to-grafanaOrange/30 text-grafanaOrange border border-grafanaOrange/30 group-hover:from-grafanaOrange/30 group-hover:to-grafanaOrange/40',
  },
  '1-on-1 Review Meetings': {
    type: 'Mentoring',
    icon: (
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm6 8v-2a4 4 0 00-3-3.87M6 19v-2a4 4 0 013-3.87" /></svg>
    ),
    badgeClass: 'bg-gradient-to-r from-grafanaGreen/20 to-grafanaGreen/30 text-grafanaGreen border border-grafanaGreen/30 group-hover:from-grafanaGreen/30 group-hover:to-grafanaGreen/40',
  },
  'Tech Support': {
    type: 'Support',
    icon: (
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1116.95 7.05z" /></svg>
    ),
    badgeClass: 'bg-gradient-to-r from-grafanaBlue/20 to-grafanaBlue/30 text-grafanaBlue border border-grafanaBlue/30 group-hover:from-grafanaBlue/30 group-hover:to-grafanaBlue/40',
  },
  'Job Placement Assistance': {
    type: 'Placement',
    icon: (
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7" /></svg>
    ),
    badgeClass: 'bg-gradient-to-r from-grafanaGreen/20 to-grafanaGreen/30 text-grafanaGreen border border-grafanaGreen/30 group-hover:from-grafanaGreen/30 group-hover:to-grafanaGreen/40',
  },
  'Resume Preparation': {
    type: 'Resume',
    icon: (
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-6 8h6a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h2z" /></svg>
    ),
    badgeClass: 'bg-gradient-to-r from-grafanaOrange/20 to-grafanaOrange/30 text-grafanaOrange border border-grafanaOrange/30 group-hover:from-grafanaOrange/30 group-hover:to-grafanaOrange/40',
  },
};

const CareerAddonsSection: React.FC = () => {
  return (
    <section id="career-addons" className="py-20 bg-grafanaGray scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Career Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
              Add-ons
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond technical skills, we provide comprehensive career support to ensure your success in the job market.
          </p>
        </div>

        {/* Add-ons Grid: 4 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon) => (
            <div
              key={addon.id}
              className="relative bg-grafanaBg rounded-xl p-6 border border-gray-700 hover:border-grafanaBlue/50 transition-all duration-500 hover:transform hover:scale-105 group overflow-hidden flex flex-col h-full"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-grafanaBlue/10 via-grafanaGreen/10 to-grafanaOrange/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-grafanaBlue/30 via-grafanaGreen/30 to-grafanaOrange/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Addon Logo */}
              <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
                ${['Naukri Optimization', 'LinkedIn Optimization', 'Tech Support', 'Resume Preparation', 'Technical Interview Prep'].includes(addon.title) ? 'bg-white shadow-md' : 'bg-gradient-to-br from-grafanaBlue/10 to-grafanaGreen/10'}`}
              >
                {addon.title === 'LinkedIn Optimization' ? (
                  <img src={addon.logo} alt="LinkedIn logo" className="w-12 h-12" />
                ) : addon.title === 'Naukri Optimization' ? (
                  <img src={addon.logo} alt="Naukri logo" className="w-12 h-12" />
                ) : (
                  <img src={addon.logo} alt={`${addon.title} logo`} className="w-10 h-10 filter invert" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                )}
              </div>

              {/* Addon Info */}
              <div className="relative flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-grafanaBlue transition-all duration-300 group-hover:scale-105">
                  {addon.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
                  {addon.description}
                </p>

                {/* Addon Meta Row */}
                <div className="flex justify-end mt-auto">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${addonMeta[addon.title].badgeClass}`}>
                    {addonMeta[addon.title].type}
                  </span>
                </div>
              </div>

              {/* Floating Elements on Hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <div className="w-2 h-2 bg-grafanaGreen rounded-full animate-pulse"></div>
              </div>
              <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <div className="w-1 h-1 bg-grafanaBlue rounded-full animate-pulse"></div>
              </div>

              {/* Hover Content Overlay (features) */}
              <div className="absolute inset-0 bg-gradient-to-br from-grafanaGray/95 to-grafanaBg/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-xl border border-grafanaBlue/30">
                <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 max-w-full">
                  <h4 className="font-semibold mb-4 text-grafanaBlue text-lg">What You'll Get</h4>
                  <div className="grid grid-cols-1 gap-2 text-xs max-h-40 overflow-y-auto px-2">
                    {addon.features.map((feature, index) => (
                      <div key={index} className="flex items-start text-gray-300 hover:text-grafanaGreen transition-colors duration-200 group/item">
                        <div className="w-2 h-2 bg-grafanaGreen rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-grafanaBlue transition-colors duration-200"></div>
                        <span className="text-left leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerAddonsSection; 
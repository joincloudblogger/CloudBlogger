import React from 'react';
import logo from '../assets/logo.svg';
import azureLogo from '../assets/logos/azure-logo.svg';
import kubernetesLogo from '../assets/logos/kubernetes-logo.svg';
import dockerLogo from '../assets/logos/docker-logo.svg';
import gitlabLogo from '../assets/logos/gitlab-logo.svg';
import grafanaLogo from '../assets/logos/grafana-logo.svg';
import prometheusLogo from '../assets/logos/prometheus-logo.svg';
import terraformLogo from '../assets/logos/terraform-logo.svg';
import devopsLogo from '../assets/logos/devops-logo.svg';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-20 scroll-mt-24">
      {/* Background floating DevOps logos (spread in empty space, not at corners or behind content) */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {/* Azure - left-middle, shifted 5px above */}
        <img src={azureLogo} alt="Azure" className="absolute top-[140px] left-56 w-16 opacity-70 animate-float" />
        {/* Kubernetes - upper right side, moved a bit below and left */}
        <img src={kubernetesLogo} alt="Kubernetes" className="absolute top-32 right-28 w-16 opacity-70 animate-float-slow" />
        {/* Docker - left middle, not touching edge (was lower left side) */}
        <img src={dockerLogo} alt="Docker" className="absolute top-1/2 left-16 w-16 opacity-70 -translate-y-1/2 animate-float-delay" />
        {/* GitLab - lower right side */}
        <img src={gitlabLogo} alt="GitLab" className="absolute bottom-20 right-24 w-16 opacity-70 animate-float" />
        {/* Grafana - lower left side, moved a bit above and right (was left middle) */}
        <img src={grafanaLogo} alt="Grafana" className="absolute bottom-32 left-20 w-16 opacity-70 animate-float-slow" />
        {/* Prometheus - right middle, moved a bit below */}
        <img src={prometheusLogo} alt="Prometheus" className="absolute top-[60%] right-16 w-16 opacity-70 -translate-y-1/2 animate-float-delay" />
        {/* Terraform - to the right of the main heading, moved a bit above and right */}
        <img src={terraformLogo} alt="Terraform" className="absolute top-[38%] left-[73%] w-16 opacity-70 animate-float" />
        {/* DevOps - to the left of the main heading, in empty space */}
        <img src={devopsLogo} alt="DevOps" className="absolute top-[38%] left-[18%] w-32 opacity-70 animate-float-slow" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10 max-w-full">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-900 rounded-2xl p-4 flex items-center justify-center shadow-2xl border border-grafanaBlue/30 hover:scale-110 transition-all duration-300">
              <img src={logo} alt="Cloud Blogger Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-grafanaBlue/20 border border-grafanaBlue/30 rounded-full text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-grafanaBlue rounded-full mr-2 animate-pulse"></span>
            Master DevOps & Cloud Technologies
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Master DevOps
            </span>
            <br />
            <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
            Without Coding!
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join our 4-month DevOps Program — from Zero to Expert, no coding required! Learn through 100% live real world projects. Gain industry-ready skills at just ₹19,999 and launch your tech career with ease.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              className="bg-gradient-to-r from-[#0064d2] to-[#1cb0f6] text-white px-8 py-4 rounded-full text-lg font-bold border border-[#1cb0f6] shadow-lg transition-all duration-300 transform hover:from-[#1cb0f6] hover:to-[#63d0ff] hover:border-[#fa71cd] hover:ring-2 hover:ring-[#1cb0f6]/40 hover:shadow-xl active:scale-95"
              onClick={() => navigate('/enroll-now')}
            >
              Enroll Now
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('courses');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-grafanaBlue hover:text-white transition-all duration-300"
            >
              View Courses
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-grafanaGreen mb-2">1000+</div>
              <div className="text-gray-400">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-grafanaBlue mb-2">8</div>
              <div className="text-gray-400">Core Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-grafanaOrange mb-2">90%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 
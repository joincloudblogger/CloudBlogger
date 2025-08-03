import React from 'react';

// Import real platform logos
import rhelLogo from '../assets/logos/rhel-logo.svg';
import dockerLogo from '../assets/logos/docker-logo.svg';
import azureLogo from '../assets/logos/azure-logo.svg';
import gitlabLogo from '../assets/logos/gitlab-logo.svg';
import prometheusLogo from '../assets/logos/prometheus-logo.svg';
import grafanaLogo from '../assets/logos/grafana-logo.svg';
import terraformLogo from '../assets/logos/terraform-logo.svg';
import kubernetesLogo from '../assets/logos/kubernetes-logo.svg';

const CoursesSection: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: 'RHEL',
      description: 'Red Hat Enterprise Linux administration and management',
      logo: rhelLogo,
      duration: '4 weeks',
      level: 'Intermediate',
      topics: ['System Administration', 'User Management', 'Package Management', 'Network Configuration', 'Security & SELinux', 'Systemd Services', 'Storage Management', 'Troubleshooting']
    },
    {
      id: 2,
      name: 'Docker',
      description: 'Containerization and container orchestration',
      logo: dockerLogo,
      duration: '3 weeks',
      level: 'Advanced',
      topics: ['Container Basics', 'Docker Images', 'Docker Compose', 'Container Networking', 'Volume Management', 'Dockerfile Best Practices', 'Container Security', 'Registry Management']
    },
    {
      id: 3,
      name: 'Azure Kubernetes Service',
      description: 'Microsoft Azure cloud and Kubernetes orchestration',
      logos: [azureLogo, kubernetesLogo],
      duration: '6 weeks',
      level: 'Advanced',
      topics: ['Azure Fundamentals', 'AKS Clusters', 'Pod Management', 'Services & Networking', 'Storage & Volumes', 'ConfigMaps & Secrets', 'Deployments & Scaling', 'Monitoring & Logging']
    },
    {
      id: 4,
      name: 'GitLab CI/CD',
      description: 'Continuous Integration and Continuous Deployment',
      logo: gitlabLogo,
      duration: '2 weeks',
      level: 'Advanced',
      topics: ['CI/CD Pipeline Basics', 'GitLab Runners', 'Pipeline Stages', 'Environment Management', 'Security Scanning', 'Deployment Strategies', 'Pipeline Optimization', 'Troubleshooting']
    },
    {
      id: 5,
      name: 'Prometheus',
      description: 'Monitoring and alerting toolkit',
      logo: prometheusLogo,
      duration: '1 week',
      level: 'Advanced',
      topics: ['Metrics Collection', 'PromQL Queries', 'Alerting Rules', 'Service Discovery', 'Target Management', 'Data Retention', 'High Availability', 'Integration Setup']
    },
    {
      id: 6,
      name: 'Grafana',
      description: 'Data visualization and analytics platform',
      logo: grafanaLogo,
      duration: '1 week',
      level: 'Advanced',
      topics: ['Dashboard Creation', 'Data Sources', 'Query Building', 'Visualization Types', 'Alerting & Notifications', 'User Management', 'Plugin Development', 'Performance Optimization']
    },
    {
      id: 7,
      name: 'Terraform',
      description: 'Infrastructure as Code automation',
      logo: terraformLogo,
      duration: '7 weeks',
      level: 'Advanced',
      topics: ['IaC Fundamentals', 'Resource Management', 'State Management', 'Modules & Reusability', 'Variables & Outputs', 'Provisioners', 'Workspaces', 'Best Practices']
    },
    {
      id: 8,
      name: 'AZ-104',
      description: 'Microsoft Azure Administrator certification',
      logo: azureLogo,
      duration: '5 weeks',
      level: 'Advanced',
      topics: ['Azure Identity', 'Governance & Compliance', 'Azure Administration', 'Virtual Networking', 'Intersite Connectivity', 'Data Protection', 'Azure Monitor', 'Certification Prep']
    }
  ];

  return (
    <section id="courses" className="py-20 bg-grafanaBg scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Learn DevOps Tools
            </span>
            <br />
            <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
            In One Course
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
  4 Months Course, Get DevOps Job-Ready!
</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative bg-grafanaBg rounded-xl p-6 border border-gray-700 hover:border-grafanaBlue/50 transition-all duration-500 hover:transform hover:scale-105 group overflow-hidden flex flex-col h-full"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-grafanaBlue/10 via-grafanaGreen/10 to-grafanaOrange/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-grafanaBlue/30 via-grafanaGreen/30 to-grafanaOrange/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Course Logo */}
              <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-grafanaBlue/10 to-grafanaGreen/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {course.logos ? (
                  <div className="flex items-center space-x-1">
                    {course.logos.map((logo, index) => (
                      <img key={index} src={logo} alt={`${course.name} logo ${index + 1}`} className="w-6 h-6 group-hover:drop-shadow-lg transition-all duration-300" />
                    ))}
                  </div>
                ) : (
                  <img src={course.logo} alt={`${course.name} logo`} className="w-10 h-10 group-hover:drop-shadow-lg transition-all duration-300" />
                )}
              </div>

              {/* Course Info */}
              <div className="relative flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-grafanaBlue transition-all duration-300 group-hover:scale-105">
                  {course.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
                  {course.description}
                </p>

                {/* Course Meta */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    course.level === 'Beginner' 
                      ? 'bg-gradient-to-r from-grafanaGreen/20 to-grafanaGreen/30 text-grafanaGreen border border-grafanaGreen/30 group-hover:from-grafanaGreen/30 group-hover:to-grafanaGreen/40' 
                      : course.level === 'Intermediate'
                      ? 'bg-gradient-to-r from-grafanaBlue/20 to-grafanaBlue/30 text-grafanaBlue border border-grafanaBlue/30 group-hover:from-grafanaBlue/30 group-hover:to-grafanaBlue/40'
                      : 'bg-gradient-to-r from-grafanaOrange/20 to-grafanaOrange/30 text-grafanaOrange border border-grafanaOrange/30 group-hover:from-grafanaOrange/30 group-hover:to-grafanaOrange/40'
                  }`}>
                    {course.level}
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

              {/* Hover Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-grafanaGray/95 to-grafanaBg/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-xl border border-grafanaBlue/30">
                <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 max-w-full">
                  <h4 className="font-semibold mb-4 text-grafanaBlue text-lg">What You'll Learn</h4>
                  <div className="grid grid-cols-1 gap-2 text-xs max-h-40 overflow-y-auto px-2">
                    {course.topics.map((topic, index) => (
                      <div key={index} className="flex items-start text-gray-300 hover:text-grafanaGreen transition-colors duration-200 group/item">
                        <div className="w-2 h-2 bg-grafanaGreen rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:bg-grafanaBlue transition-colors duration-200"></div>
                        <span className="text-left leading-tight">{topic}</span>
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

export default CoursesSection; 
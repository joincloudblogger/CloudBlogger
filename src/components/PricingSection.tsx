import React, { useState } from 'react';

// Placeholder for the modal component (to be created)
import DownloadBrochureModal from './DownloadBrochureModal';

const PricingSection: React.FC = () => {
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [brochureLoading, setBrochureLoading] = useState(false);
  const [brochureError, setBrochureError] = useState('');

  const handleBrochureSubmit = async ({ name, mobile }: { name: string; mobile: string }) => {
    setBrochureLoading(true);
    setBrochureError('');
    const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/brochure-request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, mobile }),
    });
    
    if (res.ok) {
      setShowBrochureModal(false);
      // Trigger download
      const link = document.createElement('a');
      link.href = `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/download-brochure`;
      link.download = 'CloudBlogger-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setBrochureError('Failed to notify admin. Please try again.');
    }
    setBrochureLoading(false);
  };

  return (
    <section id="pricing" className="py-20 bg-grafanaGray scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Unbeatable
            </span>
            <br />
            <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
  <span className="font-bold">Big Dreams, Small Price.</span><br />
  Get world-class DevOps training (8 full-stack tools) in just ₹19,999.<br />
   Save ₹80,001 & become job-ready without burning your pocket.
</p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-grafanaBg rounded-2xl p-8 md:p-12 border border-grafanaOrange/30 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-grafanaBlue/10 to-blue-200/10"></div>
            
            {/* Discount badge */}
            <div className="hidden md:block absolute top-6 right-6 bg-gradient-to-r from-grafanaBlue to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
              80% OFF
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">Complete DevOps Program</h3>
                <p className="text-gray-300 text-lg">Everything you need to launch your DevOps career</p>
              </div>

              {/* Price Display */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-6xl md:text-7xl font-bold text-white">₹19,999</span>
                  <span className="text-2xl text-gray-400 ml-2">For the Powerful Course</span>
                </div>
                <div className="flex items-center justify-center text-gray-400">
                  <span className="text-xl line-through mr-4">₹100,000</span>
                  <span className="text-grafanaBlue font-semibold">Save ₹80,001</span>
                </div>
              </div>

              {/* EMI Options */}
              <div className="bg-grafanaGray rounded-xl p-6 mb-8">
                <h4 className="text-xl font-semibold text-white mb-4 text-center">Flexible Payment Options</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-grafanaBg rounded-lg">
                    <div className="text-2xl font-bold text-grafanaGreen">₹6,667</div>
                    <div className="text-gray-400 text-sm">3 months EMI</div>
                  </div>
                  <div className="text-center p-4 bg-grafanaBg rounded-lg">
                    <div className="text-2xl font-bold text-grafanaBlue">₹3,333</div>
                    <div className="text-gray-400 text-sm">6 months EMI</div>
                  </div>
                  <div className="text-center p-4 bg-grafanaBg rounded-lg">
                    <div className="text-2xl font-bold text-grafanaOrange">₹1,667</div>
                    <div className="text-gray-400 text-sm">12 months EMI</div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4 text-center">What's Included</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center md:justify-items-center">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      8 In-Demand DevOps Tools
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Career Power Pack Add-ons
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      100% Job Interview Crack Assistance
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Lifetime Learning Access
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Real-world Projects
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      1-on-1 Mentorship
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Verified Certification Assistance
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-grafanaBlue mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 Learner Support
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex justify-center">
                <button
                  className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-grafanaOrange hover:text-white transition-all duration-300"
                  onClick={() => setShowBrochureModal(true)}
                >
                  Download Brochure
                </button>
              </div>

              {/* Download Brochure Modal */}
              {showBrochureModal && (
                <DownloadBrochureModal
                  onClose={() => setShowBrochureModal(false)}
                  onSubmit={handleBrochureSubmit}
                  loading={brochureLoading}
                  error={brochureError}
                />
              )}

              {/* Guarantee */}
              <div className="text-center mt-6">
                <p className="text-gray-400 text-sm">
                  <span className="text-grafanaGreen font-semibold">Safe Transaction Guarantee</span> • Get started today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 
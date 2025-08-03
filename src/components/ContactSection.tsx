import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [consultationForm, setConsultationForm] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    phone_number: '',
    preferred_course: ''
  });
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [consultationLoading, setConsultationLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handleConsultationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Special handling for phone number to prevent more than 10 digits
    if (name === 'phone_number') {
      // Only allow digits and limit to 10 characters
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setConsultationForm({ ...consultationForm, [name]: numericValue });
      setPhoneError('');
    } else {
      setConsultationForm({ ...consultationForm, [name]: value });
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    if (!/^[\d]{10}$/.test(consultationForm.phone_number.trim())) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    
    setConsultationLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/consultation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(consultationForm),
    });
    
    if (response.ok) {
      setConsultationSubmitted(true);
      setConsultationForm({
        first_name: '',
        last_name: '',
        user_email: '',
        phone_number: '',
        preferred_course: ''
      });
    }
    setConsultationLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-grafanaBg scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get in
              </span>
              <br />
              <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your tech career journey? Contact us for a free consultation and personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="bg-grafanaGray rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-grafanaGreen to-grafanaOrange flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+91 90123 45374</p>
                      <p className="text-gray-400 text-sm">Mon-Sat: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-grafanaGreen to-grafanaOrange flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">connect@cloudblogger.in</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-grafanaOrange to-grafanaBlue flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Website</h4>
                      <p className="text-gray-300">www.cloudblogger.in</p>
                      <p className="text-gray-400 text-sm">Online learning platform</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mode & Timings */}
              <div className="bg-grafanaGray rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-6">Mode & Timings</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Learning Mode</h4>
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-2 bg-grafanaGreen/20 text-grafanaGreen rounded-full text-sm font-medium">
                        Online Mode
                      </span>
                      <span className="px-4 py-2 bg-grafanaBlue/20 text-grafanaBlue rounded-full text-sm font-medium">
                        Live Sessions
                      </span>
                      <span className="px-4 py-2 bg-grafanaOrange/20 text-grafanaOrange rounded-full text-sm font-medium">
                        Recorded Sessions
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Class Timings</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-gray-300">
                        <span>Weekdays Morning (Mon-Fri)</span>
                        <span>7:00 AM - 10:00 AM</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Weekdays Evening (Mon-Fri)</span>
                        <span>7:00 PM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Weekends (Sat-Sun)</span>
                        <span>6:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Flexible Sessions</span>
                        <span>Available</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Support Hours</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-gray-300">
                        <span>Technical Support</span>
                        <span>24/7</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Career Counseling (Mon-Sun)</span>
                        <span>8:00 AM - 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-grafanaGray rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Book Free Consultation</h3>

              {consultationSubmitted ? (
                <div className="text-center text-lg text-grafanaBlue font-semibold py-8">
                  Thank you for your consultation request! We will connect with you within 24 hours.<br />
                  <span className="block text-base text-gray-300 font-normal mt-4">Please check your email for a confirmation message.</span>
                </div>
              ) : consultationLoading ? (
                <div className="flex justify-center items-center py-12">
                  <span className="inline-block w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleConsultationSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                      <input
                        name="first_name"
                        type="text"
                        value={consultationForm.first_name}
                        onChange={handleConsultationChange}
                        className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:outline-none transition-colors duration-300"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                      <input
                        name="last_name"
                        type="text"
                        value={consultationForm.last_name}
                        onChange={handleConsultationChange}
                        className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:outline-none transition-colors duration-300"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                    <input
                      name="phone_number"
                      type="tel"
                      value={consultationForm.phone_number}
                      onChange={handleConsultationChange}
                      onKeyPress={(e) => {
                        // Only allow numeric keys, backspace, delete, tab, escape, enter
                        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'Tab', 'Escape', 'Enter'];
                        if (!allowedKeys.includes(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      className={`w-full bg-grafanaBg border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:outline-none transition-colors duration-300 ${phoneError ? 'border-red-500' : 'border-gray-600'}`}
                      placeholder="Enter your phone number (10 digits)"
                      required
                      maxLength={10}
                      pattern="\d{10}"
                      inputMode="numeric"
                    />
                    {phoneError && <div className="text-red-500 text-sm mt-1">{phoneError}</div>}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      name="user_email"
                      type="email"
                      value={consultationForm.user_email}
                      onChange={handleConsultationChange}
                      className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Preferred Course</label>
                    <select 
                      name="preferred_course"
                      value={consultationForm.preferred_course}
                      onChange={handleConsultationChange}
                      className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-grafanaBlue focus:outline-none transition-colors duration-300"
                      required
                    >
                      <option value="">Select a course</option>
                      <option value="Complete Program">DevOps Powerful Course</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 text-white py-4 rounded-full text-lg font-semibold hover:shadow-grafana transition-all duration-300 transform hover:scale-105"
                    disabled={consultationLoading}
                  >
                    Book Free Consultation
                  </button>
                </form>
              )}

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  We'll get back to you within 24 hours
                </p>
              </div>

              {/* Quick Contact */}
              <div className="mt-16 text-center">
                <div className="bg-grafanaGray rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4">Need Immediate Assistance?</h3>
                  <p className="text-gray-300 mb-6">
                    Call us directly or send us a WhatsApp message for instant support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="tel:+919012345374" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Now</span>
                    </a>
                    
                    <a href="https://wa.me/917669688362" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-gray-400 text-sm">
                © 2025 Cloud Blogger. All rights reserved.
              </div>
              <div className="mt-4 flex justify-center gap-6 items-center">
                <a href="https://www.linkedin.com/company/cloud-blogger/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="w-6 h-6 text-blue-500 hover:text-blue-700 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
                </a>
                <a href="https://github.com/joincloudblogger" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg className="w-6 h-6 text-gray-300 hover:text-white transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.384 0-6.63-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://youtube.com/@joincloudblogger?si=aMuij9QQGyNGA-Qk" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg className="w-7 h-7 text-red-500 hover:text-red-700 transition" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.24 3.5 12 3.5 12 3.5s-7.24 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.338 0 12 0 12s0 3.662.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.76 20.5 12 20.5 12 20.5s7.24 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.662 24 12 24 12s0-3.662-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 
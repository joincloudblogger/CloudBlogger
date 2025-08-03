import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookDemoForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    preferred_date: null as Date | null,
  });
  const [loading, setLoading] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCardVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Special handling for phone number to prevent more than 10 digits
    if (name === 'user_phone') {
      // Only allow digits and limit to 10 characters
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setForm({ ...form, [name]: numericValue });
      setPhoneError('');
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleDateChange = (date: Date | null) => {
    setForm({ ...form, preferred_date: date });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    if (!/^[\d]{10}$/.test(form.user_phone.trim())) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/send-demo-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        preferred_date: form.preferred_date ? form.preferred_date.toISOString().split('T')[0] : '',
      }),
    });
    
    if (response.ok) {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-grafanaBg py-16 px-4 relative overflow-hidden">
      {/* Faint background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{background: 'radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 60%), radial-gradient(circle at 80% 80%, #38bdf8 0%, transparent 60%)'}} />
      <button
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 bg-grafanaGray border border-grafanaBlue/30 rounded-lg text-grafanaBlue font-semibold hover:bg-grafanaBlue/10 transition-colors duration-200 z-10"
        style={{ alignSelf: 'center' }}
      >
        ← Back to Home
      </button>
      <div className={`bg-grafanaGray rounded-2xl p-8 max-w-md w-full shadow-2xl border border-grafanaBlue/30 relative z-10 transition-all duration-700 ${cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-grafana focus-within:shadow-grafana hover:border-blue-400/60 focus-within:border-blue-400/60`}>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">Book a Free Demo</h1>
        {/* Gradient divider */}
        <div className="h-1 w-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 opacity-70" />
        <p className="text-gray-300 text-center mb-8">Experience our teaching style and get your questions answered—no commitment required!</p>
        {submitted ? (
          <div className="text-center text-lg text-grafanaBlue font-semibold py-8">
            Thank you! We will connect with you within 24 hours.<br />
            <span className="block text-base text-gray-300 font-normal mt-4">Please check your email for a confirmation message.</span>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center py-12">
            <span className="inline-block w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="user_name" type="text" placeholder="Your Name" value={form.user_name} onChange={handleChange} className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300" required />
            <input name="user_email" type="email" placeholder="Your Email" value={form.user_email} onChange={handleChange} className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300" required />
            <div>
              <input 
                name="user_phone" 
                type="tel" 
                placeholder="Your Phone (10 digits)" 
                value={form.user_phone} 
                onChange={handleChange} 
                onKeyPress={(e) => {
                  // Only allow numeric keys, backspace, delete, tab, escape, enter
                  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'Tab', 'Escape', 'Enter'];
                  if (!allowedKeys.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                className={`w-full bg-grafanaBg border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300 ${phoneError ? 'border-red-500' : 'border-gray-600'}`}
                required 
                maxLength={10}
                pattern="\d{10}"
                inputMode="numeric"
              />
              {phoneError && <div className="text-red-500 text-sm mt-1">{phoneError}</div>}
            </div>
            <div className="relative">
              <DatePicker
                selected={form.preferred_date}
                onChange={handleDateChange}
                minDate={new Date()}
                className="w-full bg-grafanaBg border border-gray-600 rounded-lg px-4 py-3 pl-10 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300"
                placeholderText="Preferred Date"
                required
                calendarClassName="bg-grafanaGray text-white"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400">
                  <rect x="3" y="7" width="18" height="14" rx="2" strokeWidth="2"/>
                  <path d="M16 3v4M8 3v4" strokeWidth="2"/>
                </svg>
              </span>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 text-white py-3 rounded-full text-lg font-semibold hover:shadow-grafana transition-all duration-300 transform hover:scale-105 active:scale-95 active:shadow-lg mt-2">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookDemoForm; 
import React, { useState } from 'react';

interface DownloadBrochureModalProps {
  onClose: () => void;
  onSubmit?: (data: { name: string; mobile: string }) => void;
  loading?: boolean;
  error?: string;
}

const DownloadBrochureModal: React.FC<DownloadBrochureModalProps> = ({ onClose, onSubmit, loading = false, error }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) {
      // Optionally, show an alert or handle error UI here
      return;
    }
    if (!/^[\d]{10}$/.test(mobile.trim())) {
      // Optionally, show an alert or handle error UI here
      return;
    }
    onSubmit && onSubmit({ name: name.trim(), mobile: mobile.trim() });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-grafanaBg rounded-2xl p-8 max-w-sm w-full shadow-2xl border border-grafanaBlue/30 relative animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
          disabled={loading}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Download Brochure</h2>
        <p className="text-gray-300 text-center mb-6">Enter your details to get the brochure</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full bg-grafanaGray border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300"
            required
            disabled={loading}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            className="w-full bg-grafanaGray border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-grafanaBlue focus:shadow-lg focus:shadow-blue-500/10 focus:outline-none transition-all duration-300"
            required
            maxLength={10}
            pattern="\d{10}"
            disabled={loading}
          />
          {(error || !!error) && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 text-white py-3 rounded-full text-lg font-semibold hover:shadow-grafana transition-all duration-300 transform hover:scale-105 active:scale-95 active:shadow-lg mt-2 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : null}
            {loading ? 'Processing...' : 'Get Brochure'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DownloadBrochureModal; 
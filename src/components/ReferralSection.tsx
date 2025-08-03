import React from 'react';

const ReferralSection: React.FC = () => {
  return (
    <section id="referral" className="py-20 bg-grafanaGray scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Refer & Earn
              </span>
              <br />
              <span className="bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 bg-clip-text text-transparent">
                Amazing Rewards
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Help your friends and colleagues launch their tech careers while earning exciting rewards for yourself.
            </p>
          </div>

          {/* Main Referral Card */}
          <div className="bg-grafanaGray rounded-2xl p-8 md:p-12 border-2 border-grafanaBlue/30 shadow-xl relative overflow-hidden transition-all duration-300 hover:scale-105 hover:border-grafanaGreen/60 hover:shadow-2xl group">
            {/* Reward badge */}
            <div className="absolute top-6 right-6 bg-gradient-to-r from-grafanaBlue via-blue-400 to-blue-300 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              Save ₹27,000
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex flex-col items-center justify-center mb-2">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-grafanaGreen/30 to-grafanaBlue/30 mb-2 shadow-lg">
                    {/* Gift Icon */}
                    <svg className="w-8 h-8 text-grafanaOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16 0V7a2 2 0 00-2-2h-3.28a2 2 0 00-1.92 1.36L12 7.5l-.8-1.14A2 2 0 009.28 5H6a2 2 0 00-2 2v5m16 0H4" />
                    </svg>
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-1">Referral Program</h3>
                </div>
                <p className="text-gray-300 text-lg">Share the opportunity, earn rewards</p>
                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-grafanaGreen to-grafanaBlue rounded-full mx-auto mt-4 mb-2" />
              </div>

              {/* How it works */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    step: 1,
                    color: 'from-grafanaBlue via-blue-400 to-blue-300',
                    title: 'Share Your Link',
                    desc: 'Share your unique referral link with friends and colleagues'
                  },
                  {
                    step: 2,
                    color: 'from-grafanaBlue via-blue-400 to-blue-300',
                    title: 'They Enroll',
                    desc: 'When they enroll using your link, both of you get rewards'
                  },
                  {
                    step: 3,
                    color: 'from-grafanaBlue via-blue-400 to-blue-300',
                    title: 'Earn Rewards',
                    desc: 'Get free courses worth ₹27,000 for successful referrals'
                  }
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 shadow-md`}>
                      {item.step}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Rewards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {[{
                  icon: (
                    <svg className="w-6 h-6 mr-3 text-grafanaBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ),
                  title: 'For You (Referrer)',
                  content: [
                    <><span className="font-semibold text-white">1 Student Referred:</span><br /><span className="text-grafanaBlue font-semibold">Microsoft Azure Free Course</span><br /><span className="text-sm text-gray-400">(₹7,000 value)</span></>,
                    <><span className="font-semibold text-white">2 Students Referred:</span><br /><span className="text-grafanaOrange font-semibold">Microsoft Azure Security Course Free</span><br /><span className="text-sm text-gray-400">(₹20,000 value)</span></>,
                    <><span className="font-semibold text-white">Total Savings:</span><br /><span className="text-2xl font-bold text-grafanaBlue">₹27,000</span></>
                  ]
                }, {
                  icon: (
                    <svg className="w-6 h-6 mr-3 text-grafanaBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  title: 'For Your Friend (Referred)',
                  content: [
                    <span className="font-semibold">₹2,000 discount on enrollment</span>,
                    <span className="font-semibold">Free career counseling session</span>,
                    <span className="font-semibold">Extended trial period</span>
                  ]
                }].map((card, idx) => (
                  <div key={card.title} className="bg-grafanaBg rounded-xl p-8 border border-gray-700 transition-all duration-300 hover:border-grafanaGreen/50 hover:shadow-lg group">
                    <h4 className="text-xl font-semibold text-white mb-6 flex items-center">{card.icon}{card.title}</h4>
                    <ul className="space-y-4">
                      {card.content.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <svg className="w-5 h-5 text-grafanaGreen mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div>{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎁', title: 'No Limit', desc: 'Refer as many friends as you want' },
              { icon: '⚡', title: 'Instant Rewards', desc: 'Get rewards as soon as they enroll' },
              { icon: '🏆', title: 'Bonus Rewards', desc: 'Extra rewards for top referrers' }
            ].map((card) => (
              <div key={card.title} className="bg-grafanaGray rounded-xl p-8 border border-gray-700 text-center transition-all duration-300 hover:border-grafanaGreen/50 hover:shadow-lg group">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h4 className="text-white font-semibold mb-3 text-lg">{card.title}</h4>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection; 
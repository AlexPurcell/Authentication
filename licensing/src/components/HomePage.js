import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
        </svg>
      ),
      title: 'License Management',
      description: 'Generate, track, and manage software licenses with ease. Full control over your licensing system.',
      gradient: 'from-glossy-red to-deep-red'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
        </svg>
      ),
      title: 'MongoDB Integration',
      description: 'Seamlessly connect to your MongoDB database to store and retrieve license data in real-time.',
      gradient: 'from-green-500 to-green-700'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      title: 'Advanced Analytics',
      description: 'Track revenue, monitor license usage, and gain insights with comprehensive analytics.',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with encrypted license keys and secure authentication.',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Licenses' },
    { number: '99.9%', label: 'Uptime' },
    { number: '500+', label: 'Developers' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-black-pearl overflow-hidden">
      
      <div className="fixed inset-0 bg-subtle-gradient pointer-events-none"></div>
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-glossy-red/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-deep-red/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <header className="relative z-50 pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            
            <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/20 via-deep-red/10 to-glossy-red/20 blur-3xl opacity-40"></div>
            
            <div className="relative bg-gradient-to-r from-charcoal/40 via-charcoal/60 to-charcoal/40 backdrop-blur-xl rounded-2xl border border-glossy-red/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glossy-red/5 to-transparent rounded-2xl"></div>
              
              <div className="relative px-8 py-5">
                <div className="flex justify-between items-center">

                  <div className="flex items-center space-x-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-glossy-red to-deep-red rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-glossy-red to-deep-red p-3 rounded-xl shadow-glossy">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-xl font-bold bg-gradient-to-r from-white via-glossy-red to-white bg-clip-text text-transparent">
                        LicenseHub
                      </h1>
                      <p className="text-xs text-gray-400">Developer License Management</p>
                    </div>
                  </div>

                  <nav className="hidden md:flex items-center space-x-1">
                    <button
                      onClick={() => navigate('/features')}
                      className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all duration-200"
                    >
                      Features
                    </button>
                    <button
                      onClick={() => navigate('/pricing')}
                      className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all duration-200"
                    >
                      Pricing
                    </button>
                    <button
                      onClick={() => navigate('/docs')}
                      className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all duration-200"
                    >
                      Docs
                    </button>
                    <button
                      onClick={() => navigate('/about')}
                      className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all duration-200"
                    >
                      About
                    </button>
                  </nav>

                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-5 py-2.5 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-xl font-medium hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30"
                  >
                    <div className="flex items-center space-x-2">
                      <span>Go to Dashboard</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={`relative z-10 pt-20 pb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-glossy-red to-deep-red blur-3xl opacity-40"></div>
              <h1 className="relative text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white via-glossy-red to-white bg-clip-text text-transparent">
                  License Management
                </span>
                <br />
                <span className="text-white">Made Simple</span>
              </h1>
            </div>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              The ultimate developer portal for managing software licenses. Track, analyze, and control 
              your licensing system with our powerful MongoDB-integrated dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="group px-8 py-4 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-xl font-semibold text-lg hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Launch Dashboard</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </button>
              <button 
                onClick={() => navigate('/docs')}
                className="px-8 py-4 bg-charcoal/50 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-glossy-red/20 hover:bg-charcoal/70 transition-all duration-300"
              >
                View Documentation
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-glossy-red to-light-red bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage your software licenses efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-500 ${
                  activeFeature === index ? 'scale-105' : 'scale-100'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <div className="relative bg-charcoal/50 backdrop-blur-sm rounded-2xl border border-glossy-red/10 p-6 hover:border-glossy-red/30 transition-all duration-300 h-full">
                  
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-4 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            
            <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/10 via-transparent to-glossy-red/10 blur-3xl"></div>
            
            <div className="relative bg-charcoal/30 backdrop-blur-xl rounded-3xl border border-glossy-red/20 overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                      Real-time License Tracking
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg">
                      Monitor your licenses in real-time with our advanced dashboard. 
                      Get instant insights into active licenses, revenue metrics, and user activity.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        'Live MongoDB synchronization',
                        'Comprehensive analytics dashboard',
                        'License generation and revocation',
                        'Export data in multiple formats'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-glossy-red to-deep-red rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => navigate('/dashboard')}
                      className="mt-8 px-6 py-3 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-xl font-medium hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30"
                    >
                      Try Dashboard Now
                    </button>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/20 to-deep-red/20 blur-2xl"></div>
                    <div className="relative bg-midnight/80 backdrop-blur-sm rounded-xl border border-glossy-red/20 p-6">
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-charcoal/50 rounded-lg p-4 border border-glossy-red/10">
                          <p className="text-xs text-gray-400 mb-1">Active Licenses</p>
                          <p className="text-2xl font-bold text-green-400">247</p>
                        </div>
                        <div className="bg-charcoal/50 rounded-lg p-4 border border-glossy-red/10">
                          <p className="text-xs text-gray-400 mb-1">Revenue</p>
                          <p className="text-2xl font-bold text-white">$12.4K</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-charcoal/30 rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <code className="text-xs text-glossy-red">XXXX-XXXX-XXXX</code>
                            </div>
                            <span className="text-xs text-gray-400">Active</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/20 to-deep-red/20 blur-3xl"></div>
            <div className="relative bg-charcoal/50 backdrop-blur-xl rounded-3xl border border-glossy-red/20 p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers managing their licenses efficiently
              </p>
              <button
                onClick={() => navigate('/dashboard')}
                className="group px-8 py-4 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-xl font-semibold text-lg hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30 animate-pulse-slow"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Access Dashboard</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-8 border-t border-glossy-red/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-gradient-to-br from-glossy-red to-deep-red p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                </svg>
              </div>
              <span className="text-gray-400 text-sm">© 2024 LicenseHub. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

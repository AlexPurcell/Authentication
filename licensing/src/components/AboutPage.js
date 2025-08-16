import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      image: '👨‍💼',
      bio: 'Former Microsoft engineer with 15 years of experience in enterprise software.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '👩‍💻',
      bio: 'Full-stack developer passionate about building scalable licensing solutions.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Park',
      role: 'Head of Product',
      image: '👨‍🎨',
      bio: 'Product designer focused on creating intuitive developer experiences.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Emma Williams',
      role: 'Lead Engineer',
      image: '👩‍🔬',
      bio: 'Security expert specializing in encryption and license validation systems.',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const milestones = [
    { year: '2020', event: 'Company founded with a vision to simplify license management' },
    { year: '2021', event: 'Launched beta version with 100+ early adopters' },
    { year: '2022', event: 'Reached 1,000 active customers and $1M ARR' },
    { year: '2023', event: 'Introduced MongoDB integration and advanced analytics' },
    { year: '2024', event: 'Serving 10,000+ developers worldwide' }
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building reliable systems that developers can depend on.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimizing for speed and efficiency in everything we do.'
    },
    {
      icon: '🌍',
      title: 'Global',
      description: 'Supporting developers across the world with localized solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-black-pearl">
      
      <div className="fixed inset-0 bg-subtle-gradient pointer-events-none"></div>
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glossy-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-deep-red/5 rounded-full blur-3xl"></div>
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
                    <button onClick={() => navigate('/')} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-glossy-red to-deep-red rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-glossy-red to-deep-red p-3 rounded-xl shadow-glossy">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                        </svg>
                      </div>
                    </button>
                    <div>
                      <h1 className="text-xl font-bold text-white">About Us</h1>
                      <p className="text-xs text-gray-400">Our story</p>
                    </div>
                  </div>
                  <nav className="hidden md:flex items-center space-x-1">
                    <button onClick={() => navigate('/features')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">Features</button>
                    <button onClick={() => navigate('/pricing')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">Pricing</button>
                    <button onClick={() => navigate('/docs')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">Docs</button>
                    <button onClick={() => navigate('/about')} className="px-4 py-2 text-sm text-white bg-glossy-red/20 rounded-lg">About</button>
                  </nav>
                  <button onClick={() => navigate('/dashboard')} className="px-5 py-2.5 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-xl font-medium hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30">
                    Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-glossy-red to-white bg-clip-text text-transparent">
              Empowering Developers
            </span>
            <br />
            <span className="text-white">Since 2020</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're on a mission to simplify software licensing for developers worldwide. 
            Our platform makes it easy to manage, track, and scale your licensing infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/10 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative bg-charcoal/50 backdrop-blur-sm rounded-2xl border border-glossy-red/10 p-8 h-full">
              <div className="text-3xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To provide developers with the most intuitive and powerful license management platform, 
                enabling them to focus on building great software while we handle the complexities of licensing.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-l from-deep-red/10 to-transparent rounded-2xl blur-xl"></div>
            <div className="relative bg-charcoal/50 backdrop-blur-sm rounded-2xl border border-glossy-red/10 p-8 h-full">
              <div className="text-3xl mb-4">🔮</div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To become the global standard for software license management, trusted by developers 
                and companies of all sizes to protect and monetize their digital products.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-glossy-red to-deep-red"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2"></div>
                  <div className="relative z-10 w-4 h-4 bg-glossy-red rounded-full border-4 border-black-pearl"></div>
                  <div className="w-1/2 px-8">
                    <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-6">
                      <div className="text-glossy-red font-bold mb-2">{milestone.year}</div>
                      <p className="text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/10 to-deep-red/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-charcoal/50 backdrop-blur-sm rounded-2xl border border-glossy-red/10 p-6 text-center hover:border-glossy-red/30 transition-all duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-glossy-red text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/20 to-deep-red/20 blur-3xl"></div>
            <div className="relative bg-charcoal/50 backdrop-blur-xl rounded-3xl border border-glossy-red/20 p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Have questions about our platform? Want to learn more about how we can help your business? 
                We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-xl font-medium hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30">
                  Contact Sales
                </button>
                <button className="px-6 py-3 bg-charcoal/50 text-white rounded-xl font-medium border border-glossy-red/20 hover:bg-charcoal/70 transition-all">
                  View Careers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

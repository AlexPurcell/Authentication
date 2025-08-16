import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturesPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('core');

  const featureCategories = {
    core: {
      title: 'Core Features',
      icon: '🔑',
      features: [
        {
          title: 'License Key Generation',
          description: 'Generate unique, secure license keys with customizable patterns and encryption algorithms.',
          details: [
            'SHA-256 encrypted keys',
            'Custom key patterns',
            'Batch generation support',
            'Collision prevention'
          ]
        },
        {
          title: 'Real-time Validation',
          description: 'Instantly validate license keys with our high-performance validation engine.',
          details: [
            'Sub-millisecond validation',
            'Offline validation support',
            'Rate limiting protection',
            'Fraud detection'
          ]
        },
        {
          title: 'User Management',
          description: 'Complete user lifecycle management with detailed activity tracking.',
          details: [
            'User profiles & metadata',
            'Activity history',
            'Device fingerprinting',
            'Multi-device support'
          ]
        }
      ]
    },
    integration: {
      title: 'Integration',
      icon: '🔌',
      features: [
        {
          title: 'MongoDB Atlas',
          description: 'Seamless integration with MongoDB Atlas for scalable data storage.',
          details: [
            'Auto-scaling clusters',
            'Real-time sync',
            'Backup & recovery',
            'Global distribution'
          ]
        },
        {
          title: 'REST API',
          description: 'Comprehensive RESTful API for all license operations.',
          details: [
            'OpenAPI 3.0 spec',
            'JWT authentication',
            'Rate limiting',
            'Webhook support'
          ]
        },
        {
          title: 'SDK Libraries',
          description: 'Native SDKs for popular programming languages and frameworks.',
          details: [
            'JavaScript/TypeScript',
            'Python',
            'Java/Kotlin',
            'C#/.NET'
          ]
        }
      ]
    },
    analytics: {
      title: 'Analytics',
      icon: '📊',
      features: [
        {
          title: 'Revenue Tracking',
          description: 'Monitor license revenue with detailed financial analytics.',
          details: [
            'Real-time revenue data',
            'Subscription metrics',
            'Churn analysis',
            'Growth projections'
          ]
        },
        {
          title: 'Usage Analytics',
          description: 'Deep insights into how your licenses are being used.',
          details: [
            'Active user metrics',
            'Feature adoption',
            'Geographic distribution',
            'Time-based patterns'
          ]
        },
        {
          title: 'Custom Reports',
          description: 'Build and export custom reports tailored to your needs.',
          details: [
            'Drag-and-drop builder',
            'Scheduled reports',
            'Multiple export formats',
            'Email delivery'
          ]
        }
      ]
    },
    security: {
      title: 'Security',
      icon: '🔒',
      features: [
        {
          title: 'Encryption',
          description: 'Military-grade encryption for all sensitive data.',
          details: [
            'AES-256 encryption',
            'TLS 1.3 transport',
            'Key rotation',
            'HSM support'
          ]
        },
        {
          title: 'Access Control',
          description: 'Granular access control with role-based permissions.',
          details: [
            'RBAC system',
            'SSO integration',
            'MFA support',
            'IP whitelisting'
          ]
        },
        {
          title: 'Audit Logging',
          description: 'Comprehensive audit trail for all system activities.',
          details: [
            'Immutable logs',
            'Real-time alerts',
            'Compliance reports',
            'SIEM integration'
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black-pearl">
      
      <div className="fixed inset-0 bg-subtle-gradient pointer-events-none"></div>
      <div className="fixed inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-glossy-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-deep-red/5 rounded-full blur-3xl"></div>
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
                      <h1 className="text-xl font-bold text-white">Features</h1>
                      <p className="text-xs text-gray-400">Everything you need</p>
                    </div>
                  </div>
                  <nav className="hidden md:flex items-center space-x-1">
                    <button onClick={() => navigate('/features')} className="px-4 py-2 text-sm text-white bg-glossy-red/20 rounded-lg">Features</button>
                    <button onClick={() => navigate('/pricing')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">Pricing</button>
                    <button onClick={() => navigate('/docs')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">Docs</button>
                    <button onClick={() => navigate('/about')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">About</button>
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
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-glossy-red to-white bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to manage, track, and scale your software licensing system
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-charcoal/30 backdrop-blur-md rounded-xl border border-glossy-red/10 p-1">
            <div className="flex space-x-1">
              {Object.entries(featureCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`relative px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                    selectedCategory === key ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {selectedCategory === key && (
                    <div className="absolute inset-0 bg-gradient-to-r from-glossy-red to-deep-red rounded-lg shadow-glossy"></div>
                  )}
                  <span className="relative flex items-center space-x-2">
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featureCategories[selectedCategory].features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/10 to-deep-red/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-charcoal/50 backdrop-blur-sm rounded-2xl border border-glossy-red/10 p-8 hover:border-glossy-red/30 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-glossy-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-glossy-red to-deep-red blur-2xl opacity-40"></div>
            <button
              onClick={() => navigate('/dashboard')}
              className="relative px-8 py-4 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-xl font-semibold text-lg hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30"
            >
              Start Using These Features
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;

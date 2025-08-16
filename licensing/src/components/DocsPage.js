import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DocsPage = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState('getting-started');
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);

  const docSections = {
    'getting-started': {
      title: 'Getting Started',
      content: {
        overview: 'Welcome to the LicenseHub API documentation. Our API provides programmatic access to all license management features.',
        baseUrl: 'https://api.licensehub.io/v1',
        authentication: 'All API requests require authentication using an API key in the header:\nAuthorization: Bearer YOUR_API_KEY'
      }
    },
    'authentication': {
      title: 'Authentication',
      content: {
        description: 'LicenseHub uses API keys to authenticate requests. You can view and manage your API keys in the Dashboard.',
        example: `curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.licensehub.io/v1/licenses`
      }
    },
    'rate-limits': {
      title: 'Rate Limits',
      content: {
        description: 'API requests are rate limited based on your plan:',
        limits: [
          'Starter: 1,000 requests/month',
          'Professional: 10,000 requests/month',
          'Enterprise: Unlimited'
        ]
      }
    }
  };

  const apiEndpoints = [
    {
      id: 'create-license',
      method: 'POST',
      endpoint: '/licenses',
      description: 'Create a new license key',
      requestBody: {
        user_email: 'user@example.com',
        product_id: 'prod_123',
        expires_at: '2025-01-01T00:00:00Z',
        metadata: {
          plan: 'professional',
          seats: 5
        }
      },
      response: {
        id: 'lic_abc123',
        key: 'L3X9K-2M8N-4P7Q-6R5W',
        user_email: 'user@example.com',
        status: 'active',
        created_at: '2024-01-20T10:30:00Z',
        expires_at: '2025-01-01T00:00:00Z'
      }
    },
    {
      id: 'validate-license',
      method: 'GET',
      endpoint: '/licenses/validate/:key',
      description: 'Validate a license key',
      parameters: [
        { name: 'key', type: 'string', required: true, description: 'The license key to validate' }
      ],
      response: {
        valid: true,
        license: {
          id: 'lic_abc123',
          status: 'active',
          expires_at: '2025-01-01T00:00:00Z',
          user_email: 'user@example.com'
        }
      }
    },
    {
      id: 'list-licenses',
      method: 'GET',
      endpoint: '/licenses',
      description: 'List all licenses',
      parameters: [
        { name: 'status', type: 'string', required: false, description: 'Filter by status (active, expired, suspended)' },
        { name: 'limit', type: 'integer', required: false, description: 'Number of results (default: 20, max: 100)' },
        { name: 'offset', type: 'integer', required: false, description: 'Pagination offset' }
      ],
      response: {
        licenses: [
          {
            id: 'lic_abc123',
            key: 'L3X9K-2M8N-4P7Q-6R5W',
            status: 'active',
            user_email: 'user@example.com'
          }
        ],
        total: 150,
        limit: 20,
        offset: 0
      }
    },
    {
      id: 'revoke-license',
      method: 'DELETE',
      endpoint: '/licenses/:id',
      description: 'Revoke a license',
      parameters: [
        { name: 'id', type: 'string', required: true, description: 'The license ID to revoke' }
      ],
      response: {
        success: true,
        message: 'License revoked successfully',
        license_id: 'lic_abc123'
      }
    },
    {
      id: 'update-license',
      method: 'PATCH',
      endpoint: '/licenses/:id',
      description: 'Update license details',
      parameters: [
        { name: 'id', type: 'string', required: true, description: 'The license ID to update' }
      ],
      requestBody: {
        expires_at: '2026-01-01T00:00:00Z',
        metadata: {
          seats: 10
        }
      },
      response: {
        id: 'lic_abc123',
        key: 'L3X9K-2M8N-4P7Q-6R5W',
        status: 'active',
        expires_at: '2026-01-01T00:00:00Z',
        updated_at: '2024-01-20T15:45:00Z'
      }
    },
    {
      id: 'analytics',
      method: 'GET',
      endpoint: '/analytics/overview',
      description: 'Get analytics overview',
      parameters: [
        { name: 'period', type: 'string', required: false, description: 'Time period (7d, 30d, 90d, 1y)' }
      ],
      response: {
        total_licenses: 150,
        active_licenses: 142,
        expired_licenses: 5,
        suspended_licenses: 3,
        revenue: {
          current_month: 12450,
          previous_month: 11200,
          growth_rate: 0.11
        },
        top_products: [
          { product_id: 'prod_123', licenses: 89 },
          { product_id: 'prod_456', licenses: 61 }
        ]
      }
    }
  ];

  const getMethodColor = (method) => {
    const colors = {
      GET: 'text-green-400 bg-green-500/10 border-green-500/30',
      POST: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      PATCH: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
      DELETE: 'text-red-400 bg-red-500/10 border-red-500/30'
    };
    return colors[method] || 'text-gray-400 bg-gray-500/10 border-gray-500/30';
  };

  return (
    <div className="min-h-screen bg-black-pearl">
      
      <div className="fixed inset-0 bg-subtle-gradient pointer-events-none"></div>

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
                      <h1 className="text-xl font-bold text-white">API Documentation</h1>
                      <p className="text-xs text-gray-400">Version 1.0</p>
                    </div>
                  </div>
                  <nav className="hidden md:flex items-center space-x-1">
                    <button onClick={() => navigate('/features')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">Features</button>
                    <button onClick={() => navigate('/pricing')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">Pricing</button>
                    <button onClick={() => navigate('/docs')} className="px-4 py-2 text-sm text-white bg-glossy-red/20 rounded-lg">Docs</button>
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
        <div className="grid lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <div className="bg-charcoal/30 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-white mb-4">Documentation</h3>
              
              <div className="space-y-2 mb-6">
                {Object.entries(docSections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedSection(key);
                      setSelectedEndpoint(null);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedSection === key && !selectedEndpoint
                        ? 'bg-glossy-red/20 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-glossy-red/10'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>

              <h4 className="text-sm font-semibold text-gray-400 mb-3">API Endpoints</h4>
              <div className="space-y-1">
                {apiEndpoints.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => {
                      setSelectedEndpoint(endpoint);
                      setSelectedSection(null);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center space-x-2 ${
                      selectedEndpoint?.id === endpoint.id
                        ? 'bg-glossy-red/20 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-glossy-red/10'
                    }`}
                  >
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      endpoint.method === 'PATCH' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <span className="truncate">{endpoint.endpoint}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {selectedSection && !selectedEndpoint ? (
              <div className="bg-charcoal/30 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-8">
                <h1 className="text-3xl font-bold text-white mb-6">{docSections[selectedSection].title}</h1>
                
                {selectedSection === 'getting-started' && (
                  <>
                    <p className="text-gray-300 mb-6">{docSections[selectedSection].content.overview}</p>
                    
                    <div className="bg-midnight/50 rounded-lg p-4 mb-6">
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Base URL</h3>
                      <code className="text-glossy-red">{docSections[selectedSection].content.baseUrl}</code>
                    </div>
                    
                    <div className="bg-midnight/50 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Authentication</h3>
                      <pre className="text-gray-300 text-sm">{docSections[selectedSection].content.authentication}</pre>
                    </div>
                  </>
                )}
                
                {selectedSection === 'authentication' && (
                  <>
                    <p className="text-gray-300 mb-6">{docSections[selectedSection].content.description}</p>
                    
                    <div className="bg-midnight/50 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Example Request</h3>
                      <pre className="text-gray-300 text-sm overflow-x-auto">{docSections[selectedSection].content.example}</pre>
                    </div>
                  </>
                )}
                
                {selectedSection === 'rate-limits' && (
                  <>
                    <p className="text-gray-300 mb-6">{docSections[selectedSection].content.description}</p>
                    
                    <ul className="space-y-2">
                      {docSections[selectedSection].content.limits.map((limit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-glossy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span className="text-gray-300">{limit}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ) : selectedEndpoint ? (
              <div className="space-y-6">
                
                <div className="bg-charcoal/30 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-lg font-bold text-sm border ${getMethodColor(selectedEndpoint.method)}`}>
                      {selectedEndpoint.method}
                    </span>
                    <code className="text-xl text-white font-mono">{selectedEndpoint.endpoint}</code>
                  </div>
                  <p className="text-gray-300">{selectedEndpoint.description}</p>
                </div>

                {selectedEndpoint.parameters && (
                  <div className="bg-charcoal/30 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Parameters</h3>
                    <div className="space-y-3">
                      {selectedEndpoint.parameters.map((param, index) => (
                        <div key={index} className="border-l-2 border-glossy-red/30 pl-4">
                          <div className="flex items-center space-x-2 mb-1">
                            <code className="text-glossy-red font-mono">{param.name}</code>
                            <span className="text-xs px-2 py-0.5 bg-midnight/50 text-gray-400 rounded">{param.type}</span>
                            {param.required && (
                              <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">required</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-400">{param.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEndpoint.requestBody && (
                  <div className="bg-charcoal/30 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Request Body</h3>
                    <div className="bg-midnight/50 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-300">
                        <code>{JSON.stringify(selectedEndpoint.requestBody, null, 2)}</code>
                      </pre>
                    </div>
                  </div>
                )}

                <div className="bg-charcoal/30 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Response</h3>
                  <div className="bg-midnight/50 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300">
                      <code>{JSON.stringify(selectedEndpoint.response, null, 2)}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-charcoal/30 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Try It Out</h3>
                  <button className="px-6 py-3 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-xl font-medium hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30">
                    Open in API Explorer
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-charcoal/30 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-8">
                <p className="text-gray-400">Select a topic from the sidebar to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;

import React, { useState } from 'react';

const Dashboard = () => {
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [selectedView, setSelectedView] = useState('overview');
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [selectedDatabase, setSelectedDatabase] = useState('mongodb');
  const [connectionString, setConnectionString] = useState('');
  
  // Mock data 
  const mockLicenses = [
    { id: 1, key: 'L3X9K-2M8N-4P7Q-6R5W', user: 'john.developer@example.com', status: 'active', created: '2024-01-15', expires: '2025-01-15', lastChecked: '2024-01-20 14:30' },
    { id: 2, key: 'A8B7C-6D5E-4F3G-2H1I', user: 'sarah.smith@techcorp.com', status: 'active', created: '2024-01-10', expires: '2024-07-10', lastChecked: '2024-01-20 12:15' },
    { id: 3, key: 'K9L8M-7N6O-5P4Q-3R2S', user: 'mike.wilson@startup.io', status: 'expired', created: '2023-01-20', expires: '2024-01-20', lastChecked: '2024-01-19 09:45' },
    { id: 4, key: 'T1U2V-3W4X-5Y6Z-7A8B', user: 'emma.jones@design.com', status: 'active', created: '2024-01-18', expires: '2024-04-18', lastChecked: '2024-01-20 16:20' },
    { id: 5, key: 'C9D8E-7F6G-5H4I-3J2K', user: 'alex.chen@dev.org', status: 'suspended', created: '2023-12-01', expires: '2024-12-01', lastChecked: '2024-01-15 11:00' },
  ];

  const stats = {
    totalLicenses: mockLicenses.length,
    activeLicenses: mockLicenses.filter(l => l.status === 'active').length,
    expiredLicenses: mockLicenses.filter(l => l.status === 'expired').length,
    suspendedLicenses: mockLicenses.filter(l => l.status === 'suspended').length,
    revenueThisMonth: '$12,450',
    growthRate: '+15%',
  };

  const handleConnect = () => {
    if (connectionStatus === 'disconnected') {
      setShowConnectionModal(true);
    }
  };

  const handleDatabaseConnection = () => {
    if (!connectionString.trim()) {
      return; // will add mongodb + supabase support
    }
    
    setConnectionStatus('connecting');
    setShowConnectionModal(false);
    
    // Simulate connection 
    setTimeout(() => {
      setConnectionStatus('connected');
      setConnectionString(''); // Clear connection string for security
    }, 2000);
  };

  const closeModal = () => {
    setShowConnectionModal(false);
    setConnectionString('');
  };

  const getStatusBadge = (status) => {
    const colors = {
      active: 'bg-green-500/20 text-green-400 border-green-500/30',
      expired: 'bg-red-500/20 text-red-400 border-red-500/30',
      suspended: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    };
    
    return `px-2 py-1 rounded-full text-xs font-medium border ${colors[status]} backdrop-blur-sm`;
  };

  return (
    <div className="min-h-screen bg-black-pearl">
      
      <div className="fixed inset-0 bg-subtle-gradient pointer-events-none"></div>
      
      <div className="relative z-10">
        
        <header className="pt-6 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="relative">
              
              <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/20 via-deep-red/10 to-glossy-red/20 blur-3xl opacity-40"></div>
              
              <div className="relative bg-gradient-to-r from-charcoal/40 via-charcoal/60 to-charcoal/40 backdrop-blur-xl rounded-2xl border border-glossy-red/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glossy-red/5 to-transparent rounded-2xl"></div>
                
                <div className="relative px-8 py-5">
                  <div className="flex justify-between items-center">
                    
                    <div className="flex items-center space-x-6">
                      
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-glossy-red to-deep-red rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-glossy-red to-deep-red p-3 rounded-xl shadow-glossy">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-glossy-red to-white bg-clip-text text-transparent">
                          License Dashboard
                        </h1>
                        <p className="text-xs text-gray-400 mt-0.5">Developer Portal</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center space-x-2 bg-midnight/50 px-4 py-2 rounded-full border border-glossy-red/10">
                      <div className={`w-2 h-2 rounded-full ${
                        connectionStatus === 'connected' ? 'bg-green-400 animate-pulse shadow-green-400/50 shadow-sm' : 
                        connectionStatus === 'connecting' ? 'bg-yellow-400 animate-pulse shadow-yellow-400/50 shadow-sm' :
                        'bg-red-400 shadow-red-400/50 shadow-sm'
                      }`}></div>
                      <span className="text-xs font-medium text-gray-300">
                        {connectionStatus === 'connected' ? 'Database Online' :
                         connectionStatus === 'connecting' ? 'Connecting...' :
                         'Database Offline'}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      
                      <div className="hidden md:flex items-center space-x-4 mr-4">
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Active Licenses</p>
                          <p className="text-sm font-bold text-green-400">{stats.activeLicenses}</p>
                        </div>
                        <div className="w-px h-8 bg-glossy-red/20"></div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Revenue</p>
                          <p className="text-sm font-bold text-white">{stats.revenueThisMonth}</p>
                        </div>
                      </div>
                      
                      <button
                        onClick={handleConnect}
                        className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                          connectionStatus === 'connected' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30 cursor-default' 
                            : 'bg-gradient-to-r from-glossy-red to-deep-red text-white hover:shadow-glossy-lg hover:scale-105 hover:from-light-red hover:to-glossy-red border border-glossy-red/30'
                        } ${connectionStatus === 'connecting' ? 'animate-pulse' : ''}`}
                        disabled={connectionStatus === 'connecting' || connectionStatus === 'connected'}
                      >
                        <div className="flex items-center space-x-2">
                          {connectionStatus === 'connected' ? (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>Connected</span>
                            </>
                          ) : connectionStatus === 'connecting' ? (
                            <>
                              <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                              </svg>
                              <span>Connecting</span>
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                              </svg>
                              <span>Connect DB</span>
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glossy-red/5 to-transparent blur-xl"></div>
            <div className="relative bg-charcoal/30 backdrop-blur-md rounded-xl border border-glossy-red/10">
              <nav className="flex justify-center space-x-1 p-1">
                {['overview', 'licenses', 'analytics'].map((view) => (
                  <button
                    key={view}
                    onClick={() => setSelectedView(view)}
                    className={`relative px-6 py-2.5 rounded-lg font-medium text-sm capitalize transition-all duration-300 ${
                      selectedView === view
                        ? 'text-white'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {selectedView === view && (
                      <div className="absolute inset-0 bg-gradient-to-r from-glossy-red to-deep-red rounded-lg shadow-glossy"></div>
                    )}
                    <span className={`relative flex items-center space-x-2 ${
                      selectedView === view ? 'drop-shadow-[0_0_10px_rgba(220,20,60,0.5)]' : ''
                    }`}>
                      {view === 'overview' && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                      )}
                      {view === 'licenses' && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                        </svg>
                      )}
                      {view === 'analytics' && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                      )}
                      <span>{view}</span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {selectedView === 'overview' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                
                <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-glossy-red/10 hover:border-glossy-red/30 transition-all duration-300 hover:shadow-glossy-lg group">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Total Licenses</p>
                      <p className="text-3xl font-bold text-white mt-2">{stats.totalLicenses}</p>
                    </div>
                    <div className="p-3 bg-glossy-red/10 rounded-lg group-hover:bg-glossy-red/20 transition-colors">
                      <svg className="w-6 h-6 text-glossy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-green-500/20 hover:shadow-lg group">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Active</p>
                      <p className="text-3xl font-bold text-green-400 mt-2">{stats.activeLicenses}</p>
                    </div>
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-glossy-red/10 hover:border-glossy-red/30 transition-all duration-300 hover:shadow-glossy-lg group">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Monthly Revenue</p>
                      <p className="text-3xl font-bold text-white mt-2">{stats.revenueThisMonth}</p>
                      <p className="text-green-400 text-sm mt-1">{stats.growthRate} from last month</p>
                    </div>
                    <div className="p-3 bg-glossy-red/10 rounded-lg group-hover:bg-glossy-red/20 transition-colors">
                      <svg className="w-6 h-6 text-glossy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 hover:shadow-red-500/20 hover:shadow-lg group">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm font-medium">Issues</p>
                      <p className="text-3xl font-bold text-red-400 mt-2">{stats.expiredLicenses + stats.suspendedLicenses}</p>
                      <p className="text-gray-500 text-xs mt-1">{stats.expiredLicenses} expired, {stats.suspendedLicenses} suspended</p>
                    </div>
                    <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 relative">
                
                {connectionStatus !== 'connected' && (
                  <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[2px] rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-glossy-red to-deep-red rounded-2xl shadow-glossy mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Connect Database to Continue</h3>
                      <p className="text-gray-400 mb-4">Access your live license data and management tools</p>
                      <button
                        onClick={() => setShowConnectionModal(true)}
                        className="px-6 py-3 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-xl font-medium hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30"
                      >
                        Connect Now
                      </button>
                    </div>
                  </div>
                )}

                <div className={connectionStatus !== 'connected' ? 'blur-sm' : ''}>
                  {/* Add New License */}
                  <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-white">License Management</h2>
                      <button className="px-4 py-2 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-lg font-medium hover:shadow-glossy-lg transition-all duration-300 hover:scale-105 border border-glossy-red/30">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                          </svg>
                          <span>Add New License</span> {/*MAKE FUNCTIONALITY FOR THIS -- SHA256 GENERATION*/}
                        </div>
                      </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-midnight/30 rounded-lg p-4 border border-glossy-red/10">
                        <h3 className="text-sm font-medium text-gray-400 mb-2">Bulk Operations</h3>
                        <div className="space-y-2">
                          <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded transition-colors">
                            Import Licenses
                          </button>
                          <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded transition-colors">
                            Export All Data
                          </button>
                          <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded transition-colors">
                            Bulk Revoke
                          </button>
                        </div>
                      </div>

                      <div className="bg-midnight/30 rounded-lg p-4 border border-glossy-red/10">
                        <h3 className="text-sm font-medium text-gray-400 mb-2">Database Tables</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">licenses</span>
                            <span className="text-xs text-green-400">247 rows</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">users</span>
                            <span className="text-xs text-green-400">189 rows</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">ip_tracking</span>
                            <span className="text-xs text-green-400">1,024 rows</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300">audit_logs</span>
                            <span className="text-xs text-green-400">5,891 rows</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-midnight/30 rounded-lg p-4 border border-glossy-red/10">
                        <h3 className="text-sm font-medium text-gray-400 mb-2">Live Monitoring</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-300">Real-time sync active</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-sm text-gray-300">12 active connections</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-sm text-gray-300">Last sync: 2s ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl border border-glossy-red/10 overflow-hidden mb-6">
                    <div className="px-6 py-4 border-b border-glossy-red/10 bg-gradient-to-r from-glossy-red/5 to-transparent">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-white">Live License Database</h2>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-gray-400">Live Data</span>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-midnight/50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">License Key</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">IP Addresses</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Activity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                          {/* Mock Data Below */}
                          {[
                            { 
                              id: 1, 
                              key: 'L3X9K-2M8N-4P7Q-6R5W', 
                              user: 'john.developer@example.com', 
                              status: 'active', 
                              ips: ['192.168.1.100', '203.0.113.45'],
                              lastActivity: '2 min ago',
                              location: 'New York, US'
                            },
                            { 
                              id: 2, 
                              key: 'A8B7C-6D5E-4F3G-2H1I', 
                              user: 'sarah.smith@techcorp.com', 
                              status: 'active', 
                              ips: ['10.0.0.50'],
                              lastActivity: '5 min ago',
                              location: 'London, UK'
                            },
                            { 
                              id: 3, 
                              key: 'K9L8M-7N6O-5P4Q-3R2S', 
                              user: 'mike.wilson@startup.io', 
                              status: 'expired', 
                              ips: ['172.16.0.25', '198.51.100.10', '203.0.113.78'],
                              lastActivity: '2 hours ago',
                              location: 'Tokyo, JP'
                            },
                            { 
                              id: 4, 
                              key: 'T1U2V-3W4X-5Y6Z-7A8B', 
                              user: 'emma.jones@design.com', 
                              status: 'active', 
                              ips: ['192.168.0.150'],
                              lastActivity: '1 min ago',
                              location: 'Berlin, DE'
                            }
                            /*Mock Data Above*/

                            /*Mapping data structure below (for live data)*/
                          ].map((license) => (
                            <tr key={license.id} className="hover:bg-midnight/30 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <code className="text-sm text-glossy-red font-mono">{license.key}</code>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div>
                                  <div className="text-sm text-gray-300">{license.user}</div>
                                  <div className="text-xs text-gray-500">{license.location}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={getStatusBadge(license.status)}>
                                  {license.status}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <div className="space-y-1">
                                  {license.ips.map((ip, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                      <code className="text-xs text-blue-400 font-mono bg-blue-500/10 px-2 py-1 rounded">{ip}</code>
                                      {index === 0 && (
                                        <span className="w-2 h-2 bg-green-400 rounded-full" title="Currently active"></span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{license.lastActivity}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex space-x-2">
                                  <button className="p-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg transition-all duration-200 group" title="View Details">
                                    <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                  </button>
                                  <button className="p-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-lg transition-all duration-200 group" title="Edit License">
                                    <svg className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                  </button>
                                  <button className="p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg transition-all duration-200 group" title="Revoke License">
                                    <svg className="w-4 h-4 text-red-400 group-hover:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl border border-glossy-red/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-glossy-red/10 bg-gradient-to-r from-glossy-red/5 to-transparent">
                  <h2 className="text-xl font-semibold text-white">Recent License Activity</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-midnight/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">License Key</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Expires</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Check</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {mockLicenses.slice(0, 5).map((license) => (
                        <tr key={license.id} className="hover:bg-midnight/30 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <code className="text-sm text-glossy-red font-mono">{license.key}</code>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{license.user}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={getStatusBadge(license.status)}>
                              {license.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{license.expires}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{license.lastChecked}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {selectedView === 'licenses' && (
            <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl border border-glossy-red/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-glossy-red/10 bg-gradient-to-r from-glossy-red/5 to-transparent flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">All Licenses</h2>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search licenses..."
                    className="px-4 py-2 bg-midnight/50 border border-glossy-red/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-glossy-red/50 focus:shadow-glossy"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-glossy-red to-deep-red text-white rounded-lg font-medium hover:shadow-glossy-lg transition-all duration-300 hover:scale-105">
                    Export
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-midnight/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">License Key</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Created</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Expires</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {mockLicenses.map((license) => (
                      <tr key={license.id} className="hover:bg-midnight/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <code className="text-sm text-glossy-red font-mono">{license.key}</code>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{license.user}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={getStatusBadge(license.status)}>
                            {license.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{license.created}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{license.expires}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-glossy-red hover:text-light-red transition-colors mr-3">
                            Edit
                          </button>
                          <button className="text-red-400 hover:text-red-300 transition-colors">
                            Revoke
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedView === 'analytics' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">License Distribution</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">Active</span>
                      <span className="text-sm text-green-400">{stats.activeLicenses}</span>
                    </div>
                    <div className="w-full bg-midnight rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">Expired</span>
                      <span className="text-sm text-red-400">{stats.expiredLicenses}</span>
                    </div>
                    <div className="w-full bg-midnight rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">Suspended</span>
                      <span className="text-sm text-yellow-400">{stats.suspendedLicenses}</span>
                    </div>
                    <div className="w-full bg-midnight rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-glossy-red/20 to-deep-red/20 border border-glossy-red/30 text-white rounded-lg font-medium hover:shadow-glossy-lg transition-all duration-300 hover:scale-[1.02] text-left flex items-center justify-between group">
                    <span>Generate New License</span>
                    <svg className="w-5 h-5 text-glossy-red group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <button className="w-full px-4 py-3 bg-midnight/50 border border-gray-700/50 text-gray-300 rounded-lg font-medium hover:bg-midnight/80 transition-all duration-300 text-left flex items-center justify-between group">
                    <span>Bulk Import Licenses</span>
                    <svg className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <button className="w-full px-4 py-3 bg-midnight/50 border border-gray-700/50 text-gray-300 rounded-lg font-medium hover:bg-midnight/80 transition-all duration-300 text-left flex items-center justify-between group">
                    <span>Export Analytics Report</span>
                    <svg className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-charcoal/50 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-6 lg:col-span-2">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: 'New license activated', user: 'john.developer@example.com', time: '2 minutes ago', type: 'success' },
                    { action: 'License renewed', user: 'sarah.smith@techcorp.com', time: '1 hour ago', type: 'success' },
                    { action: 'License expired', user: 'mike.wilson@startup.io', time: '3 hours ago', type: 'warning' },
                    { action: 'License suspended', user: 'alex.chen@dev.org', time: '5 hours ago', type: 'danger' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-midnight/30 rounded-lg hover:bg-midnight/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'success' ? 'bg-green-400' :
                          activity.type === 'warning' ? 'bg-yellow-400' :
                          'bg-red-400'
                        }`}></div>
                        <div>
                          <p className="text-sm text-white">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.user}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {showConnectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
            onClick={closeModal}
          ></div>
          
          <div className="relative z-10 w-full max-w-md animate-popIn">
            
            <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/20 via-deep-red/10 to-glossy-red/20 blur-3xl opacity-60"></div>
            
            <div className="relative bg-gradient-to-br from-charcoal/90 via-charcoal/95 to-charcoal/90 backdrop-blur-xl rounded-3xl border border-glossy-red/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glossy-red/5 to-transparent"></div>
              
              <div className="relative p-8">

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-glossy-red to-deep-red rounded-xl shadow-glossy">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Connect Database</h3>
                      <p className="text-sm text-gray-400">Choose your database provider</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-glossy-red/10 rounded-lg transition-colors group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Database Provider
                  </label>
                  <div className="grid grid-cols-2 gap-3">

                    {/* MongoDB */}

                    <button
                      onClick={() => setSelectedDatabase('mongodb')}
                      className={`relative p-4 rounded-xl border transition-all duration-300 ${
                        selectedDatabase === 'mongodb'
                          ? 'border-glossy-red/50 bg-glossy-red/10'
                          : 'border-gray-600/50 bg-midnight/30 hover:border-gray-500/50'
                      }`}
                    >
                      {selectedDatabase === 'mongodb' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/10 to-deep-red/10 rounded-xl"></div>
                      )}
                      <div className="relative text-center">
                        <div className="text-2xl mb-2">🍃</div>
                        <div className="font-medium text-white text-sm">MongoDB</div>
                        <div className="text-xs text-gray-400 mt-1">Atlas & Self-hosted</div>
                      </div>
                    </button>

                    {/* Supabase */}

                    <button
                      onClick={() => setSelectedDatabase('supabase')}
                      className={`relative p-4 rounded-xl border transition-all duration-300 ${
                        selectedDatabase === 'supabase'
                          ? 'border-glossy-red/50 bg-glossy-red/10'
                          : 'border-gray-600/50 bg-midnight/30 hover:border-gray-500/50'
                      }`}
                    >
                      {selectedDatabase === 'supabase' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/10 to-deep-red/10 rounded-xl"></div>
                      )}
                      <div className="relative text-center">
                        <div className="text-2xl mb-2">⚡</div>
                        <div className="font-medium text-white text-sm">Supabase</div>
                        <div className="text-xs text-gray-400 mt-1">PostgreSQL</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Connection String
                  </label>
                  <div className="relative">
                    <textarea
                      value={connectionString}
                      onChange={(e) => setConnectionString(e.target.value)}
                      placeholder={
                        selectedDatabase === 'mongodb'
                          ? 'mongodb+srv://username:password@cluster.mongodb.net/database'
                          : 'postgresql://username:password@host:port/database'
                      }
                      rows={3}
                      className="w-full px-4 py-3 bg-midnight/50 border border-glossy-red/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-glossy-red/50 focus:shadow-glossy transition-all duration-300 resize-none font-mono text-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glossy-red/5 to-transparent rounded-xl pointer-events-none"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Your connection string is encrypted and stored securely
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={closeModal}
                    className="flex-1 px-4 py-3 bg-midnight/50 border border-gray-600/50 text-gray-300 rounded-xl font-medium hover:bg-midnight/70 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDatabaseConnection}
                    disabled={!connectionString.trim()}
                    className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      connectionString.trim()
                        ? 'bg-gradient-to-r from-glossy-red to-deep-red text-white hover:shadow-glossy-lg hover:scale-[1.02] border border-glossy-red/30'
                        : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span>Connect</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

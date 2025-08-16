import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SamplePage = () => {
  const navigate = useNavigate();
  const [generatedKey, setGeneratedKey] = useState('');
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSHA256 = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      // ACTUAL SHA-256 WILL GO HERE
      const sampleKey = 'SHA256-' + Math.random().toString(36).substring(2, 15).toUpperCase() + '-' + Date.now().toString(36).toUpperCase();
      setGeneratedKey(sampleKey);
      setIsGenerating(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedKey);
    // will add a toast notif animation later
  };

  const clearKey = () => {
    setGeneratedKey('');
    setInputText('');
  };

  return (
    <div className="min-h-screen bg-black-pearl">
      
      <div className="fixed inset-0 bg-subtle-gradient pointer-events-none"></div>
      <div className="fixed inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-glossy-red/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-deep-red/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1221 9z"></path>
                        </svg>
                      </div>
                    </button>
                    <div>
                      <h1 className="text-xl font-bold text-white">SHA-256 Generator</h1>
                      <p className="text-xs text-gray-400">Experiment Page</p>
                    </div>
                  </div>
                  <nav className="hidden md:flex items-center space-x-1">
                    <button onClick={() => navigate('/features')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">Features</button>
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

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-glossy-red/20 via-deep-red/10 to-glossy-red/20 blur-3xl opacity-50"></div>
            
            <div className="relative bg-gradient-to-br from-charcoal/60 via-charcoal/80 to-charcoal/60 backdrop-blur-xl rounded-3xl border border-glossy-red/20 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glossy-red/5 to-transparent"></div>
              
              <div className="relative p-12">

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-glossy-red to-deep-red rounded-2xl shadow-glossy mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-glossy-red to-white bg-clip-text text-transparent mb-2">
                    SHA-256 Key Generator
                  </h1>
                  <p className="text-gray-400">
                    Generate secure SHA-256 hashed keys for your applications
                  </p>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Input Text (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Enter text to hash (leave empty for random generation)"
                      className="w-full px-4 py-4 bg-midnight/50 border border-glossy-red/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-glossy-red/50 focus:shadow-glossy transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glossy-red/5 to-transparent rounded-xl pointer-events-none"></div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <button
                    onClick={generateSHA256}
                    disabled={isGenerating}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      isGenerating
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-glossy-red to-deep-red hover:shadow-glossy-lg hover:scale-105 border border-glossy-red/30'
                    } text-white`}
                  >
                    {isGenerating ? (
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                        <span>Generating...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <span>Generate SHA-256 Key</span>
                      </div>
                    )}
                  </button>
                </div>

                {generatedKey && (
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Generated SHA-256 Key
                    </label>
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative bg-midnight/80 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-xl"></div>
                        
                        <div className="relative">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-green-400 uppercase tracking-wide">
                              SHA-256 Hash
                            </span>
                            <div className="flex space-x-2">
                              <button
                                onClick={copyToClipboard}
                                className="p-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg transition-all duration-200 group"
                                title="Copy to clipboard"
                              >
                                <svg className="w-4 h-4 text-green-400 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                              </button>
                              <button
                                onClick={clearKey}
                                className="p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg transition-all duration-200 group"
                                title="Clear"
                              >
                                <svg className="w-4 h-4 text-red-400 group-hover:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          
                          <div className="font-mono text-sm text-green-300 break-all leading-relaxed bg-black/20 p-4 rounded-lg border border-green-500/10">
                            {generatedKey}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>This is a sample page for experimenting with SHA-256 key generation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;

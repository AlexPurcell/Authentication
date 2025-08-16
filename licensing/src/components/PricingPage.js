import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: '🚀',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Perfect for small projects and indie developers',
      features: [
        'Up to 100 active licenses',
        'Basic analytics dashboard',
        'Email support',
        'MongoDB integration',
        'API access (1,000 calls/month)',
        'Single user account',
        '30-day data retention'
      ],
      gradient: 'from-gray-600 to-gray-800',
      buttonText: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      icon: '⭐',
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 1,000 active licenses',
        'Advanced analytics & reports',
        'Priority email & chat support',
        'MongoDB Atlas integration',
        'API access (10,000 calls/month)',
        'Up to 5 team members',
        '1-year data retention',
        'Custom license templates',
        'Webhook notifications',
        'Export capabilities'
      ],
      gradient: 'from-glossy-red to-deep-red',
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: '👑',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      description: 'Full-featured solution for large organizations',
      features: [
        'Unlimited licenses',
        'Custom analytics dashboards',
        '24/7 phone & chat support',
        'Dedicated MongoDB cluster',
        'Unlimited API access',
        'Unlimited team members',
        'Unlimited data retention',
        'White-label options',
        'SLA guarantee',
        'Custom integrations',
        'Dedicated account manager',
        'On-premise deployment option'
      ],
      gradient: 'from-yellow-600 to-orange-700',
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee on all plans if you\'re not satisfied.'
    }
  ];

  const currentPrice = (plan) => {
    const basePrice = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    return billingPeriod === 'monthly' ? basePrice : Math.round(basePrice / 12);
  };

  return (
    <div className="min-h-screen bg-black-pearl">
      
      <div className="fixed inset-0 bg-subtle-gradient pointer-events-none"></div>
      <div className="fixed inset-0">
        <div className="absolute top-40 left-1/3 w-96 h-96 bg-glossy-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-deep-red/5 rounded-full blur-3xl"></div>
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
                      <h1 className="text-xl font-bold text-white">Pricing</h1>
                      <p className="text-xs text-gray-400">Choose your plan</p>
                    </div>
                  </div>
                  <nav className="hidden md:flex items-center space-x-1">
                    <button onClick={() => navigate('/features')} className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-glossy-red/10 rounded-lg transition-all">Features</button>
                    <button onClick={() => navigate('/pricing')} className="px-4 py-2 text-sm text-white bg-glossy-red/20 rounded-lg">Pricing</button>
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
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-glossy-red to-white bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. Always flexible to scale.
          </p>

          <div className="inline-flex items-center bg-charcoal/50 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-glossy-red to-deep-red text-white shadow-glossy'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-glossy-red to-deep-red text-white shadow-glossy'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-green-400">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-glossy-red to-deep-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300`}></div>
                <div className="relative bg-charcoal/50 backdrop-blur-sm rounded-2xl border border-glossy-red/10 p-8 hover:border-glossy-red/30 transition-all duration-300 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-end justify-center">
                      <span className="text-5xl font-bold text-white">${currentPrice(plan)}</span>
                      <span className="text-gray-400 ml-2 mb-2">
                        /{billingPeriod === 'yearly' ? 'month' : 'month'}
                      </span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <p className="text-sm text-gray-500 mt-1">
                        Billed ${plan.yearlyPrice} annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate('/dashboard')}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-glossy-red to-deep-red text-white hover:shadow-glossy-lg hover:scale-105 border border-glossy-red/30'
                        : 'bg-charcoal/50 text-white border border-glossy-red/20 hover:bg-charcoal/70'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-charcoal/30 backdrop-blur-sm rounded-xl border border-glossy-red/10 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

import React, { useState } from 'react';
import { 
  DollarSign, 
  Star, 
  Trophy,
  Package,
  Truck,
  Box,
  CheckCircle
} from 'lucide-react';

const OnboardingGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const steps = [
    {
      title: "Welcome to Quetico 3PL",
      content: "Learn how we can transform your logistics operations",
      icon: <Package className="text-sky-400" size={24} />,
      info: [
        "End-to-end supply chain solutions",
        "Industry-leading technology",
        "Nationwide network",
        "Expert team"
      ]
    },
    {
      title: "Retail Fulfillment",
      content: "Discover our retail compliance expertise",
      icon: <Truck className="text-sky-400" size={24} />,
      info: [
        "EDI Integration",
        "Routing Guide Compliance",
        "Retail-Ready Processing",
        "Cross-Docking Capabilities"
      ]
    },
    {
      title: "eCommerce Solutions",
      content: "Scale your online business with our fulfillment services",
      icon: <Box className="text-sky-400" size={24} />,
      info: [
        "Same-Day Shipping",
        "Order Accuracy Guarantee",
        "Returns Management",
        "Real-Time Inventory"
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', padding: '1.5rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1.5rem',
          backgroundColor: '#1e293b',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
            Quetico 3PL Onboarding Guide
          </h1>
        </div>

        {/* Progress Steps */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '2rem',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              width: '33%',
              zIndex: 1
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: index <= currentStep ? '#0ea5e9' : '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.5rem'
              }}>
                {index < currentStep ? (
                  <CheckCircle color="white" size={20} />
                ) : (
                  <span style={{ color: 'white' }}>{index + 1}</span>
                )}
              </div>
              <span style={{ color: 'white', textAlign: 'center' }}>
                {step.title}
              </span>
            </div>
          ))}
          {/* Progress Line */}
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '16.5%',
            right: '16.5%',
            height: '2px',
            backgroundColor: '#334155',
            zIndex: 0
          }}>
            <div style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
              height: '100%',
              backgroundColor: '#0ea5e9',
              transition: 'width 0.3s ease-in-out'
            }} />
          </div>
        </div>

        {/* Current Step Content */}
        <div style={{
          backgroundColor: '#1e293b',
          padding: '2rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            {steps[currentStep].icon}
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: 'white',
              marginLeft: '1rem'
            }}>
              {steps[currentStep].title}
            </h2>
          </div>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
            {steps[currentStep].content}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {steps[currentStep].info.map((item, index) => (
              <div key={index} style={{
                backgroundColor: '#334155',
                padding: '1rem',
                borderRadius: '0.375rem',
                color: 'white',
                display: 'flex',
                alignItems: 'center'
              }}>
                <CheckCircle className="text-sky-400 mr-2" size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              backgroundColor: currentStep > 0 ? '#0ea5e9' : '#334155',
              color: 'white',
              cursor: currentStep > 0 ? 'pointer' : 'not-allowed',
              border: 'none'
            }}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              backgroundColor: currentStep < steps.length - 1 ? '#0ea5e9' : '#334155',
              color: 'white',
              cursor: currentStep < steps.length - 1 ? 'pointer' : 'not-allowed',
              border: 'none'
            }}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export { OnboardingGuide };

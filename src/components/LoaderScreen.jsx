import React, { useState, useEffect } from 'react';
import '../styles/LoaderScreen.css';

const LoaderScreen = ({ 
  type = 'default',  // possible values: 'fetch-consent', 'fetch-invoices', 'share-lenders'
  onComplete,
  timeout = 3000     // default timeout for loader to auto-complete
}) => {
  const [loadingStep, setLoadingStep] = useState(1);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Get title and message based on loader type
  const getLoaderContent = () => {
    switch (type) {
      case 'fetch-consent':
        return {
          title: 'Fetching consent details',
          message: 'Please wait while we fetch your consent details'
        };
      case 'fetch-invoices':
        return {
          title: 'Fetching invoices',
          message: 'Please wait while we fetch your GST invoices'
        };
      case 'share-lenders':
        return {
          title: 'Sharing information with lenders',
          message: 'Please wait while we share your information with lenders'
        };
      default:
        return {
          title: 'Processing',
          message: 'Please wait while we process your request'
        };
    }
  };

  const { title, message } = getLoaderContent();

  // Simulate loading progress
  useEffect(() => {
    const totalSteps = type === 'share-lenders' ? 3 : 1;
    const stepDuration = timeout / totalSteps;
    
    const timer = setTimeout(() => {
      if (loadingStep < totalSteps) {
        setLoadingStep(loadingStep + 1);
      } else {
        if (onComplete) onComplete();
      }
    }, stepDuration);
    
    // Progress animation
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        return nextProgress > 100 ? 100 : nextProgress;
      });
    }, stepDuration / 100);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [loadingStep, type, timeout, onComplete]);

  return (
    <div className="loader-screen">
      <div className="loader-content">
        <div className={`loader-animation ${type}`}></div>
        <h1 className="loader-title">{title}</h1>
        <p className="loader-message">{message}</p>
        
        {type === 'share-lenders' && (
          <div className="loader-steps">
            <div className="step">
              <div className={`step-number ${loadingStep >= 1 ? 'active' : ''}`}>1</div>
              <div className="step-label">Contacting lenders</div>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className={`step-number ${loadingStep >= 2 ? 'active' : ''}`}>2</div>
              <div className="step-label">Sharing invoices</div>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className={`step-number ${loadingStep >= 3 ? 'active' : ''}`}>3</div>
              <div className="step-label">Processing offers</div>
            </div>
          </div>
        )}
        
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderScreen;
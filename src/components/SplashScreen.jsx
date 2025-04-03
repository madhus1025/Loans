import React, { useEffect } from 'react';
import '../styles/SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo"></div>
        <h1 className="splash-title">MSME Financing</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
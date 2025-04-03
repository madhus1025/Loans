import React from 'react';
import '../styles/ChooseLanguage.css'; // We'll create this CSS file next

const ChooseLanguage = ({ onSelectLanguage }) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी', english: 'Hindi' },
    { code: 'ta', name: 'தமிழ்', english: 'Tamil' },
    { code: 'te', name: 'తెలుగు', english: 'Telugu' },
    { code: 'gu', name: 'ગુજરાતી', english: 'Gujarati' },
    { code: 'mr', name: 'मराठी', english: 'Marathi' }
  ];

  return (
    <div className="language-selection-screen">
      <div className="language-container">
        <div className="language-header">
          <h1>Choose your Language</h1>
        </div>
        
        <div className="language-options">
          {languages.map((language) => (
            <button 
              key={language.code}
              className="language-option"
              onClick={() => onSelectLanguage(language.code)}
            >
              {language.code === 'en' ? (
                <span className="language-name">{language.name}</span>
              ) : (
                <div className="language-name-container">
                  <span className="language-name-native">{language.name}</span>
                  <span className="language-name-english">{language.english}</span>
                </div>
              )}
              <span className="language-arrow">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseLanguage;
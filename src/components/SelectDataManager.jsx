import React, { useState } from 'react';
import '../styles/SelectDataManager.css';

const SelectDataManager = ({ dataManagers = [], onContinue, onBack }) => {
  const [selectedManager, setSelectedManager] = useState(null);

  const handleSelect = (manager) => {
    setSelectedManager(manager);
  };
  
  const handleContinue = () => {
    if (selectedManager && onContinue) {
      onContinue(selectedManager);
    }
  };

  return (
    <div className="select-manager-screen">
      <div className="app-header">
        <button className="back-button" onClick={onBack}>←</button>
        <h1>Select Data Manager</h1>
        <div className="header-placeholder"></div>
      </div>
      
      <div className="manager-content">
        <p className="instruction-text">
          Choose a data manager to securely share your data
        </p>
        
        <div className="managers-list">
          {dataManagers.map((manager) => (
            <div 
              key={manager.id} 
              className={`manager-item ${selectedManager?.id === manager.id ? 'selected' : ''}`}
              onClick={() => handleSelect(manager)}
            >
              <div className="manager-logo" style={{ backgroundImage: `url(${manager.logo})` }}></div>
              <div className="manager-name">{manager.name}</div>
              {selectedManager?.id === manager.id && (
                <div className="check-icon"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="manager-footer">
        <button 
          className={`continue-button ${selectedManager ? 'active' : ''}`}
          disabled={!selectedManager}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectDataManager;
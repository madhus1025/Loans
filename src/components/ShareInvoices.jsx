import React, { useState } from 'react';
import '../styles/ShareInvoices.css';

const ShareInvoices = ({ invoices = [], onContinue, onBack }) => {
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  
  const toggleInvoice = (invoice) => {
    if (selectedInvoices.some(inv => inv.id === invoice.id)) {
      setSelectedInvoices(selectedInvoices.filter(inv => inv.id !== invoice.id));
    } else {
      setSelectedInvoices([...selectedInvoices, invoice]);
    }
  };
  
  const selectAll = () => {
    if (selectedInvoices.length === invoices.length) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices([...invoices]);
    }
  };

  const handleContinue = () => {
    if (selectedInvoices.length > 0 && onContinue) {
      onContinue(selectedInvoices);
    }
  };

  return (
    <div className="share-invoices-screen">
      <div className="app-header">
        <button className="back-button" onClick={onBack}>←</button>
        <h1>Share Invoices</h1>
        <div className="header-placeholder"></div>
      </div>
      
      <div className="invoices-content">
        <div className="invoices-header">
          <p className="invoices-count">{invoices.length} invoices found</p>
          <button className="select-all-button" onClick={selectAll}>
            {selectedInvoices.length === invoices.length ? 'Deselect All' : 'Select All'}
          </button>
        </div>
        
        <div className="invoices-list">
          {invoices.length > 0 ? (
            invoices.map((invoice) => (
              <div 
                key={invoice.id} 
                className={`invoice-item ${selectedInvoices.some(inv => inv.id === invoice.id) ? 'selected' : ''}`}
                onClick={() => toggleInvoice(invoice)}
              >
                <div className="invoice-details">
                  <div className="invoice-top">
                    <p className="invoice-number">Invoice #{invoice.number}</p>
                    <p className="invoice-amount">₹{invoice.amount.toLocaleString()}</p>
                  </div>
                  <div className="invoice-bottom">
                    <p className="invoice-date">{invoice.date}</p>
                    <p className="invoice-buyer">{invoice.buyerName}</p>
                  </div>
                </div>
                <div className="invoice-checkbox">
                  {selectedInvoices.some(inv => inv.id === invoice.id) && <div className="checkbox-inner"></div>}
                </div>
              </div>
            ))
          ) : (
            <div className="no-invoices">
              <p>No invoices found</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="invoices-footer">
        <button 
          className={`continue-button ${selectedInvoices.length > 0 ? 'active' : ''}`}
          disabled={selectedInvoices.length === 0}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ShareInvoices;
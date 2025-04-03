import React, { useState } from 'react';
import '../styles/LoanOffersList.css';

const LoanOffersList = ({ 
  offers = [], 
  invoiceMode = false, 
  onSelectOffer,
  onBack
}) => {
  const [selectedTab, setSelectedTab] = useState(invoiceMode ? 'all' : '');
  
  // For invoice mode, group offers by invoice
  const invoices = invoiceMode ? 
    Array.from(new Set(offers.map(offer => offer.invoiceId)))
      .map(invoiceId => ({
        id: invoiceId,
        number: offers.find(o => o.invoiceId === invoiceId)?.invoiceNumber || '',
        amount: offers.find(o => o.invoiceId === invoiceId)?.invoiceAmount || 0
      })) : [];
  
  // Filter offers based on selected tab
  const filteredOffers = selectedTab === 'all' ? 
    offers : 
    offers.filter(offer => offer.invoiceId === selectedTab);

  return (
    <div className="loan-offers-screen">
      <div className="app-header">
        <button className="back-button" onClick={onBack}>←</button>
        <h1>Loan Offers</h1>
        <div className="header-placeholder"></div>
      </div>
      
      {invoiceMode && (
        <div className="invoice-tabs">
          <button 
            className={`tab ${selectedTab === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedTab('all')}
          >
            All Offers
          </button>
          {invoices.map(invoice => (
            <button 
              key={invoice.id} 
              className={`tab ${selectedTab === invoice.id ? 'active' : ''}`}
              onClick={() => setSelectedTab(invoice.id)}
            >
              Invoice #{invoice.number}
            </button>
          ))}
        </div>
      )}
      
      <div className="offers-content">
        {filteredOffers.length > 0 ? (
          <div className="offers-list">
            {filteredOffers.map((offer) => (
              <div 
                key={offer.id} 
                className="offer-card"
                onClick={() => onSelectOffer(offer)}
              >
                <div className="offer-header">
                  <div className="lender-logo" style={{ backgroundImage: `url(${offer.lenderLogo})` }}></div>
                  <div className="lender-name">{offer.lenderName}</div>
                </div>
                
                <div className="offer-details">
                  <div className="detail-row">
                    <span className="detail-label">Loan Amount</span>
                    <span className="detail-value">₹{offer.loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Interest Rate</span>
                    <span className="detail-value">{offer.interestRate}%</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Tenor</span>
                    <span className="detail-value">{offer.tenor} days</span>
                  </div>
                  
                  {invoiceMode && selectedTab === 'all' && (
                    <div className="invoice-tag">
                      Invoice #{offer.invoiceNumber}
                    </div>
                  )}
                </div>
                
                <button className="view-offer-button">
                  View Offer Details
                  <span className="arrow">›</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-offers">
            <div className="no-offers-icon"></div>
            <p>No loan offers available at this time</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanOffersList;
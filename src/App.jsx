import React, { useState, useEffect } from 'react';
import './App.css';

// Import all components
import SplashScreen from './components/SplashScreen';
import IntroScreen from './components/IntroScreen';
import ChooseLanguage from './components/ChooseLanguage';
import HomeScreen from './components/HomeScreen';
import ShareInvoices from './components/ShareInvoices';
import SelectDataManager from './components/SelectDataManager';
import LoaderScreen from './components/LoaderScreen';
import StatusScreen from './components/StatusScreen';
import LoanOffersList from './components/LoanOffersList';
import LoanOfferDetails from './components/LoanOfferDetails';
import RepaymentSetup from './components/RepaymentSetup';
import RepaymentAuthentication from './components/RepaymentAuthentication';
import RegistrationForm from './components/RegistrationForm';

// Sample data
const sampleInvoices = [
  { id: '1', number: 'INV001', amount: 50000, date: '01 Mar 2025', buyerName: 'ABC Corp' },
  { id: '2', number: 'INV002', amount: 75000, date: '15 Mar 2025', buyerName: 'XYZ Ltd' },
  { id: '3', number: 'INV003', amount: 30000, date: '20 Mar 2025', buyerName: 'PQR Industries' }
];

const sampleDataManagers = [
  { id: '1', name: 'Account Aggregator 1', logo: '/mockups/ic_Axis.svg' },
  { id: '2', name: 'Account Aggregator 2', logo: '/mockups/ic_Axis.svg' },
  { id: '3', name: 'Account Aggregator 3', logo: '/mockups/ic_Axis.svg' },
  { id: '4', name: 'Account Aggregator 4', logo: '/mockups/ic_Axis.svg' }
];

const sampleLoanOffers = [
  { 
    id: '1', 
    lenderName: 'HDFC Bank', 
    lenderLogo: '/mockups/ic_Axis.svg',
    loanAmount: 45000, 
    interestRate: 12, 
    tenor: 60,
    processingFee: 450,
    repaymentAmount: 47250,
    repaymentDate: '01 June 2025',
    invoiceId: '1',
    invoiceNumber: 'INV001',
    invoiceAmount: 50000,
    invoiceDate: '01 Mar 2025'
  },
  { 
    id: '2', 
    lenderName: 'ICICI Bank', 
    lenderLogo: '/mockups/ic_Axis.svg',
    loanAmount: 40000, 
    interestRate: 11, 
    tenor: 60,
    processingFee: 400,
    repaymentAmount: 41866,
    repaymentDate: '01 June 2025',
    invoiceId: '1',
    invoiceNumber: 'INV001',
    invoiceAmount: 50000,
    invoiceDate: '01 Mar 2025'
  },
  { 
    id: '3', 
    lenderName: 'Axis Bank', 
    lenderLogo: '/mockups/ic_Axis.svg',
    loanAmount: 70000, 
    interestRate: 13, 
    tenor: 90,
    processingFee: 700,
    repaymentAmount: 74025,
    repaymentDate: '15 June 2025',
    invoiceId: '2',
    invoiceNumber: 'INV002',
    invoiceAmount: 75000,
    invoiceDate: '15 Mar 2025'
  }
];

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  const [selectedDataManager, setSelectedDataManager] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedBankAccount, setSelectedBankAccount] = useState(null);
  const [showNavigation, setShowNavigation] = useState(false);
  
  // Simulate splash screen
  useEffect(() => {
    if (currentScreen === 'splash') {
      setTimeout(() => {
        setCurrentScreen('intro');
      }, 2000);
    }
  }, [currentScreen]);
  
  // Screen navigation handlers
  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    setCurrentScreen('home');
  };
  
  const handleStartLoanProcess = () => {
    setCurrentScreen('share-invoices');
  };
  
  const handleSelectInvoices = (invoices) => {
    setSelectedInvoices(invoices);
    setCurrentScreen('select-data-manager');
  };
  
  const handleSelectDataManager = (manager) => {
    setSelectedDataManager(manager);
    setCurrentScreen('loading-share-info');
  };
  
  const handleDataSharingComplete = () => {
    setCurrentScreen('status-data-shared');
  };
  
  const handleViewOffers = () => {
    setCurrentScreen('loan-offers-list');
  };
  
  const handleSelectOffer = (offer) => {
    setSelectedOffer(offer);
    setCurrentScreen('loan-offer-details');
  };
  
  const handleAcceptOffer = () => {
    setCurrentScreen('loading-process-loan');
  };
  
  const handleLoanProcessed = () => {
    setCurrentScreen('repayment-setup');
  };
  
  const handleSetupRepayment = () => {
    setCurrentScreen('repayment-auth');
  };
  
  const handleRepaymentComplete = () => {
    setCurrentScreen('status-loan-disbursed');
  };
  
  const handleGoHome = () => {
    setCurrentScreen('home');
  };

  // Handle registration form submission
  const handleRegistrationSubmit = (formData) => {
    console.log('Registration data:', formData);
    setCurrentScreen('home');
  };

  // Toggle navigation menu
  const toggleNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  // Navigation component for development/testing
  const NavigationMenu = () => {
    const screens = [
      { id: 'splash', name: 'Splash Screen' },
      { id: 'intro', name: 'Intro Screen' },
      { id: 'choose-language', name: 'Choose Language' },
      { id: 'home', name: 'Home Screen' },
      { id: 'share-invoices', name: 'Share Invoices' },
      { id: 'select-data-manager', name: 'Select Data Manager' },
      { id: 'loading-share-info', name: 'Loading - Share Info' },
      { id: 'status-data-shared', name: 'Status - Data Shared' },
      { id: 'loan-offers-list', name: 'Loan Offers List' },
      { id: 'loan-offer-details', name: 'Loan Offer Details' },
      { id: 'loading-process-loan', name: 'Loading - Process Loan' },
      { id: 'repayment-setup', name: 'Repayment Setup' },
      { id: 'repayment-auth', name: 'Repayment Authentication' },
      { id: 'status-loan-disbursed', name: 'Status - Loan Disbursed' },
      { id: 'registration-individual', name: 'Registration - Individual' },
      { id: 'registration-business', name: 'Registration - Business' }
    ];

    return (
      <div className="navigation-menu">
        <div className="navigation-header">
          <h2>Navigation</h2>
          <button onClick={toggleNavigation} className="close-button">×</button>
        </div>
        <div className="navigation-content">
          {screens.map(screen => (
            <button 
              key={screen.id} 
              onClick={() => {
                setCurrentScreen(screen.id);
                setShowNavigation(false);
              }}
              className={currentScreen === screen.id ? 'active' : ''}
            >
              {screen.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Render the current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      
      case 'intro':
        return <IntroScreen onContinue={() => setCurrentScreen('choose-language')} />;
      
      case 'choose-language':
        return <ChooseLanguage onSelectLanguage={handleLanguageSelect} />;
      
      case 'home':
        return (
          <HomeScreen 
            onApplyForLoan={handleStartLoanProcess} 
            onViewLoans={() => setCurrentScreen('loan-offers-list')}
          />
        );
      
      case 'share-invoices':
        return (
          <ShareInvoices 
            invoices={sampleInvoices} 
            onContinue={handleSelectInvoices}
            onBack={() => setCurrentScreen('home')}
          />
        );
      
      case 'select-data-manager':
        return (
          <SelectDataManager 
            dataManagers={sampleDataManagers} 
            onContinue={handleSelectDataManager}
            onBack={() => setCurrentScreen('share-invoices')}
          />
        );
      
      case 'loading-share-info':
        return (
          <LoaderScreen 
            type="share-lenders" 
            timeout={5000}
            onComplete={handleDataSharingComplete}
          />
        );
      
      case 'status-data-shared':
        return (
          <StatusScreen 
            type="data-sharing-completed" 
            onContinue={handleViewOffers}
          />
        );
      
      case 'loan-offers-list':
        return (
          <LoanOffersList 
            offers={sampleLoanOffers} 
            invoiceMode={true}
            onSelectOffer={handleSelectOffer}
            onBack={() => setCurrentScreen('home')}
          />
        );
      
      case 'loan-offer-details':
        return (
          <LoanOfferDetails 
            offer={selectedOffer} 
            onBack={() => setCurrentScreen('loan-offers-list')}
            onAcceptOffer={handleAcceptOffer}
          />
        );
      
      case 'loading-process-loan':
        return (
          <LoaderScreen 
            type="default"
            timeout={3000}
            onComplete={handleLoanProcessed}
          />
        );
      
      case 'repayment-setup':
        return (
          <RepaymentSetup 
            loanDetails={{
              amount: selectedOffer?.loanAmount,
              repaymentAmount: selectedOffer?.repaymentAmount,
              repaymentDate: selectedOffer?.repaymentDate
            }}
            onBack={() => setCurrentScreen('loan-offer-details')}
            onContinue={handleSetupRepayment}
          />
        );
      
      case 'repayment-auth':
        return (
          <RepaymentAuthentication 
            bankDetails={{ 
              bankName: 'HDFC Bank', 
              accountNumber: 'XXXX1234' 
            }}
            onBack={() => setCurrentScreen('repayment-setup')}
            onComplete={handleRepaymentComplete}
          />
        );
      
      case 'status-loan-disbursed':
        return (
          <StatusScreen 
            type="loan-disbursed" 
            data={{
              loanDetails: {
                amount: selectedOffer?.loanAmount,
                interestRate: selectedOffer?.interestRate,
                tenor: selectedOffer?.tenor,
                disbursementDate: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
                repaymentDate: selectedOffer?.repaymentDate
              }
            }}
            onContinue={handleGoHome}
          />
        );

      case 'registration-individual':
        return (
          <div className="registration-container">
            <div className="app-header">
              <button className="back-button" onClick={() => setCurrentScreen('home')}>←</button>
              <h1>Registration - Individual</h1>
              <div className="header-placeholder"></div>
            </div>
            <div className="registration-content">
              <RegistrationForm 
                userType="individual" 
                onSubmit={handleRegistrationSubmit}
              />
            </div>
          </div>
        );

      case 'registration-business':
        return (
          <div className="registration-container">
            <div className="app-header">
              <button className="back-button" onClick={() => setCurrentScreen('home')}>←</button>
              <h1>Registration - Business</h1>
              <div className="header-placeholder"></div>
            </div>
            <div className="registration-content">
              <RegistrationForm 
                userType="soleProprietor" 
                onSubmit={handleRegistrationSubmit}
              />
            </div>
          </div>
        );
      
      default:
        return <div>Screen not found</div>;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
      
      {/* Dev navigation toggle button */}
      <button 
        className="nav-toggle-button"
        onClick={toggleNavigation}
      >
        Menu
      </button>
      
      {/* Dev navigation drawer */}
      {showNavigation && <NavigationMenu />}
    </div>
  );
}

export default App;

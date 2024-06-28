import React from 'react';
import './index.css';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title from './components/Title';
import TopNavbar from './components/TopNavbar'; // Ensure it's used
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="App h-svh">
      <Router>
        <TopNavbar /> 
        <Title />
        <Routes>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

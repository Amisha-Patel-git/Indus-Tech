import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Form, useLocation } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import Offer from "./components/Offer";
import StructuredSolutions from "./components/StructuredSolutions";
import Values from "./components/Values";
import Vision from "./components/Vision";
import CollectionSolutions from "./components/CollectionSolutions";
import PayoutSolutions from "./components/PayoutSolutions";
import Escrow from "./components/Escrow";
import ConnectedBanking from "./components/ConnectedBanking";
import RegisterForm from "./components/RegisterForm";
import TalkToExperts from "./components/TalkToExperts";
import Medical from "./components/Medical";
import { Player } from "@lottiefiles/react-lottie-player"; 
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [festivalName, setFestivalName] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('https://cdn.svgator.com/images/2022/12/snow-globe-city-animation.svg');
  
  // useLocation is now inside the AppContent component
  const location = useLocation();

  const backgroundStyle = {
    position: 'absolute',
    top: 60,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1, // Keeps the video in the background
  };

  return (
    <div className="App" style={backgroundStyle}>
      {/* Apply background video only if not on the PrivacyPolicy page */}
      {/* {location.pathname !== '/privacypolicy' && location.pathname !== '/termsconditions' && (
      
        
           <Player
             src="https://lottie.host/8ebd81a1-c7a5-4285-8878-4e27c24e1697/21B4DtjjB9.json"
             loop
             autoplay
             style={backgroundStyle}
           />
      
      )} */}
      <Header />
      <Routes>
        <Route path="/" element={<div><Vision /><Offer /><Values /></div>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/structuredsolutions" element={<StructuredSolutions />} />
        <Route path="/collectionsolutions" element={<CollectionSolutions />} />
        <Route path="/payoutsolutions" element={<PayoutSolutions />} />
        <Route path="/escrowaccount" element={<Escrow />} />
        <Route path="/connectedbanking" element={<ConnectedBanking />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/talktoexperts" element={<TalkToExperts />} />
        <Route path="/form" element={<Form />} />
        <Route path="/MEF" element={<Medical />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

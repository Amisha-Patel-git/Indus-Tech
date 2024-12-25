import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Form } from "react-router-dom";
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
import Verification from "./components/Verification";
import MoonLogin from "./components/MoonLogin";


function App() {

  return (
    
    <Router>
      <div className="App">
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
          <Route path="/submit-form" element={<Verification />} />
          <Route path="/login" element={<MoonLogin />} />
        </Routes>
        <Footer />

      </div>
    </Router >
    


  );
};

export default App;
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


function App() {

  const [festivalName, setFestivalName] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('https://cdn.svgator.com/images/2022/12/snow-globe-city-animation.svg');

  useEffect(() => {
    const fetchHolidayData = async () => {
      const currentDate = new Date();
      const API_KEY = 'fLOr5mnWeuvk6fgAF40141oAOuO1raqt';
      const COUNTRY_CODE = 'IN';
      const year = currentDate.getFullYear();

      try {
        const response = await fetch(`https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=${COUNTRY_CODE}&year=${year}`);
        if (!response.ok) {
          throw new Error(`API error:${response.statusText}`);
        }

        const data = await response.json();
        let appliedTheme = '';

        data.response.holidays.forEach((holiday) => {
          const holidayDate = new Date(holiday.date.iso);
          const daysBeforeFestival = 3;
          const festivalStartDate = new Date(holidayDate.setDate(holidayDate.getDate() - daysBeforeFestival));
          const festivalEndDate = new Date(holidayDate.setDate(holidayDate.getDate() + daysBeforeFestival + 1));

          if (currentDate >= festivalStartDate && currentDate <= festivalEndDate) {
            appliedTheme = holiday.name.toLowerCase().replace(/\+/g, '-');
            setFestivalName(holiday.name);
          }
        });
        if (appliedTheme) {
          document.body.className = appliedTheme;
          localStorage.setItem('lastTheme', appliedTheme);
        } else {
          document.body.className = '';
          localStorage.removeItem('lastTheme');
          setFestivalName('');
        }

      } catch (error) {
        console.error('Error fetching holiday data:', error);
        const cachedTheme = localStorage.getItem('lastTheme');
        if (cachedTheme) {
          document.body.className = cachedTheme;
          setFestivalName(cachedTheme.replace('-', ' '));
        } else {
          document.body.className = '';
        }
      }
    };
    fetchHolidayData();
  }, []);


  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the video covers the whole container
    zIndex: -1, // Keeps the video in the background
  };
  return (
    
    <Router>
      <div className="App" style={backgroundStyle}>
      <video 
        src="https://static.videezy.com/system/resources/previews/000/004/913/original/Christmas_Santa_Sleigh_Motion_Background_4K.mp4" 
        autoPlay
        muted
        loop
        style={backgroundStyle}
      />
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
        </Routes>
        <Footer />

      </div>
    </Router >
    


  );
};

export default App;
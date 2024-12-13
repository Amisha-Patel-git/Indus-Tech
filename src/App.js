import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Player } from '@lottiefiles/react-lottie-player';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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


function App() {

  const [isDarkMode, setIsDarkMode]=useState(false);
  const toggleTheme=()=>{
    setIsDarkMode((prevMode)=>!prevMode);
  };


  const [festivalName, setFestivalName] = useState('');

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

  const [popupContent, setPopupContent] = useState({ title: "", body: "" });
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = (contentType) => {
    if (contentType === "Privacy Policy") {
      setPopupContent({
        title: "Privacy Policy",
        body: "Here you can include the content."
      });
    } else if (contentType === "Terms & Conditions") {
      setPopupContent({
        title: "Terms & Conditions",
        body: "Here you can include the content."
      });
    }
    setPopupVisible(true);
  };
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    
    <Router>
      <div className={`App ${isDarkMode?'dark-mode':'light-mode'}`}>
        <Header />
        <Routes>
        <Route path="/" element={<div><Vision /><Offer /><Values /></div>} />
        

        
         
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/structuredsolutions" element={<div>StructuredSolutions</div>} />
        </Routes>
        <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme}  />

      </div>
    </Router >
    


  );
};

export default App;
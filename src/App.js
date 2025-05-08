import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes for version 6
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'; // Import your ContactUs component
import Home from './components/Home'; // Add a Home component or any other page
import Bookfreesitevisit from './components/Bookfreesitevisit'; // Import Bookfreesitevisit page
import Chatbot from './components/Chatbot'; // Import Chatbot page
import Waterproofing_solutions from './components/Waterproofing_solutions';
import FAQS from './components/FAQS';
import CustomerReviews from './components/CustomerReviews';
import WaterproofingChemicals from './components/WaterproofingChemicals';


function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Your Navbar component */}
        <Routes>
          {/* Define routes using 'element' prop in React Router v6 */}
          <Route path="/Home" element={<Home />} /> {/* Home Page */}
          <Route path="/contactus" element={<ContactUs />} /> {/* Contact Us Page */}
          <Route path="/bookfreesitevisit" element={<Bookfreesitevisit />} /> {/* Book Free Site Visit Page */}
          <Route path="/chatbot" element={<Chatbot />} /> {/* Chatbot Page */}
          <Route path="/Waterproofing_solutions" element={<Waterproofing_solutions />} />
          <Route path="/FAQS" element={<FAQS />} />
          <Route path="/CustomerReviews" element={<CustomerReviews />} />
          <Route path="/WaterproofingChemicals" element={<WaterproofingChemicals />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

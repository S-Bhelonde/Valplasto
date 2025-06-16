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
import ConcreteAdmixture from './components/ConcreteAdmixture';
import GP from './components/GP';
import Waterproofing_chemicals from './components/Waterproofing_chemicals';
import Our_services from './components/Our_services';
import Blogs from './components/Blogs';
import Waterproofing_tape from './components/Waterproofing_tape';
import Waterproofing_membrane from './components/Waterproofing_membrane';
import Polyurethane_sealent from './components/Polyurethane_sealent';
import Micro_concrete from './components/Micro_concrete';
import Tile_Adhisive from './components/Tile_Adhisive';
import Anchor from './components/Anchor';
import Thermal_insulation_paint from './components/Thermal_insulation_paint';
import About_us from './components/About_us';


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
          <Route path="/ConcreteAdmixture" element={<ConcreteAdmixture />} />
          <Route path="/GP" element={<GP />} />
          <Route path="/Waterproofing_chemicals" element={<Waterproofing_chemicals />} />
          <Route path="/Our_services" element={<Our_services />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Waterproofing_tape" element={<Waterproofing_tape/>} />
          <Route path="/Waterproofing_membrane" element={<Waterproofing_membrane/>} />
          <Route path="/Polyurethane_sealent" element={<Polyurethane_sealent/>} />
          <Route path="/Micro_concrete" element={<Micro_concrete/>} />
          <Route path="/Tile_Adhisive" element={<Tile_Adhisive/>} />
          <Route path="/Anchor" element={<Anchor/>} />
          <Route path="/Thermal_insulation_paint" element={<Thermal_insulation_paint/>} />
          <Route path="/About_us" element={<About_us/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

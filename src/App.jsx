// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
//------------
import { MapPin, Phone, Mail, X, Menu } from 'lucide-react';
import Home from './pages/Home';
import ApplianceGlass from './pages/ApplianceGlass';
import PrintedGlass from './pages/PrintedGlass';
import LaminatedGlass from './pages/LaminatedGlass';
import LacqueredGlass from './pages/LacqueredGlass';
import DesignerGlass from './pages/DesignerGlass';
import CrystalGlass from './pages/CrystalGlass';
import Contact from './pages/Contact';
import About from './pages/About';

//it added to go to top of page when link is clicked
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
//----------

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrochureUnlocked, setIsBrochureUnlocked] = useState(false);
  const [isSubmittingBrochure, setIsSubmittingBrochure] = useState(false);
  
  // NEW: State to track if the Products dropdown is open inside the mobile menu
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false); 

  // Helper functions to manage menu closing
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false); // Reset the dropdown when menu closes
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans flex flex-col relative">
        
        {/* Global Premium Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
  <img 
    src="/asm-logo.png" 
    alt="ASM Glass" 
    className="h-12 md:h-12 w-auto object-contain" 
  />
</Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              
              {/* Desktop Products Dropdown */}
              <div className="relative group py-6">
                <button className="flex items-center gap-1 hover:text-black transition-colors outline-none cursor-pointer">
                  Products
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-56 bg-white border border-neutral-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
                  <Link to="/products/appliance-glass" className="px-5 py-2.5 hover:bg-neutral-50 hover:text-black transition-colors">Appliance Glass</Link>
                  <Link to="/products/printed-glass" className="px-5 py-2.5 hover:bg-neutral-50 hover:text-black transition-colors">Printed Glass</Link>
                  <Link to="/products/laminated-glass" className="px-5 py-2.5 hover:bg-neutral-50 hover:text-black transition-colors">Laminated Safety Glass</Link>
                  <Link to="/products/lacquered-glass" className="px-5 py-2.5 hover:bg-neutral-50 hover:text-black transition-colors">Lacquered Glass</Link>
                  <Link to="/products/designer-glass" className="px-5 py-2.5 hover:bg-neutral-50 hover:text-black transition-colors">Designer Glass</Link>
                  <Link to="/products/crystal-glass" className="px-5 py-2.5 hover:bg-neutral-50 hover:text-black transition-colors">Crystal (Low-Iron) Glass</Link>
                </div>
              </div>

              <Link to="/about" className="hover:text-black transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors font-semibold"
              >
                Download Brochure
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="md:hidden p-2 text-neutral-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-xl flex flex-col p-6 gap-4 z-40 animate-in slide-in-from-top-2 duration-200 overflow-y-auto max-h-[calc(100vh-5rem)]">
              <Link to="/" onClick={closeMobileMenu} className="text-lg font-semibold text-neutral-800 hover:text-black">Home</Link>
              
              {/* NEW: Mobile Products Accordion */}
              <div className="flex flex-col">
                <button 
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="flex items-center justify-between text-lg font-semibold text-neutral-800 hover:text-black w-full text-left"
                >
                  Products
                  <svg className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Sub-menu items */}
                {isMobileProductsOpen && (
                  <div className="flex flex-col gap-4 pl-4 mt-4 border-l-2 border-neutral-100">
                    <Link to="/products/appliance-glass" onClick={closeMobileMenu} className="text-neutral-600 hover:text-black">Appliance Glass</Link>
                    <Link to="/products/printed-glass" onClick={closeMobileMenu} className="text-neutral-600 hover:text-black">Printed Glass</Link>
                    <Link to="/products/laminated-glass" onClick={closeMobileMenu} className="text-neutral-600 hover:text-black">Laminated Safety Glass</Link>
                    <Link to="/products/lacquered-glass" onClick={closeMobileMenu} className="text-neutral-600 hover:text-black">Lacquered Glass</Link>
                    <Link to="/products/designer-glass" onClick={closeMobileMenu} className="text-neutral-600 hover:text-black">Designer Glass</Link>
                    <Link to="/products/crystal-glass" onClick={closeMobileMenu} className="text-neutral-600 hover:text-black">Crystal (Low-Iron) Glass</Link>
                  </div>
                )}
              </div>
              
              <Link to="/about" onClick={closeMobileMenu} className="text-lg font-semibold text-neutral-800 hover:text-black">About Us</Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-lg font-semibold text-neutral-800 hover:text-black">Contact</Link>
              
              <div className="pt-4 mt-2 border-t border-neutral-100">
                <button 
                  onClick={() => { closeMobileMenu(); setIsModalOpen(true); }}
                  className="w-full bg-black text-white px-5 py-3 rounded-lg hover:bg-neutral-800 transition-colors font-semibold"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/appliance-glass" element={<ApplianceGlass />} />
            <Route path="/products/printed-glass" element={<PrintedGlass />} />
            <Route path="/products/laminated-glass" element={<LaminatedGlass />} />
            <Route path="/products/lacquered-glass" element={<LacqueredGlass />} />
            <Route path="/products/designer-glass" element={<DesignerGlass />} />
            <Route path="/products/crystal-glass" element={<CrystalGlass />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* Global Footer & Contact Section */}
        <footer className="bg-neutral-950 text-neutral-400 py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter">ASM GLASS</h3>
              <p className="text-neutral-500 max-w-sm mb-6">
                Precision-engineered toughened and architectural glass for modern appliances, commercial spaces, and premium homes. Magnificently Tough.
              </p>
            </div>
            {/* Quick Links Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                {/* Links back to home page where the product grid is */}
                <li><Link to="/" className="hover:text-white transition-colors">Products</Link></li> 
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li className="pt-2">
                  <button onClick={() => setIsModalOpen(true)} className="text-white font-medium hover:text-neutral-300 transition-colors">
                    Download Brochure &rarr;
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-neutral-300">ASM Glass</p>
                    <p>Muzaffarnagar, Uttar Pradesh 251001</p>
                    <p>India</p>
                    <a href="https://share.google/bcJLIoiiWZ8TKdXcZ" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block transition-colors">
                      View on Google Maps &rarr;
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-neutral-500 shrink-0" />
                  <a href="tel:+919599104226" className="hover:text-white transition-colors">+91 9599104226</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neutral-500 shrink-0" />
                  <a href="mailto:info@asmglass.com" className="hover:text-white transition-colors">info@asmglass.com</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Brochure Lead Generation Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            {/* Increased max-w-2xl so the PDF has room to display nicely */}
            <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
              
              {/* Close Button - also resets the form when closed */}
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  setTimeout(() => setIsBrochureUnlocked(false), 300); // Reset after modal closes
                }}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                {!isBrochureUnlocked ? (
                  /* STEP 1: LEAD CAPTURE FORM */
                  <>
                    <h3 className="text-2xl font-bold mb-2 text-neutral-900">Get Our Full Catalog</h3>
                    <p className="text-neutral-500 mb-6 text-sm">
                      Enter your details to instantly view and download the complete ASM Glass product brochure.
                    </p>
                    <form className="space-y-4" onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmittingBrochure(true);
                      
                      const formData = new FormData(e.target);
                      
                      // Handle the country code and 10-digit number formatting
                      const countryCode = formData.get('countryCode');
                      const phoneDigits = formData.get('phone');
                      formData.set('phone', `'${countryCode} ${phoneDigits}`); // Added the ' for Sheets formatting
                      formData.delete('countryCode');

                      // Add a hidden traffic-cop label for the Google Script
                      formData.append('formType', 'Brochure');

                      const data = new URLSearchParams(formData);
                      
                      // 👇 PASTE YOUR GOOGLE SCRIPT URL HERE 👇
                      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOk4NoXvSQcRguPTF79M7RgCu0iPJw3Y0zhCMOAQXn_i0iWre8BX5m6r5TNfdKaf-2Uw/exec";

                      try {
                        await fetch(GOOGLE_SCRIPT_URL, {
                          method: "POST",
                          mode: "no-cors",
                          body: data
                        });
                        
                        setIsSubmittingBrochure(false);
                        setIsBrochureUnlocked(true); // Unlock the PDF!
                      } catch (error) {
                        console.error("Form submission error:", error);
                        setIsSubmittingBrochure(false);
                        // We still unlock it even if there's an error so the user isn't stuck
                        setIsBrochureUnlocked(true);
                      }
                    }}>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                        {/* Added name="name" */}
                        <input required name="name" type="text" placeholder="e.g. Rahul Sharma" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                        <div className="flex">
                           {/* Added Country Code Dropdown */}
                           <select 
                            name="countryCode" 
                            defaultValue="+91"
                            className="px-2 py-2 border border-r-0 border-neutral-300 bg-neutral-50 text-neutral-600 rounded-l-lg focus:ring-2 focus:ring-black outline-none transition-all cursor-pointer text-sm"
                          >
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+971">+971</option>
                            <option value="+61">+61</option>
                          </select>
                          {/* Added name="phone" and length restrictions */}
                          <input required name="phone" type="tel" pattern="[0-9]{10}" maxLength="10" title="Please enter exactly 10 digits" placeholder="9999999999" className="w-full px-4 py-2 border border-neutral-300 rounded-r-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" />
                        </div>
                      </div>
                      
                      <button type="submit" disabled={isSubmittingBrochure} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors mt-2 disabled:opacity-70">
                        {isSubmittingBrochure ? 'Unlocking...' : 'Unlock Brochure'}
                      </button>
                    </form>
                  </>
                ) : (
                  /* STEP 2: PDF VIEWER & DOWNLOAD (Unlocked state) */
                  <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold mb-2 text-neutral-900 text-left">Your Brochure is Ready</h3>
                    
                    {/* The iframe displays the PDF directly on the page */}
                    <div className="w-full h-80 md:h-96 border border-neutral-200 rounded-lg mb-6 overflow-hidden bg-neutral-100">
                      <iframe 
                        src="/asm-brochure.pdf" 
                        title="ASM Glass Brochure"
                        className="w-full h-full"
                      ></iframe>
                    </div>

                    {/* The download attribute forces the file to download to their device */}
                    <a 
                      href="/asm-brochure.pdf" 
                      download="ASM_Glass_Brochure.pdf"
                      className="inline-flex w-full justify-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      Download PDF to Device
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

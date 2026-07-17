import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, X, Menu } from 'lucide-react'; // Added Menu icon
import Home from './pages/Home';
import ApplianceGlass from './pages/ApplianceGlass';
import PrintedGlass from './pages/PrintedGlass';
import LaminatedGlass from './pages/LaminatedGlass';
import LacqueredGlass from './pages/LacqueredGlass';
import DesignerGlass from './pages/DesignerGlass';
import CrystalGlass from './pages/CrystalGlass';
import Contact from './pages/Contact';
import About from './pages/About';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  // Helper function to close mobile menu when a link is clicked
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans flex flex-col relative">
        
        {/* Global Premium Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" onClick={closeMobileMenu} className="text-2xl font-bold tracking-tighter">ASM GLASS</Link>
            
            {/* Desktop Navigation (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              
              {/* Products Dropdown */}
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

          {/* Mobile Navigation Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 shadow-xl flex flex-col p-6 gap-4 z-40 animate-in slide-in-from-top-2 duration-200">
              <Link to="/" onClick={closeMobileMenu} className="text-lg font-semibold text-neutral-800 hover:text-black">Home</Link>
              
              {/* In mobile, we'll link directly to the first product to keep it simple, or you can create a dedicated product catalog page later */}
              <Link to="/products/appliance-glass" onClick={closeMobileMenu} className="text-lg font-semibold text-neutral-800 hover:text-black">Products</Link>
              
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
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/products/appliance-glass" className="hover:text-white transition-colors">Products</Link></li>
                <li><button onClick={() => setIsModalOpen(true)} className="hover:text-white transition-colors">Download Brochure</button></li>
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
            <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-neutral-900">Get Our Full Catalog</h3>
                <p className="text-neutral-500 mb-6 text-sm">
                  Enter your details to instantly download the complete ASM Glass product brochure and specifications.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                    <input type="text" placeholder="e.g. Rahul Sharma" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 border-neutral-300 bg-neutral-50 text-neutral-500 rounded-l-lg text-sm">+91</span>
                      <input type="tel" placeholder="99999 99999" className="w-full px-4 py-2 border border-neutral-300 rounded-r-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors mt-2">
                    Request OTP & Download
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    
    // 👇 THIS IS THE MAGIC TRICK 👇
    // We grab the separate country code and phone number...
    const countryCode = formData.get('countryCode');
    const phoneDigits = formData.get('phone');
    // ...combine them perfectly for Google Sheets...
    formData.set('phone', `'${countryCode} ${phoneDigits}`);
    // ...and delete the standalone country code so it doesn't confuse the script!
    formData.delete('countryCode');

    const data = new URLSearchParams(formData);
    
    // Make sure your /exec URL is pasted here!
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOk4NoXvSQcRguPTF79M7RgCu0iPJw3Y0zhCMOAQXn_i0iWre8BX5m6r5TNfdKaf-2Uw/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: data 
      });
      
      setFormStatus('success');
      e.target.reset(); 
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('idle');
      alert("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <main className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto">
          Have a question about our products or want to request a quote? Fill out the form below and our team will get back to you promptly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                <input required name="name" type="text" className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all" placeholder="John Doe" />
              </div>
              
              {/* 👇 UPDATED PHONE INPUT SECTION 👇 */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                <div className="flex">
                  <select 
                    name="countryCode" 
                    defaultValue="+91"
                    className="px-2 py-3 border border-r-0 border-neutral-300 bg-neutral-50 text-neutral-600 rounded-l-lg focus:ring-2 focus:ring-black outline-none transition-all cursor-pointer text-sm"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+61">+61 (AUS)</option>
                  </select>
                  <input 
                    required 
                    name="phone" 
                    type="tel" 
                    pattern="[0-9]{10}"
                    maxLength="10"
                    title="Please enter exactly 10 digits"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-r-lg focus:ring-2 focus:ring-black outline-none transition-all" 
                    placeholder="9999999999" 
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
              <input required name="email" type="email" className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all" placeholder="john@company.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
              <textarea required name="message" rows="4" className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-neutral-800 transition-colors disabled:opacity-70"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-center font-medium animate-in fade-in">
                Thank you! Your message has been sent successfully. Our team will contact you soon.
              </div>
            )}
          </form>
        </div>

        {/* Contact Information & Map */}
        {/* Contact Information & Map */}
        <div className="flex flex-col gap-10">
          
          {/* Updated "Our Information" Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-neutral-900">Our Information</h3>
            <ul className="space-y-8">
              
              <li className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-neutral-900" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-lg text-neutral-900">Head Office & Factory</p>
                  <p className="text-neutral-600 mt-1 leading-relaxed">ASM Glass, Muzaffarnagar<br/>Uttar Pradesh 251001, India</p>
                </div>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-neutral-900" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-lg text-neutral-900">Phone</p>
                  <a href="tel:+919599104226" className="text-neutral-600 hover:text-black transition-colors mt-1 block">
                    +91 9599104226
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-neutral-900" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-lg text-neutral-900">Email</p>
                  <a href="mailto:info@asmglass.com" className="text-neutral-600 hover:text-black transition-colors mt-1 block">
                    info@asmglass.com
                  </a>
                </div>
              </li>
              
            </ul>
          </div>

          {/* Google Maps Embed (Leaves this exactly as it was) */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm h-64 md:h-auto md:flex-grow">
            <iframe 
              title="ASM Glass Location"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.3797857962695!2d77.75540747589261!3d29.47611597521463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c05532f60d945%3A0x5895aa28ed42d27e!2sASM%20Glass!5e0!3m2!1sen!2sin!4v1784373567471!5m2!1sen!2sin" 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

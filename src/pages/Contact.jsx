import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <main className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
          Get in touch with our team for bulk orders, OEM requirements, or general inquiries.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">First Name</label>
                <input type="text" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black outline-none"></textarea>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Info & Google Map */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Information</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-full"><MapPin className="w-6 h-6 text-black" /></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Head Office & Factory</h4>
                  <p className="text-neutral-600 mt-1">ASM Glass, Muzaffarnagar<br/>Uttar Pradesh 251001, India</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-full"><Phone className="w-6 h-6 text-black" /></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Phone</h4>
                  <p className="text-neutral-600 mt-1"><a href="tel:+919599104226" className="hover:text-black">+91 9599104226</a></p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-full"><Mail className="w-6 h-6 text-black" /></div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Email</h4>
                  <p className="text-neutral-600 mt-1"><a href="mailto:info@asmglass.com" className="hover:text-black">info@asmglass.com</a></p>
                </div>
              </li>
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm h-72">
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

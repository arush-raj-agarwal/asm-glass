import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export default function ApplianceGlass() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeImage, setActiveImage] = useState(0); // <-- ADD THIS LINE

// The images for your gallery
    const gallery = [
    "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&q=80",
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80"
    ];
  

  const faqs = [
    { q: "What is the maximum heat resistance?", a: "Our toughened cooktop glass can comfortably withstand temperatures up to 250°C without compromising structural integrity." },
    { q: "Do you offer custom dimensions?", a: "Yes, we utilize precision CNC cutting to match the exact specifications required by OEM appliance manufacturers." },
    { q: "Do you offer custom dimensions?", a: "Yes, we utilize precision CNC cutting to match the exact specifications required by OEM appliance manufacturers." },
    { q: "Do you offer custom dimensions?", a: "Yes, we utilize precision CNC cutting to match the exact specifications required by OEM appliance manufacturers." },
    { q: "Is the printed design scratch-resistant?", a: "Absolutely. We use ceramic frits fired directly into the glass during the toughening process, making the designs permanent and highly scratch-resistant." }
  ];

  return (
    <main className="pb-24">
      {/* Product Header */}
      <section className="bg-neutral-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-neutral-400 font-medium mb-4 uppercase tracking-widest text-sm">Product Line</p>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Appliance Glass</h1>
          <p className="text-xl text-neutral-300 max-w-2xl">
            High-strength, thermally resistant glass tailored for gas stoves, chimneys, and refrigerators. Built for safety and designed for modern kitchen aesthetics.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-16">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8">Engineering Specs</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {['Thermal Shock Resistance', 'Impact Resistant (EN 12150)', 'Custom CNC Edging', 'Ceramic Frit Printing'].map((spec) => (
              <div key={spec} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                <span className="font-medium text-neutral-700">{spec}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg hover:bg-neutral-50"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 text-neutral-600 border-t border-neutral-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Gallery & Clients */}
        <aside className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Product Gallery</h3>

            {/* Main Large Image */}
            <div className="w-full h-64 md:h-80 bg-neutral-100 rounded-xl overflow-hidden mb-4 border border-neutral-200">
                <img 
                src={gallery[activeImage]} 
                className="w-full h-full object-cover transition-opacity duration-300" 
                alt="Product view" 
                />
            </div>

            {/* Scrollable Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x hide-scrollbar">
                {gallery.map((img, idx) => (
                <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)} 
                    className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx}`} />
                </button>
                ))}
            </div>
            </div>

          <div className="bg-neutral-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Trusted By Manufacturers</h3>
            <p className="text-neutral-600 mb-6">We supply OEM glass components to leading appliance brands across India.</p>
            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
              Request a Sample
            </button>
          </div>
        </aside>

      </div>
    </main>
  );
}
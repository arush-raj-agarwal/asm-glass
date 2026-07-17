import { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export default function CrystalGlass() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What makes it different from standard clear glass?", a: "Standard glass has a noticeable green tint due to iron content, especially visible on the edges. Crystal glass uses a low-iron formula to eliminate this tint, resulting in pure transparency." },
    { q: "Is Crystal Glass as strong as standard glass?", a: "Yes. Once processed, our low-iron crystal glass can be fully toughened or laminated, providing the exact same structural strength as standard glass." },
    { q: "Where is Crystal Glass typically used?", a: "It is the standard for high-end retail displays, jewelry cases, premium architectural facades, and anywhere true color rendering is essential." }
  ];

  return (
    <main className="pb-24">
      <section className="bg-neutral-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-neutral-400 font-medium mb-4 uppercase tracking-widest text-sm">Product Line</p>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">Crystal (Low-Iron) Glass</h1>
          <p className="text-xl text-neutral-300 max-w-2xl">
            Ultra-clear glass with zero green tint. The ultimate choice for premium displays, high-end facades, and maximum light transmission.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-8">Engineering Specs</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {['Ultra-Low Iron Content', '99% Clarity', 'True Color Rendering', 'Maximum Light Transmission'].map((spec) => (
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
                {openFaq === index && <div className="p-6 pt-0 text-neutral-600 border-t border-neutral-100">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-12">
          <div className="bg-neutral-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Unmatched Clarity</h3>
            <p className="text-neutral-600 mb-6">Ensure your products and spaces are seen exactly as intended.</p>
            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors">
              Request a Sample
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
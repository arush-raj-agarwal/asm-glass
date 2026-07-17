import { ShieldCheck, Factory, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <main className="pb-24">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
            alt="Manufacturing Facility" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-neutral-400 font-medium mb-4 uppercase tracking-widest text-sm">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            A Homegrown Legacy of Precision.
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl leading-relaxed">
            For over 5 years, ASM Glass has been setting the industry standard for toughened and architectural glass. Guided by the vision of our founder, Arnav Agarwal, we have grown into a trusted manufacturing powerhouse.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="bg-neutral-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Factory className="w-7 h-7 text-neutral-900" />
            </div>
            <h3 className="text-2xl font-bold mb-3">State-of-the-Art Facility</h3>
            <p className="text-neutral-600 leading-relaxed">
              Located in Uttar Pradesh, our cutting-edge manufacturing unit is equipped with fully automatic CNC machines and processing lines, ensuring zero compromise on precision and scale.
            </p>
          </div>
          <div>
            <div className="bg-neutral-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-neutral-900" />
            </div>
            <h3 className="text-2xl font-bold mb-3">In-House Testing</h3>
            <p className="text-neutral-600 leading-relaxed">
              Quality is engineered into every pane. Our rigorous in-house testing laboratories ensure that every batch meets the absolute highest safety and durability standards before deployment.
            </p>
          </div>
          <div>
            <div className="bg-neutral-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-neutral-900" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Certified Excellence</h3>
            <p className="text-neutral-600 leading-relaxed">
              We are proudly ISI and BIS certified. Our commitment to strict regulatory compliance guarantees that our products deliver magnificent toughness you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Materials & Partners Section */}
      <section className="bg-neutral-50 py-24 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Trusted by Industry Leaders</h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              We don't just supply glass; we power the products of India's biggest brands. As a primary OEM manufacturer, our glass is integrated into the premium appliances of household names across the nation.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {['Sunflame', 'Prestige', 'Wonderchef', 'Faber'].map((brand) => (
                <div key={brand} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <span className="font-semibold text-neutral-800">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border border-neutral-100">
            <h3 className="text-2xl font-bold mb-6 border-b border-neutral-100 pb-4">Premium Raw Materials</h3>
            <p className="text-neutral-600 mb-8">
              A superior final product requires superior ingredients. We exclusively source our raw glass from the world's most renowned float glass manufacturers to ensure absolute clarity and structural integrity.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Partnered With</p>
                <div className="flex flex-wrap gap-4 text-xl font-bold text-neutral-300">
                  <span className="text-neutral-800">Saint-Gobain</span>
                  <span>•</span>
                  <span className="text-neutral-800">Şişecam</span>
                  <span>•</span>
                  <span className="text-neutral-800">Gold Plus</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
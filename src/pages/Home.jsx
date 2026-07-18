import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  // This array holds all your product data and image paths
  const products = [
    { id: 1, name: 'Cooktop Glass', image: '/products/cooktop-glass.png', link: '/products/appliance-glass' },
    { id: 2, name: 'Printed Glass', image: '/products/printed-glass.jpg', link: '/products/printed-glass' },
    { id: 3, name: 'Laminated Glass', image: '/products/laminated-glass.png', link: '/products/laminated-glass' },
    { id: 4, name: 'Lacquered Glass', image: '/products/lacquered-glass.jpeg', link: '/products/lacquered-glass' },
    { id: 5, name: 'Designer Glass', image: '/products/designer-glass.png', link: '/products/designer-glass' },
    { id: 6, name: 'Crystal Glass', image: '/products/crystal-glass.jpeg', link: '/products/crystal-glass' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/products/cooktop-glass.png" 
            alt="Glass Manufacturing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Magnificently Tough.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl">
            Precision-engineered toughened and architectural glass for modern appliances, commercial spaces, and premium homes.
          </p>
          <Link to="/products/appliance-glass" className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-neutral-200 transition-all">
            Explore Our Range
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Infinite Logo Carousel */}
<section className="py-12 bg-white border-b border-neutral-200 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 mb-6 text-center text-sm font-semibold text-neutral-400 uppercase tracking-widest">
    Certified & Trusted By
  </div>
  <div className="flex overflow-hidden relative">
    <div className="flex animate-scroll gap-16 items-center px-8">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-16 items-center">
          {/* Replaced <span> with <img> */}
          <img 
            src="/public/logos/bis.jpeg" 
            alt="BIS Certified" 
            className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" 
          />
          <img 
            src="/public/logos/makeIndia.jpeg" 
            alt="Make in India" 
            className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" 
          />
          <img 
            src="/public/logos/saint-gobain.jpeg" 
            alt="Saint Gobain" 
            className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" 
          />
          <img 
            src="/public/logos/sisecam.jpeg" 
            alt="Sisecam" 
            className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" 
          />
          <img 
            src="/public/logos/gold-plus.jpeg" 
            alt="Gold-Plus" 
            className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* NEW: 3x2 Product Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Our Products</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality glass solutions designed for durability, safety, and aesthetic excellence.
          </p>
        </div>
        
        {/* Grid Container: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={product.link} 
              className="group relative h-[350px] overflow-hidden rounded-xl bg-neutral-200 block"
            >
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:from-black/90" />
              
              {/* Image with hover zoom effect */}
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                onError={(e) => {
                  // Fallback in case the image isn't added to the folder yet
                  e.target.src = 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80';
                }}
              />
              
              {/* Bottom Text Area */}
              <div className="absolute bottom-6 left-6 z-20 text-white flex justify-between items-end w-[calc(100%-48px)]">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
          {/* Why Choose Us Section */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-neutral-800 mb-20 tracking-tight">
            Why Choose Us ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Quality */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Quality</h3>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                We assure 100% quality assurance for our products, gone through rigorous testing and have received all certifications.
              </p>
            </div>

            {/* Variety */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Variety</h3>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                We at ASM believe that everyone has different needs, so we provide a wide range of products that suits your needs.
              </p>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Support</h3>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                We provide great after-sales service that we are very proud of. You can reach us 24/7 through e-mail or directly reach us at our address.
              </p>
            </div>

            {/* Trust */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Trust</h3>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                We have done work in a wide range of industries and areas, making our customers proud and satisfied with our work.
              </p>
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}

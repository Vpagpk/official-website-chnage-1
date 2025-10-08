import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black pt-28 md:pt-36 pb-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <div className="animate-fade-in mb-8">
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold uppercase tracking-wider">
            Visit Us
          </span>
        </div>

        <h2 className="font-display text-5xl md:text-7xl font-black mb-8 text-foreground tracking-tighter animate-fade-in animate-delay-100">
          Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">Studio Location</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-20 font-medium animate-fade-in animate-delay-200">
          Located in the heart of Lahore, Punjab - Come experience authentic Pakistani cultural dance in our state-of-the-art studio facility.
        </p>

        <div className="max-w-2xl mx-auto animate-fade-in animate-delay-300">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-amber-500/20 to-primary/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-2 border-zinc-800/80 hover:border-primary/50 rounded-3xl p-10 md:p-12 mb-[-80px] z-20 backdrop-blur-2xl shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary/20 overflow-hidden">
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              <div className="flex items-center justify-center gap-5 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border-2 border-amber-400/50 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <MapPin className="h-8 w-8 text-amber-400" aria-label="Map pin icon" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                  Studio Address
                </h3>
              </div>
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
                Experience world-class dance training and witness authentic cultural performances at our premier facility in Pakistan's cultural capital.
              </p>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -left-2 w-24 h-24 border-2 border-primary/20 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute -top-2 -right-2 w-24 h-24 border-2 border-amber-400/20 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Map Section */}
      <div className="relative h-80 md:h-96 -mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-zinc-900 to-black"></div>
        
        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(245,158,11,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        {/* Top Gradient Fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
    </section>
  );
};

export default LocationSection;
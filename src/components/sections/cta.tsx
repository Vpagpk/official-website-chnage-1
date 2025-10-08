import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-950 py-20 sm:py-24 md:py-32 lg:py-40 border-t-2 border-primary/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-primary/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* Radial Light Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_70%)]"></div>

      <div className="container relative text-center px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6 sm:mb-8 animate-fade-in">
            <span className="px-4 sm:px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-bold uppercase tracking-widest">
              Ready to Book?
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white max-w-5xl mx-auto leading-[1.1] mb-6 sm:mb-8 tracking-tighter animate-fade-in animate-delay-100">
            Experience Authentic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">
              Pakistani Culture
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-14 leading-relaxed font-medium animate-fade-in animate-delay-200">
            Join 1,100+ satisfied clients. Book your cultural experience today and create unforgettable memories.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center animate-fade-in animate-delay-300">
            <Link
              href="/contact"
              aria-label="Get a custom quote for your event"
              className="group relative inline-flex items-center justify-center rounded-xl bg-primary px-10 py-5 text-lg font-bold text-black transition-all duration-500 hover:bg-primary/90 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>

            <Link
              href="/gallery"
              aria-label="Watch V.PAG dance performances"
              className="group relative inline-flex items-center justify-center rounded-xl border-2 border-zinc-700 bg-zinc-900/70 px-10 py-5 text-lg font-bold text-white transition-all duration-500 hover:border-primary hover:bg-primary/10 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 backdrop-blur-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                Watch Performances
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-zinc-800/50 animate-fade-in animate-delay-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center group">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">22+</div>
                <p className="text-zinc-400 font-semibold group-hover:text-zinc-300 transition-colors duration-300">Years Experience</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">1.1k+</div>
                <p className="text-zinc-400 font-semibold group-hover:text-zinc-300 transition-colors duration-300">Happy Clients</p>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">1k+</div>
                <p className="text-zinc-400 font-semibold group-hover:text-zinc-300 transition-colors duration-300">Performances</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
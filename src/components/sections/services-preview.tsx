import React from 'react';
import Link from 'next/link';
import { Disc, Music2, GraduationCap, Heart } from 'lucide-react';

const serviceItems = [
  {
    icon: Disc,
    title: "Sufi Dance",
    description: "Authentic whirling ceremonies",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Music2,
    title: "Cultural Shows",
    description: "Folk & classical performances",
    gradient: "from-primary/20 to-amber-400/20",
  },
  {
    icon: GraduationCap,
    title: "Dance Training",
    description: "Kathak & cultural classes",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Heart,
    title: "Wedding Events",
    description: "Bespoke celebrations",
    gradient: "from-amber-400/20 to-primary/20",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 relative overflow-hidden py-16 sm:py-20 md:py-28 lg:py-36">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 md:mb-24 animate-fade-in">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 tracking-tighter">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">
              Dance Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Comprehensive cultural dance services across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {serviceItems.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-full bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border-2 border-zinc-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center group cursor-pointer transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 will-change-transform relative overflow-hidden touch-manipulation">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 mb-6 sm:mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 text-primary transition-all duration-500 group-hover:scale-110 sm:group-hover:scale-125 group-hover:border-primary group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-primary/50">
                      <item.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                    </div>
                  </div>
                </div>

                <h3 className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="relative z-10 text-zinc-300 leading-relaxed text-sm sm:text-base group-hover:text-zinc-200 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Bottom Shine Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in animate-delay-600">
          <Link
            href="/services"
            aria-label="Explore All Services"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold border-2 border-zinc-700 bg-zinc-900/70 rounded-xl transition-all duration-500 hover:border-primary hover:bg-primary/10 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 text-zinc-300 hover:text-white overflow-hidden touch-manipulation"
          >
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
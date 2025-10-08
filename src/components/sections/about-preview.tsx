import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Tent, Crown, Globe, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Tent,
    title: 'Specializing in:',
    description: 'Authentic Sufi dance, classical performances & traditional folk arts',
  },
  {
    icon: Crown,
    title: 'Founded by:',
    description: 'Renowned artist Sir Muhammad Fayyaz',
  },
  {
    icon: Globe,
    title: 'Global reach:',
    description: 'International stages & cultural preservation',
  },
  {
    icon: GraduationCap,
    title: 'Training:',
    description: 'World-class performers & certified instructors',
  },
];

const FeatureCard = ({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) => {
  return (
    <div 
      className="flex items-start gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border-2 border-zinc-800/50 hover:border-primary/50 hover:bg-zinc-900/70 transition-all duration-500 group will-change-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 touch-manipulation"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 mt-0.5 sm:mt-1 relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
        <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 flex items-center justify-center text-primary group-hover:scale-125 group-hover:border-primary group-hover:rotate-12 transition-all duration-500">
          <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6" />
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <strong className="text-primary font-bold text-base sm:text-lg block mb-1.5 sm:mb-2 group-hover:text-amber-400 transition-colors duration-300 leading-tight">{title}</strong>
        <p className="text-zinc-300 leading-relaxed text-sm sm:text-base group-hover:text-zinc-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const AboutPreview = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8 sm:space-y-10 animate-fade-in order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block">
                  <span className="px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
                    About VPAG
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-white tracking-tighter">
                  Pakistan's Leading{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">
                    Cultural Arts
                  </span>{' '}
                  Institution
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} index={index} />
                ))}
              </div>

              <div className="pt-4 sm:pt-6">
                <Link
                  href="/about"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center whitespace-nowrap rounded-xl text-base sm:text-lg font-bold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 active:scale-95 px-8 sm:px-10 py-4 sm:py-5 h-auto overflow-hidden touch-manipulation"
                >
                  <span className="relative z-10">Our Heritage Story</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </div>
            </div>

            {/* Right Image with Enhanced Effects */}
            <div className="relative group animate-fade-in animate-delay-300 order-1 lg:order-2 mb-8 lg:mb-0">
              {/* Glow Effect */}
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-primary/30 via-amber-500/20 to-primary/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 sm:border-3 md:border-4 border-primary/20 rounded-2xl sm:rounded-3xl rotate-12 group-hover:rotate-24 transition-transform duration-700"></div>
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 sm:border-3 md:border-4 border-primary/10 rounded-2xl sm:rounded-3xl -rotate-12 group-hover:-rotate-24 transition-transform duration-700"></div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 group-hover:from-primary/30 transition-colors duration-500"></div>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-152755-about-image-B8DwQPlU-2.jpg?"
                  alt="V.PAG Dance Company master performing traditional Pakistani classical Kathak dance in ornate cultural costume with precise hand gestures and expressions showcasing years of artistic training"
                  width={600}
                  height={700}
                  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover shadow-2xl transition-all duration-700 group-hover:scale-105 sm:group-hover:scale-110 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-zinc-900 to-black border-2 border-primary/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-2xl backdrop-blur-xl animate-float">
                <p className="text-primary font-black text-lg sm:text-xl md:text-2xl">22+ Years</p>
                <p className="text-zinc-300 text-xs sm:text-sm font-semibold">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
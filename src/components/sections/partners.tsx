import Image from 'next/image';

const partners = [
  {
    name: 'Pakistan Television',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-409643-ptv.png?',
    alt: 'Pakistan Television Corporation logo',
  },
  {
    name: 'Haier Pakistan',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-975497-haier-pakistan.png?',
    alt: 'Haier Pakistan logo',
  },
  {
    name: 'Bata Pakistan',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-822033-bata-pakistan.jpg?',
    alt: 'Bata Pakistan logo',
  },
  {
    name: 'Atlas Honda Limited',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-861102-atlas-honda.png?',
    alt: 'Atlas Honda Limited logo',
  },
  {
    name: 'Alhamra Arts Council',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-768723-alhamra-arts-council.png?',
    alt: 'Alhamra Arts Council logo',
  },
  {
    name: 'National Bank of Pakistan',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-781220-nbp.png?',
    alt: 'National Bank of Pakistan logo',
  },
];

const stats = [
  { value: '500+', title: 'Corporate Events', description: 'Successfully delivered' },
  { value: '50+', title: 'Brand Partnerships', description: 'Across Pakistan' },
  { value: '22+', title: 'Years of Excellence', description: 'In cultural arts' },
];

const PartnersSection = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-y border-zinc-800/30 py-28 sm:py-36 relative overflow-hidden" id="partners">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30">
              Our Partners
            </span>
          </div>
          <h2 className="font-display text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl mb-8">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">Leading Organizations</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl md:text-2xl leading-relaxed text-zinc-300 font-medium">
            Collaborating with prestigious brands and institutions to deliver exceptional cultural performances nationwide
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <div 
              key={partner.name} 
              className="col-span-1 flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-amber-500/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Card */}
                <div className="relative flex h-48 w-full items-center justify-center rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-10 border-2 border-zinc-800/80 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 hover:-translate-y-2 will-change-transform overflow-hidden">
                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={180}
                    height={60}
                    className="relative h-16 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-2xl filter grayscale-0"
                  />
                </div>
              </div>
              <p className="mt-5 text-zinc-400 font-semibold group-hover:text-primary transition-colors duration-300">{partner.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 mb-16 border-t-2 border-primary/30 pt-20">
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {stats.map((stat, index) => (
              <div 
                key={stat.title} 
                className="relative group animate-fade-in"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="font-display text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-amber-400 to-primary group-hover:scale-125 transition-transform duration-500 inline-block">{stat.value}</div>
                  <h3 className="mt-4 text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">{stat.title}</h3>
                  <p className="mt-2 text-base text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
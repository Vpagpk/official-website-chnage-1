import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import VideoGallery from '@/components/sections/video-gallery';
import Image from 'next/image';
import { Image as ImageIcon, Video } from 'lucide-react';

export const metadata = {
  title: 'Gallery | VPAG Dance Company - Photos & Videos of Cultural Performances',
  description: 'Browse our gallery of authentic Pakistani cultural dance performances. Explore photos of Sufi whirling, Kathak, folk dances, and traditional performances from 22+ years.',
  keywords: 'VPAG gallery, Pakistani dance photos, Sufi performance videos, cultural dance images, traditional performance gallery',
  openGraph: {
    title: 'Performance Gallery - VPAG Dance Company',
    description: 'Explore stunning photos and videos from our cultural dance performances.',
    type: 'website',
  }
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-950 to-zinc-950" aria-hidden="true">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="animate-fade-in">
              <Breadcrumbs />
            </div>
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-6 animate-slide-up">
                <Video className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                Photos & Videos
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up animate-delay-100">
                Performance <span className="text-primary">Gallery</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
                Watch our mesmerizing cultural dance performances and experience the beauty of Pakistani traditional arts
              </p>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <VideoGallery />

        {/* Photo Gallery Section */}
        <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-6">
                <ImageIcon className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                Photo Collection
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Photo <span className="text-primary">Highlights</span>
              </h2>
              <p className="text-zinc-300 text-lg md:text-xl">
                Capturing the essence of Pakistani cultural performances
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Photo 1 - Hero Performance */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-715657-IMAGE56_1758785926748.webp?"
                  alt="Grand theater cultural dance performance"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Grand Theater Performance</h3>
                    <p className="text-zinc-300 text-sm">Large-scale cultural showcase</p>
                  </div>
                </div>
              </div>

              {/* Photo 2 - Traditional Dancer */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-152755-about-image-B8DwQPlU-2.jpg?"
                  alt="Traditional Kathak dancer in cultural costume"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Classical Kathak</h3>
                    <p className="text-zinc-300 text-sm">Traditional dance artistry</p>
                  </div>
                </div>
              </div>

              {/* Photo 3 - Live Performance */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-677576-maxresdefault.jpg?"
                  alt="Live cultural performance"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Live Performance</h3>
                    <p className="text-zinc-300 text-sm">Captivating audiences</p>
                  </div>
                </div>
              </div>

              {/* Photo 4 - Cultural Festival */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-763903-maxresdefault-3.jpg?"
                  alt="Punjab Culture Day celebration"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Punjab Culture Day</h3>
                    <p className="text-zinc-300 text-sm">Celebrating heritage</p>
                  </div>
                </div>
              </div>

              {/* Photo 5 - Sufi Whirling */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-383062-maxresdefault-8.jpg?"
                  alt="Sufi whirling performance"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Sufi Whirling</h3>
                    <p className="text-zinc-300 text-sm">Spiritual elegance</p>
                  </div>
                </div>
              </div>

              {/* Photo 6 - Ensemble Performance */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-121209-maxresdefault-4.jpg?"
                  alt="Folk dance ensemble"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Folk Dance Ensemble</h3>
                    <p className="text-zinc-300 text-sm">Group performances</p>
                  </div>
                </div>
              </div>

              {/* Photo 7 - Wedding Events */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-270473-maxresdefault-5.jpg?"
                  alt="Wedding performance highlights"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Wedding Celebration</h3>
                    <p className="text-zinc-300 text-sm">Special event performances</p>
                  </div>
                </div>
              </div>

              {/* Photo 8 - VPAG Logo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500 bg-zinc-900 flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-852845-vpag-logo.png?"
                  alt="VPAG Logo - Versatile Performing Art Group"
                  width={300}
                  height={300}
                  className="object-contain transition-all duration-700 group-hover:scale-110 p-12"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">V.PAG</h3>
                    <p className="text-zinc-300 text-sm">Our official emblem</p>
                  </div>
                </div>
              </div>

              {/* Photo 9 - PTV Partner Logo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500 bg-zinc-900 flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-409643-ptv.png?"
                  alt="Pakistan Television Corporation partner"
                  width={200}
                  height={200}
                  className="object-contain transition-all duration-700 group-hover:scale-110 p-12"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">PTV Partnership</h3>
                    <p className="text-zinc-300 text-sm">Broadcast excellence</p>
                  </div>
                </div>
              </div>

              {/* Photo 10 - Haier Partner Logo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500 bg-zinc-900 flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-975497-haier-pakistan.png?"
                  alt="Haier Pakistan corporate partner"
                  width={200}
                  height={200}
                  className="object-contain transition-all duration-700 group-hover:scale-110 p-12"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Haier Events</h3>
                    <p className="text-zinc-300 text-sm">Corporate collaborations</p>
                  </div>
                </div>
              </div>

              {/* Photo 11 - Bata Partner Logo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500 bg-zinc-900 flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-822033-bata-pakistan.jpg?"
                  alt="Bata Pakistan brand partner"
                  width={200}
                  height={200}
                  className="object-contain transition-all duration-700 group-hover:scale-110 p-12"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Bata Partnership</h3>
                    <p className="text-zinc-300 text-sm">Brand collaborations</p>
                  </div>
                </div>
              </div>

              {/* Photo 12 - Atlas Honda Partner Logo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500 bg-zinc-900 flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-861102-atlas-honda.png?"
                  alt="Atlas Honda Limited partner"
                  width={200}
                  height={200}
                  className="object-contain transition-all duration-700 group-hover:scale-110 p-12"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Atlas Honda</h3>
                    <p className="text-zinc-300 text-sm">Corporate events</p>
                  </div>
                </div>
              </div>

              {/* Photo 13 - Alhamra Partner Logo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500 bg-zinc-900 flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-768723-alhamra-arts-council.png?"
                  alt="Alhamra Arts Council cultural partner"
                  width={200}
                  height={200}
                  className="object-contain transition-all duration-700 group-hover:scale-110 p-12"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">Alhamra Arts</h3>
                    <p className="text-zinc-300 text-sm">Cultural festivals</p>
                  </div>
                </div>
              </div>

              {/* Photo 14 - NBP Partner Logo */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-primary/50 transition-all duration-500 bg-zinc-900 flex items-center justify-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/663181b5-8337-4075-ab8c-a7be9fcca289-a558ba3c-1f21-45e6-ae1c-865779d39d5a-00-1mtjwxz4tb9hm-sisko-replit-dev/assets/images/next-781220-nbp.png?"
                  alt="National Bank of Pakistan partner"
                  width={200}
                  height={200}
                  className="object-contain transition-all duration-700 group-hover:scale-110 p-12"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">NBP Events</h3>
                    <p className="text-zinc-300 text-sm">Financial sector partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
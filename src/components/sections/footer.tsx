import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import NewsletterSignup from "@/components/ui/newsletter-signup";

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-300" role="contentinfo">
      <div className="container py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div className="space-y-4 pr-0 lg:pr-8 sm:col-span-2 lg:col-span-1">
            <a href="/" className="mb-4 inline-block" aria-label="VPAG Home">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMAGE00-1759911028053.webp"
                alt="VPAG - Versatile Performing Art Group Logo"
                width={100}
                height={100}
                className="object-contain w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
              />
            </a>
            <h3 className="font-semibold text-base sm:text-lg text-white leading-tight">
              VPAG - Versatile Performing Art Group
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Preserving Pakistani cultural heritage through authentic dance
              performances, training programs, and artistic excellence for over
              22 years.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-6 font-bold text-lg text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-zinc-400 hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Home</a></li>
              <li><a href="/about" className="text-zinc-400 hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">About Us</a></li>
              <li><a href="/services" className="text-zinc-400 hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Services</a></li>
              <li><a href="/gallery" className="text-zinc-400 hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Gallery</a></li>
              <li><a href="/faq" className="text-zinc-400 hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">FAQ</a></li>
              <li><a href="/blog" className="text-zinc-400 hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Blog</a></li>
              <li><a href="/contact" className="text-zinc-400 hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="mb-6 font-bold text-lg text-white tracking-wide">
              Get in Touch
            </h4>
            <ul className="mb-6 space-y-4 text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" aria-hidden="true" />
                <span>Lahore, Punjab, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 shrink-0" aria-hidden="true" />
                <a href="tel:+923009402878" className="hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">
                  +92 300 9402878
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 shrink-0" aria-hidden="true" />
                <a href="mailto:info@vpag.pk" className="hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">
                  info@vpag.pk
                </a>
              </li>
            </ul>

            <h5 className="mb-4 font-bold text-base text-white">Follow Us</h5>
            <div className="flex items-center space-x-3 mb-6">
              <a href="https://facebook.com/vpagdance" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/vpagdance" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://youtube.com/@vpagdancecompany" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/vpagdance" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-primary text-white hover:text-black flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="mb-6 font-bold text-lg text-white tracking-wide">
              Stay Updated
            </h4>
            <p className="text-sm text-zinc-400 mb-6">
              Subscribe to our newsletter for updates on performances, cultural insights, and exclusive content.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/50">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p className="text-center text-zinc-500 sm:text-left">
            © 2025 VPAG - Versatile Performing Art Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-zinc-400 hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Privacy Policy</a>
            <a href="/terms" className="text-zinc-400 hover:text-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
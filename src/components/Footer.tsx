import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div>
                <span className="text-lg font-bold">Srimanasa</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50">Tours & Travels</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Your trusted partner for tours, goods transport, and vehicle rentals across India since 2014.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Tour Packages</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Goods Transport</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Vehicle Rental</a></li>
              <li><a href="#fleet" className="hover:text-accent transition-colors">Our Fleet</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#why-us" className="hover:text-accent transition-colors">Why Us</a></li>
              <li><a href="#coverage" className="hover:text-accent transition-colors">Coverage</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 1234567890</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> srimanasatoursandtravels@gmail.com</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Bengaluru, Karnataka</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Srimanasa Tours & Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

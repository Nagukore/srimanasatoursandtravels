import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Coverage", href: "#coverage" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    try {
      const selector = href.startsWith("#") ? href : `#${href}`;
      const el = document.querySelector(selector) as HTMLElement | null;
      if (!el) return;
      const nav = document.querySelector('nav');
      const offset = nav ? (nav as HTMLElement).offsetHeight : 0;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    } catch (err) {
      // fallback: navigate normally
      window.location.hash = href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3">
          <img src="/favicon.jpg" alt="Srimanasa logo" className="h-10 w-10 rounded-full object-cover border border-primary-foreground/10 shadow-sm" />
          <div className="leading-tight">
            <span className="text-lg font-bold font-[var(--font-display)] text-primary">Srimanasa</span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Tours & Travels</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 bg-gold-gradient text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                    setOpen(false);
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 bg-gold-gradient text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold mt-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

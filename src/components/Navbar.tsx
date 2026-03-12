import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Srimanasa Tours" className="h-10 w-10 object-contain" />
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
                  onClick={() => setOpen(false)}
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

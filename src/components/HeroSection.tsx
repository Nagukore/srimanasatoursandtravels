import { motion } from "framer-motion";
import { ArrowRight, MapPin, Truck, Car } from "lucide-react";
import heroBus from "@/assets/hero-bus.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBus} alt="Srimanasa fleet" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-gold-gradient text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              All India Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Your Journey,{" "}
            <span className="text-gradient-gold">Our Passion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl font-light"
          >
            Premium tours, reliable goods transport, and flexible vehicle rentals across India.
            Travel with confidence, arrive with a smile.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="flex items-center gap-2 bg-gold-gradient text-secondary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Get a Quote
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-16"
          >
            {[
              { icon: MapPin, label: "Cities Covered", value: "500+" },
              { icon: Truck, label: "Trips Completed", value: "10,000+" },
              { icon: Car, label: "Vehicles", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

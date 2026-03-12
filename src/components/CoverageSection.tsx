import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  { name: "South India", cities: ["Hyderabad", "Chennai", "Bangalore", "Kochi", "Tirupati", "Vizag"] },
  { name: "North India", cities: ["Delhi", "Jaipur", "Agra", "Varanasi", "Amritsar", "Rishikesh"] },
  { name: "West India", cities: ["Mumbai", "Pune", "Goa", "Ahmedabad", "Udaipur", "Jaisalmer"] },
  { name: "East India", cities: ["Kolkata", "Bhubaneswar", "Puri", "Darjeeling", "Gangtok", "Guwahati"] },
];

const CoverageSection = () => {
  return (
    <section id="coverage" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Pan India</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
            All India <span className="text-gradient-gold">Coverage</span>
          </h2>
          <p className="text-primary-foreground/60 mt-4 max-w-lg mx-auto">
            We operate across all major cities and routes in India, ensuring seamless connectivity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-primary-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                {region.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {region.cities.map((city) => (
                  <span
                    key={city}
                    className="text-xs bg-primary-foreground/10 text-primary-foreground/70 px-3 py-1.5 rounded-lg"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary-foreground/40 mt-10 text-sm"
        >
          + 500 more cities and towns across India
        </motion.p>
      </div>
    </section>
  );
};

export default CoverageSection;

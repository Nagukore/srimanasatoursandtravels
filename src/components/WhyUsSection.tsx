import { motion } from "framer-motion";
import { Shield, Clock, IndianRupee, Headphones, Award, Route } from "lucide-react";

const features = [
  { icon: Shield, title: "Safe & Reliable", desc: "All vehicles insured with experienced, verified drivers." },
  { icon: Clock, title: "On-Time Guarantee", desc: "Punctuality is our promise — we value your schedule." },
  { icon: IndianRupee, title: "Best Prices", desc: "Transparent, competitive pricing with no hidden charges." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock customer assistance for all queries." },
  { icon: Award, title: "10+ Years Experience", desc: "Decade of trust serving thousands of happy customers." },
  { icon: Route, title: "Pan India Routes", desc: "Extensive network covering all major cities and highways." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Trust & Quality</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Why Choose <span className="text-gradient-gold">Srimanasa</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                <f.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

import { motion } from "framer-motion";
import { Map, Truck, Car, ArrowRight } from "lucide-react";
import tourGroup from "@/assets/tour-group.jpg";
import goodsTruck from "@/assets/goods-truck.jpg";
import rentalCar from "@/assets/rental-car.jpg";

const services = [
  {
    icon: Map,
    title: "Tour Packages",
    description:
      "Explore India with our curated tour packages. From spiritual pilgrimages to leisure getaways, we plan every detail for a memorable experience.",
    image: tourGroup,
    features: ["Customized Itineraries", "Experienced Guides", "Hotel Bookings", "Meal Plans"],
  },
  {
    icon: Truck,
    title: "Goods Transport",
    description:
      "Reliable and safe goods transportation across India. From household items to commercial cargo, we deliver on time, every time.",
    image: goodsTruck,
    features: ["Pan India Coverage", "GPS Tracking", "Insured Transit", "Timely Delivery"],
  },
  {
    icon: Car,
    title: "Vehicle Rental",
    description:
      "Rent our well-maintained vehicles for any occasion. Cars, SUVs, tempo travellers, and buses available for daily, weekly, or monthly hire.",
    image: rentalCar,
    features: ["Flexible Duration", "With/Without Driver", "Well Maintained", "Affordable Rates"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Three pillars of service built on trust, reliability, and excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <service.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {service.features.map((f) => (
                    <span key={f} className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-lg">
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

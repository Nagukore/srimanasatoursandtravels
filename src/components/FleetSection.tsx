import { motion } from "framer-motion";
import { Users, Fuel, Settings } from "lucide-react";
import heroBus from "@/assets/hero-bus.jpg";
import rentalCar from "@/assets/rental-car.jpg";
import tempoTraveller from "@/assets/tempo-traveller.jpg";
import goodsTruck from "@/assets/goods-truck.jpg";

const vehicles = [
  {
    name: "Luxury Bus",
    image: heroBus,
    seats: "45 Seater",
    fuel: "Diesel",
    type: "AC / Non-AC",
    price: "₹25/km",
  },
  {
    name: "Tempo Traveller",
    image: tempoTraveller,
    seats: "12-17 Seater",
    fuel: "Diesel",
    type: "AC Push-back",
    price: "₹18/km",
  },
  {
    name: "Innova / SUV",
    image: rentalCar,
    seats: "6-7 Seater",
    fuel: "Diesel / Petrol",
    type: "AC Premium",
    price: "₹14/km",
  },
  {
    name: "Cargo Truck",
    image: goodsTruck,
    seats: "1-2 Ton / 5 Ton",
    fuel: "Diesel",
    type: "Covered / Open",
    price: "On Request",
  },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Vehicles</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Premium <span className="text-gradient-gold">Fleet</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Well-maintained vehicles for every need — from family tours to heavy cargo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 right-3 bg-gold-gradient text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-lg">
                  {v.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-3">{v.name}</h3>
                <div className="space-y-2">
                  {[
                    { icon: Users, text: v.seats },
                    { icon: Fuel, text: v.fuel },
                    { icon: Settings, text: v.type },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <item.icon className="h-4 w-4 text-accent" />
                      {item.text}
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-4 w-full block text-center bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;

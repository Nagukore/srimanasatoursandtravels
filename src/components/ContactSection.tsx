import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-hero-gradient rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-bold mb-6">Reach Us Anytime</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, text: "+91 1234567898", sub: "Call us 24/7" },
                  { icon: Mail, text: "srimanasatoursandtravels@gmail.com", sub: "Email support" },
                  { icon: MapPin, text: "Bengaluru, Karnataka", sub: "Head Office" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.text}</p>
                      <p className="text-xs text-primary-foreground/50">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-2xl p-8 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <input
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
            <input
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <option value="">Select Service</option>
              <option value="tours">Tour Packages</option>
              <option value="goods">Goods Transport</option>
              <option value="rental">Vehicle Rental</option>
            </select>
            <textarea
              placeholder="Tell us about your requirement..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-gold-gradient text-secondary-foreground py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Send className="h-4 w-4" />
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

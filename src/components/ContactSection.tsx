import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus-glow transition-all duration-500 font-serif tracking-wide";

  return (
    <section id="contact" className="py-24 md:py-32 section-padding bg-secondary/20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="archive-sans text-xs uppercase tracking-[0.25em] text-gold font-medium block mb-2">
            Direct Booking &amp; Correspondence
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-4 font-normal">
            Book Stacey Soans
          </h2>
          <p className="font-serif text-sm md:text-base text-muted-foreground tracking-wide">
            For fashion campaigns, runway, executive HR advisory, golf appearances, and author lectures in Toronto and internationally.
          </p>
        </motion.div>

        {submitted ? (
          <div className="p-8 bg-card border border-gold/40 text-center">
            <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-primary mb-2 font-normal">
              Inquiry Transmitted
            </h3>
            <p className="font-serif text-muted-foreground text-sm mb-6">
              Thank you for contacting Stacey Soans. Your message has been received by management.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
              }}
              className="px-6 py-2.5 bg-gold text-black text-xs uppercase tracking-widest archive-sans font-medium"
            >
              Submit Another Message
            </button>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
              required
            >
              <option value="" className="bg-[#0b0c10] text-foreground">Select Project / Engagement Category</option>
              <option value="editorial" className="bg-[#0b0c10] text-foreground">Modelling: Editorial &amp; High Fashion</option>
              <option value="runway" className="bg-[#0b0c10] text-foreground">Modelling: Runway &amp; Haute Couture</option>
              <option value="commercial" className="bg-[#0b0c10] text-foreground">Modelling: Luxury Commercial Campaign</option>
              <option value="hr" className="bg-[#0b0c10] text-foreground">Human Resources: Executive HRBP Advisory</option>
              <option value="golf" className="bg-[#0b0c10] text-foreground">Professional Golf: Pro-Am &amp; Ambassadorship</option>
              <option value="author" className="bg-[#0b0c10] text-foreground">Author: Keynote &amp; Fairways &amp; Femininity Review</option>
              <option value="other" className="bg-[#0b0c10] text-foreground">Other / General Press Inquiry</option>
            </select>
            <textarea
              name="message"
              placeholder="Message & Project Details"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses} resize-none`}
              required
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 border border-primary/40 py-4 text-xs tracking-[0.3em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 archive-sans font-medium"
              >
                Send Inquiry
              </button>
              <a
                href="mailto:inquiries@staceysoans.com"
                className="flex-1 border border-gold/50 py-4 text-xs tracking-[0.3em] uppercase text-gold text-center hover:bg-gold hover:text-black transition-all duration-500 archive-sans font-medium flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Management</span>
              </a>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

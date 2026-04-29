import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Weight Lifter",
      text: "PowerFit transformed my life. The trainers are top-notch and the facilities are world-class. I've seen incredible gains in just 6 months.",
      avatar: "https://i.pravatar.cc/150?u=rahul"
    },
    {
      name: "Priya Patel",
      role: "Yoga Enthusiast",
      text: "The community here is amazing. The Yoga classes are exactly what I needed for my mental and physical well-being. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?u=priya"
    },
    {
      name: "Amit Singh",
      role: "Athlete",
      text: "As a professional athlete, I need the best equipment. PowerFit provides exactly that. The cardio zone is my favorite place to train.",
      avatar: "https://i.pravatar.cc/150?u=amit"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client <span className="text-primary">Success</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Hear from our members who have transformed their lives at PowerFit Gym.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={48} />
              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary mr-4" />
                <div>
                  <h4 className="font-bold text-sm uppercase">{t.name}</h4>
                  <p className="text-primary text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

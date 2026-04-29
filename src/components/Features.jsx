import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, HeartPulse, UserCheck, Timer, Zap, Trophy } from 'lucide-react';

const Features = () => {
  const facilities = [
    { name: "Modern Equipment", icon: <Dumbbell className="text-primary" size={32} />, desc: "Top-of-the-line strength and cardio machines." },
    { name: "Cardio Zone", icon: <HeartPulse className="text-primary" size={32} />, desc: "Advanced treadmills, cycles, and rowers." },
    { name: "Free Weights", icon: <Zap className="text-primary" size={32} />, desc: "Dedicated area for heavy lifting and dumbbells." },
    { name: "Locker Room", icon: <UserCheck className="text-primary" size={32} />, desc: "Secure, clean, and spacious changing facilities." },
  ];

  const services = [
    { name: "Personal Training", icon: <Trophy className="text-primary" size={32} />, desc: "1-on-1 coaching tailored to your specific goals." },
    { name: "Yoga & Zumba", icon: <Timer className="text-primary" size={32} />, desc: "Group classes to keep you motivated and flexible." },
    { name: "Nutrition Guidance", icon: <Zap className="text-primary" size={32} />, desc: "Customized meal plans for optimal performance." },
    { name: "Online Coaching", icon: <Dumbbell className="text-primary" size={32} />, desc: "Train from anywhere with our digital platform." },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="facilities" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-primary">Facilities</span></h2>
          <div className="w-20 h-1 bg-primary mb-8" />
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className="p-8 bg-black/50 border border-white/5 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div id="services" className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
          <div className="w-20 h-1 bg-primary mb-8" />
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className="p-8 glass hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:rotate-12 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

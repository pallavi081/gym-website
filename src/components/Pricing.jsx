import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = React.useState(false);

  const plans = [
    {
      name: "Basic",
      price: isYearly ? "9990" : "999",
      features: ["Access to Gym Floor", "Locker Room Access", "1 Fitness Assessment", "Free Wi-Fi"],
      popular: false,
    },
    {
      name: "Standard",
      price: isYearly ? "19990" : "1999",
      features: ["All Basic Features", "Yoga & Zumba Classes", "Nutrition Guidance", "2 Fitness Assessments", "Group Training"],
      popular: true,
    },
    {
      name: "Premium",
      price: isYearly ? "29990" : "2999",
      features: ["All Standard Features", "Personal Training (4/mo)", "Private Locker", "Spa & Sauna Access", "Guest Passes (2/mo)"],
      popular: false,
    },
  ];

  return (
    <section id="plans" className="py-24 grainy overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Membership <span className="text-primary">Plans</span></h2>
        
        {/* Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <span className={`text-sm font-bold uppercase tracking-widest ${!isYearly ? 'text-primary' : 'text-gray-500'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 bg-white/10 rounded-full relative p-1 transition-colors"
          >
            <motion.div 
              animate={{ x: isYearly ? 28 : 0 }}
              className="w-5 h-5 bg-primary rounded-full shadow-lg"
            />
          </button>
          <span className={`text-sm font-bold uppercase tracking-widest ${isYearly ? 'text-primary' : 'text-gray-500'}`}>Yearly <span className="text-[10px] bg-primary/20 px-2 py-0.5 ml-1 text-primary">Save 20%</span></span>
        </div>

        <p className="text-gray-400 mb-16 max-w-xl mx-auto">Choose the perfect plan to fuel your fitness journey. Flexible options for every level.</p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 flex flex-col items-center ${
                plan.popular 
                ? 'bg-primary/5 border-2 border-primary shadow-[0_0_30px_rgba(255,76,41,0.2)]' 
                : 'bg-secondary border border-white/5'
              } transition-transform duration-300 hover:scale-[1.02]`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase px-4 py-1 tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                <span className="text-gray-400 ml-2">/ {isYearly ? 'year' : 'month'}</span>
              </div>


              <ul className="text-left w-full space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <Check size={16} className="text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 font-bold uppercase tracking-widest transition-colors ${
                  plan.popular ? 'bg-primary text-white' : 'bg-white text-black hover:bg-primary hover:text-white'
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

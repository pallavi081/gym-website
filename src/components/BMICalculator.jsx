import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const h = height / 100;
      const bmiValue = (weight / (h * h)).toFixed(1);
      setBmi(bmiValue);
      
      if (bmiValue < 18.5) setMessage('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 25) setMessage('Healthy Weight');
      else if (bmiValue >= 25 && bmiValue < 30) setMessage('Overweight');
      else setMessage('Obese');
    }
  };

  return (
    <section id="bmi" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Check Your <span className="text-primary">BMI</span></h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                The Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use this calculator to see your current status.
              </p>
              
              <form onSubmit={calculateBMI} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight"
                    className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter your height"
                    className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full"
                >
                  Calculate Now
                </motion.button>
              </form>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              {bmi ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 border-4 border-primary rounded-full w-64 h-64 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,76,41,0.3)]"
                >
                  <span className="text-5xl font-bold text-primary mb-2">{bmi}</span>
                  <span className="text-sm font-bold uppercase tracking-widest">{message}</span>
                </motion.div>
              ) : (
                <div className="p-10 border-4 border-white/10 rounded-full w-64 h-64 flex items-center justify-center">
                  <p className="text-gray-500 font-bold uppercase tracking-widest">Result</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;

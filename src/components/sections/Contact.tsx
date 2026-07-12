"use client";

import { useState } from "react";
import GlassCard from "../ui/GlassCard";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success state
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-widest mb-6">Let's Connect</h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Ready to bring your visionary ideas to life? Whether you have a project in mind or just want to explore possibilities, my inbox is always open for collaboration.
          </p>
        </div>

        <GlassCard delay={0.2} className="max-w-3xl mx-auto border-white/20 p-8 md:p-12 relative overflow-hidden">
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-16 h-[450px]">
              <CheckCircle2 className="w-20 h-20 text-white mb-6 animate-pulse" strokeWidth={1} />
              <h3 className="text-3xl font-light text-white tracking-widest uppercase mb-4 text-center">Message Sent</h3>
              <p className="text-white/60 text-center font-light">Thank you for reaching out. I'll get back to you shortly.</p>
            </motion.div>
          ) : !showForm ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-16 h-[450px]">
              <button 
                onClick={() => setShowForm(true)}
                className="group flex items-center justify-center gap-4 px-12 py-5 bg-white text-black text-lg font-bold tracking-widest uppercase rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
              >
                Send a Message
                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </button>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit} 
              className="flex flex-col space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-white/70 text-sm tracking-widest uppercase ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-black/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-white/70 text-sm tracking-widest uppercase ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-black/50 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-white/70 text-sm tracking-widest uppercase ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required 
                  className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-black/50 transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-white/70 text-sm tracking-widest uppercase ml-1">Message</label>
                <textarea 
                  id="message" 
                  required 
                  rows={5}
                  className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-black/50 transition-all duration-300 backdrop-blur-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group w-full md:w-auto md:self-end flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-bold tracking-widest uppercase rounded-lg hover:bg-gray-200 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Sending..." : "Submit Message"}
                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />}
              </button>
            </motion.form>
          )}
        </GlassCard>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Predefined knowledge base
const knowledgeBase = {
  "What are your core skills?": "My core skills include Full-Stack Development (React, Next.js, Node.js, Python), Database Management (MongoDB, MySQL, PostgreSQL), Cloud Platforms (AWS, Azure), and UI/UX Design.",
  "Tell me about your experience": "I have experience working as a Data Collecting Volunteer Officer at the Divisional Secretary Office, and I also volunteered as a teacher for 6 months. I am constantly building projects like this portfolio to expand my technical expertise!",
  "What projects have you built?": "I've built several projects including full-stack web applications using React and Next.js, UI/UX designs, and data-driven applications. You can explore my work in detail in the Portfolio section!",
  "Are you available for freelance work?": "Yes! I am currently open to freelance opportunities and exciting new collaborations. Feel free to use the contact form or email me directly to discuss your ideas.",
  "Where are you located?": "I am based in Batticaloa, Sri Lanka, but I am fully equipped to work remotely with clients worldwide.",
  "How can I contact you?": "You can contact me via email at pavitharpavithar@gmail.com, or call me at +94 75 608 8619. I'm always open to discussing new projects and collaborations!"
};

const suggestedQuestions = Object.keys(knowledgeBase);

export default function ChatbotPage() {
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Pavi's virtual assistant. I can answer quick questions about his skills, experience, and contact details. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim() || isTyping) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I'm still learning! But I can easily tell you about Pavi's skills, experience, or contact info if you ask one of the suggested questions below!";
      
      // Check if it matches a predefined question
      if (knowledgeBase[text as keyof typeof knowledgeBase]) {
        botResponse = knowledgeBase[text as keyof typeof knowledgeBase];
      }

      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-12 px-4 md:px-8 flex flex-col items-center">
      <div className="w-full max-w-4xl flex-1 flex flex-col glass-card border border-white/10 overflow-hidden relative shadow-[0_0_50px_rgba(255,255,255,0.05)] rounded-3xl h-[80vh]">
        
        {/* Header */}
        <div className="bg-white/5 border-b border-white/10 px-6 md:px-8 py-6 flex items-center justify-between backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl tracking-wider uppercase">PaviBot</h1>
              <p className="text-white/50 text-sm font-light tracking-wide">Your Personal Assistant</p>
            </div>
          </div>
          <Sparkles className="text-white/30 w-6 h-6 animate-pulse" />
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scroll-smooth">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-4 max-w-[85%] md:max-w-[70%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border ${msg.role === "user" ? "bg-white text-black border-white" : "bg-black/50 border-white/20"}`}>
                    {msg.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5 text-white" />}
                  </div>
                  <div className={`px-6 py-4 rounded-2xl text-white/90 font-light leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-white/10 border border-white/10 rounded-tr-sm" 
                      : "bg-black/50 border border-white/10 rounded-tl-sm backdrop-blur-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="flex justify-start"
            >
              <div className="flex gap-4 max-w-[80%]">
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center border bg-black/50 border-white/20">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="px-6 py-5 rounded-2xl bg-black/50 border border-white/10 rounded-tl-sm backdrop-blur-sm flex items-center gap-2">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 rounded-full bg-white/50" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 rounded-full bg-white/50" />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 rounded-full bg-white/50" />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions & Input Area */}
        <div className="p-6 md:p-8 bg-[#050505] border-t border-white/10 z-10">
          {/* Suggested Questions */}
          <div className="flex flex-wrap gap-3 mb-6">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={isTyping}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-white/30 text-white/80 text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm tracking-wide"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="flex gap-4 relative"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message or select a suggestion..."
              disabled={isTyping}
              className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50 tracking-wide font-light"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="bg-white text-black px-6 md:px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              <span className="hidden md:inline uppercase tracking-widest text-sm">Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

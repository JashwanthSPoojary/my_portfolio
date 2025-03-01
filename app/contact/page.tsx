"use client";

import Link from "next/link";
import { Mail, Linkedin, Twitter, Github, Send, Loader } from "lucide-react";
import { motion } from "framer-motion";
import React, {  useState } from "react";
import api from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null >(null);
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    setError(null);
    return true;
  };


  const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setError(null);
    console.log("something is happening");
    
    try {
      const res = await api.post('/api/contact',{formData});

      console.log(res);
      
    } catch (error) {
      setError(error);
      console.log(error);
      
    } finally {
      setLoading(false);
      setFormData({name:"",email:"",message:""})
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-6 sm:px-10 md:px-20 lg:px-40 py-24 max-w-6xl mx-auto text-center text-white"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl sm:text-6xl font-extrabold mb-4"
      >
        Contact Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg text-gray-300 mb-10"
      >
        Let&apos;s connect! Feel free to reach out via email or social media.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Contact Cards */}
        <div className="flex flex-col gap-6">
          {[ 
            { icon: Mail, label: "Email", link: "mailto:jaswanthspoojary@example.com" },
            { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/jashwanth-s-poojary" },
            { icon: Twitter, label: "Twitter / X", link: "https://x.com/JashwantPoojary" },
            { icon: Github, label: "GitHub", link: "https://github.com/JashwanthSPoojary" },
          ].map(({ icon: Icon, label, link }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex items-center gap-4 shadow-lg hover:bg-gray-800 transition"
            >
              <Icon size={24} className="text-blue-500" />
              <Link href={link} className="text-lg text-gray-300 hover:text-white">
                {label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-xl backdrop-blur-lg bg-opacity-50"
        >
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          {error?<p className="bg-red-600 my-4">Please something went worng</p>:null}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:border-blue-500 text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:border-blue-500 text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:border-blue-500 text-white placeholder-gray-400 h-32"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 flex items-center justify-center gap-2 transition"
            >
               {loading ? <Loader className="animate-spin" />:<><Send size={18} /> Send Message</>}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
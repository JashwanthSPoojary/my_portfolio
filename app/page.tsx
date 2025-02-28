"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-6 sm:px-10 md:px-20 lg:px-40 py-24 max-w-6xl mx-auto text-center"
    >
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6"
      >
        Hey, I&apos;m <span className="text-[#00BFFF]">Jashwanth S Poojary</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed tracking-wide"
      >
        I&apos;m currently{" "}
        <span className="font-semibold text-[#00BFFF]">
          learning the art of building full stack applications
        </span>
        . I love working on projects that add value instead of wasting time, and
        I&apos;m always pushing my boundaries to learn new skills and gain knowledge.
        I&apos;m pursuing an undergraduate program in
        <span className="italic">
          B.Voc Software and Application Development
        </span>{" "}
        at SDMC, Ujire, Mangaluru.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-6"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="px-8 py-3 text-lg bg-[#00BFFF] text-white font-medium rounded-lg hover:bg-[#008ACD] transition"
          >
            Get In Touch
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/projects"
            className="px-8 py-3 text-lg bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition"
          >
            My Projects
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
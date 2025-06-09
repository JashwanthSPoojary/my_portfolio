"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Profile from "@/public/linkdin profile.jpeg";
import { Menu, X, Home, Briefcase, Mail, Twitter, Code, Linkedin ,FileText } from "lucide-react";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };


  return (
    <>
      {/* Mobile Toggle Button */}
      <button
  onClick={toggleSidebar}
  className="fixed top-4 left-4 z-50 p-2 bg-blue-900 rounded-md shadow-md md:hidden"
  aria-label="Toggle menu"
  style={{ left: isOpen ? "280px" : "16px", transition: "left 0.3s ease" }} // Moves button when sidebar opens
>
  {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
</button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-gradient-to-b bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="h-full flex flex-col p-6 overflow-y-auto">
          {/* Profile Section */}
          <div className="flex items-center gap-4 mb-8 border-b border-gray-700 pb-4">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[#00BFFF]">
              <Image src={Profile} alt="Profile" width={48} height={48} className="object-cover" />
            </div>
            <div>
              <h2 className="text-white font-semibold">Jashwanth S Poojary</h2>
              <p className="text-sm text-[#00BFFF]">Building Scalable Web Solutions</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-6 flex-1">
            <div>
              <h3 className="text-xs font-medium text-gray-400 mb-3 uppercase">Navigate</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <Home size={18} color="blue" /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <Briefcase size={18} color="blue" /> My Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <Mail size={18} color="blue" /> Connect With Me
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium text-gray-400 mb-3 uppercase">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://x.com/JashwantPoojary" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <Twitter size={18} color="blue" /> Twitter / X
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/jashwanth-s-poojary" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <Linkedin size={18} color="blue" /> LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/JashwanthSPoojary" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <Code size={18} color="blue" /> GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://drive.google.com/file/d/1RVsMod7l9xN_sGC-k9bEr9Ro_rmRmQkH/view target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                    <FileText size={18} color="blue" /> Resume
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={closeSidebar} />}
    </>  );
}

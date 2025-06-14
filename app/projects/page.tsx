"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const personalProjects = [
  {
    id: 1,
    title: "Vexl: Vercel clone for hosting React apps",
    description:
      "A Vercel-inspired platform to deploy React apps directly from GitHub. Features GitHub login, project import, automatic builds with logs, and static file hosting through CDN. Built using a multi-service architecture.",
    tags: [
      "Next.js",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "BullMq",
      "Prisma",
      "Docker",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/JashwanthSPoojary/Vexl",
    liveUrl: "https://vexl.live",
  },
  {
    id: 2,
    title: "Buzznet: Real time communication platform",
    description:
      "A community social media application like Slack or Discord. Built this to learn full stack skills — features include group chat, DMs, AI chatbot, file uploads, video calls, and more.",
    tags: [
      "React",
      "PostgresSQL",
      "Node JS",
      "Prisma",
      "Tailwind CSS",
      "Zustand",
    ],
    githubUrl: "https://github.com/JashwanthSPoojary/my_buzznet",
    liveUrl: "https://buzznet.me",
  },
  {
    id: 3,
    title: "VideoAno : Youtube annotation platform",
    description:
      "Lets you add text annotations to specific timestamps of YouTube videos. Includes a dashboard to manage and share your annotated videos. My first project using Next.js.",
    tags: ["Next JS", "PostgresSQL", "Shadcn UI", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/JashwanthSPoojary/video-annotation-platform",
    liveUrl: "https://videoano.jashwanth.me",
  },
  {
    id: 4,
    title: "InterivewAI : Resume based interview",
    description:
      "Upload your resume and let AI generate interview questions tailored to it.",
    tags: [
      "React",
      "PostgresSQL",
      "Node JS",
      "Prisma",
      "Tailwind CSS",
      "Zustand",
    ],
    githubUrl: "https://github.com/JashwanthSPoojary/Ai-Interview-simulation",
    liveUrl: "https://interviewai.jashwanth.me",
  },
];


const practiceProjects = [
  {
    id: 4,
    title: "Youtube API driven website",
    description:
      "Clone of youtube homepage working with google youtube api has categories section , responsive for all devices leveraging the react dynamic content changes",
    tags: ["React JS", "Youtube API"],
    githubUrl: "https://github.com/JashwanthSPoojary/youtube-clone-using-api",
    liveUrl: "https://youtube-clone-using-api.vercel.app/",
  },
  {
    id: 5,
    title: "Food Web : Food delivery website",
    description:
      "MERN stack application contains admin and user module where you add food to cart , purchase and make payment through stripe ( test mode ) . Practice project built watching youtube . ",
    tags: ["MERN", "Stripe", "JWT"],
    githubUrl: "https://github.com/JashwanthSPoojary/food-web",
    liveUrl: "https://food-web-frontend-p745.onrender.com",
  },{
    id: 6,
    title: "Full stack TODO application",
    description:
      "Built using the next js , has a backend does all the crud operations stores the todos in the mongoDB",
    tags: ["Next JS", "MongoDB"],
    githubUrl:
      "https://github.com/JashwanthSPoojary/Full-Stack-Next-JS-TODO-List",
    liveUrl: "https://full-stack-next-js-todo-list.vercel.app/",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-6 sm:px-10 md:px-20 lg:px-40 py-24 max-w-6xl mx-auto text-center"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl sm:text-6xl font-extrabold text-[#00BFFF] mb-4"
      >
        My Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg text-gray-300 mb-10"
      >
        This are some of my self made projects .
      </motion.p>

      {/* Personal Projects */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl font-bold text-white mb-6"
      >
        Personal Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {personalProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg transition-transform"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center gap-4"
            >
              <Link
                href={project.githubUrl}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <Github size={18} />
                <span>Code</span>
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
              >
                <ExternalLink size={18} />
                <span>Live</span>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Practice Projects */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl font-bold text-white mb-6"
      >
        Practice Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {practiceProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 shadow-lg transition-transform"
          >
            <h3 className="text-lg font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center gap-4"
            >
              <Link
                href={project.githubUrl}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <Github size={18} />
                <span>Code</span>
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
              >
                <ExternalLink size={18} />
                <span>Live</span>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import DashMain from "../../components/Dashboard/DashMain";
import ThemeControls from "../../components/Theme/ThemeControls";
import { useThemeColors } from "../../hooks/useThemeColors";
import menu from "../../assets/Dashboard/menu.svg";
import b4music_cover from "../../assets/Projects/b4music.png";
import beshopy_cover from "../../assets/Projects/beshopy.png";
import pixic_cover from "../../assets/Projects/pixic.png";
import cofarm_cover from "../../assets/Projects/cofarm.png";


const projects = [
  {
    name: "Beshopy",
    description: "A shopping app built with React and Vite.",
    link: "https://beshopy.vercel.app",
    cover: beshopy_cover,
    github: "https://github.com/benisamuel/Beshopy",
    tech: ["React", "Vite", "Javascript"],
  },
  {
    name: "B4MUSIC",
    description: "A music streaming platform.",
    link: "https://b4music.vercel.app",
    cover: b4music_cover,
    github: "https://github.com/benisamuel/B4MUSIC",
    tech: ["Postgres", "SpringBoot", "React", "Node.js"],
  },
  {
    name: "Pixic",
    description: "a photographing platform book photographers easily.",
    link: "https://pixic.vercel.app",
    cover: pixic_cover,
    github: "https://github.com/benisamuel/pixic",
    tech: ["React", "TypeScript"],
  },
  {
    name: "ReDev",
    description: "A platform connecting developers using React Native.",
    link: "https://redev.vercel.app",
    cover: "https://via.placeholder.com/300",
    github: "https://github.com/benisamuel/ReDev",
    tech: ["React Native", "Firebase"],
  },
  {
    name: "CoFarm",
    description: "A farming platform real time farm information",
    link: "https://cofarm.vercel.app",
    cover: cofarm_cover,
    github: "https://github.com/benisamuel/CoFarm",
    tech: ["React", "Node.js", "Postgres"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects: React.FC = () => {
  const { themeColor, rgba } = useThemeColors();

  return (
    <div className="relative overflow-hidden">
      <DashMain>
        <div className="py-16 pl-10 relative">
          <motion.div
            className="absolute top-9 left-10 cursor-pointer md:hidden z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={menu} alt="menu" />
          </motion.div>
          <ThemeControls />

          <motion.div
            className="flex flex-col gap-2 py-12 md:py-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-poppins text-2xl md:text-3xl text-white font-semibold selection:bg-[#ED2929]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Projects
            </motion.p>
            <div className="flex flex-col gap-1">
              <motion.div
                className="w-16 h-1 rounded-lg"
                style={{ backgroundColor: themeColor }}
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              />
              <motion.div
                className="w-10 h-1 rounded-lg"
                style={{ backgroundColor: themeColor }}
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 pr-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#171717] to-[#1a1a1a] border-[#2F2C2C] border-2"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.cover}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <motion.button
                        className="text-white px-4 py-2 rounded-lg text-sm font-semibold"
                        style={{ backgroundColor: themeColor }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.button>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-white mb-2 transition-colors"
                      style={
                        { "--hover-color": themeColor } as React.CSSProperties
                      }
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = themeColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "white")
                      }
                    >
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                      style={{ color: themeColor }}
                      whileHover={{ x: 5 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub Repo
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </a>
                <motion.div
                  className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-20"
                  style={{ borderColor: themeColor }}
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub Profile Link */}
          <motion.div
            className="mt-16 text-center pr-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/benisamuel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white px-8 py-4 rounded-lg shadow-lg font-semibold relative overflow-hidden group"
              style={{ backgroundColor: themeColor }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 10px 30px ${rgba(0.4)}`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Visit My GitHub</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                initial={false}
              />
            </motion.a>
          </motion.div>
        </div>
      </DashMain>
    </div>
  );
};

export default Projects;

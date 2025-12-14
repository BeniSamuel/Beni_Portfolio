import React from "react";
import { motion } from "framer-motion";
import DashMain from "../../components/Dashboard/DashMain";
import DynamicText from "../../components/Home/DynamicText";
import ThemeControls from "../../components/Theme/ThemeControls";
import { useThemeColors } from "../../hooks/useThemeColors";
import myImage from "../../assets/Dashboard/Myimage.svg";
import menu from "../../assets/Dashboard/menu.svg";

const Home: React.FC = () => {
  const { themeColor, rgba } = useThemeColors();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const getColorFilter = (hex: string): string => {
    const colorFilters: Record<string, string> = {
      "#ED2929":
        "invert(27%) sepia(91%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)", // Red
      "#22C55E":
        "invert(68%) sepia(95%) saturate(427%) hue-rotate(88deg) brightness(118%) contrast(85%)", // Green
      "#3B82F6":
        "invert(48%) sepia(99%) saturate(2476%) hue-rotate(202deg) brightness(98%) contrast(96%)", // Blue
      "#F97316":
        "invert(60%) sepia(98%) saturate(2476%) hue-rotate(1deg) brightness(102%) contrast(96%)", // Orange
    };

    return colorFilters[hex] || "brightness(0) saturate(100%) invert(1)";
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020202] via-[#0a0a0a] to-[#020202] opacity-50" />
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#ED2929] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <DashMain>
        <div className="flex flex-col md:flex-row py-[8rem] pl-10 items-center gap-16 relative z-10">
          <motion.div
            className="absolute top-9 left-10 cursor-pointer md:hidden z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={menu} alt="menu" />
          </motion.div>
          <ThemeControls />

          <motion.div
            className="flex flex-col gap-5 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex flex-col gap-3" variants={itemVariants}>
              <motion.p
                className="font-poppins text-white text-md md:text-lg"
                style={{ "--theme-color": themeColor } as React.CSSProperties}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I am{" "}
                <motion.span
                  className="font-bold relative inline-block"
                  style={{ color: themeColor }}
                  whileHover={{ scale: 1.05 }}
                >
                  Beni Samuel
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5"
                    style={{ backgroundColor: themeColor }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                </motion.span>
              </motion.p>
              <motion.p
                className="font-poppins text-white text-md md:text-lg flex flex-row gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                I&apos;m a{" "}
                <span className="font-bold" style={{ color: themeColor }}>
                  <DynamicText />
                </span>
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.p
                className="font-poppins text-white text-sm md:text-base leading-7 selection:bg-[#ED2929] max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                I am a passionate young software engineer driven by the mission
                to craft innovative solutions that address real-world
                challenges, simplifying lives and transforming everyday
                experiences.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                className="font-poppins text-white text-sm py-3 px-8 rounded-3xl relative overflow-hidden group"
                style={{ backgroundColor: themeColor }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 30px ${rgba(0.4)}`,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="relative z-10">Download CV</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  initial={false}
                  whileHover={{ opacity: 0.2 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-row items-center justify-center selection:bg-white z-10"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative" animate={floatingAnimation}>
              <motion.img
                src={myImage}
                className="h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem]"
                style={{
                  filter: getColorFilter(themeColor),
                }}
                alt="Beni Samuel"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 border-2 rounded-full opacity-20"
                style={{ borderColor: themeColor }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </DashMain>
    </div>
  );
};

export default Home;

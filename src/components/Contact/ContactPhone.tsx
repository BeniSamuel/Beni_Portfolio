import React from "react";
import { motion } from "framer-motion";
import { useThemeColors } from "../../hooks/useThemeColors";
import phone from "../../assets/Contact/Phone.svg";

const ContactPhone: React.FC = () => {
  const { themeColor } = useThemeColors();

  // Convert hex color to CSS filter for SVG coloring
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

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={phone}
        alt="Phone"
        className="transition-all duration-300"
        style={{
          filter: getColorFilter(themeColor),
        }}
        animate={floatingAnimation}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ContactPhone;

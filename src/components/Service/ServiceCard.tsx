import React from "react";
import { motion } from "framer-motion";
import serviceTypes from "../../types/Service/ServiceTypes";
import { useThemeColors } from "../../hooks/useThemeColors";

const ServiceCard: React.FC<serviceTypes> = (props) => {
  const { themeColor, rgba } = useThemeColors();

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

  return (
    <motion.div
      className="flex flex-col gap-4 items-center bg-gradient-to-br from-[#171717] to-[#1a1a1a] py-8 md:py-6 justify-center px-6 rounded-xl border-[#2F2C2C] border-2 md:w-[27rem] group relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      style={
        {
          "--hover-border": themeColor,
          "--hover-shadow": rgba(0.2),
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = themeColor;
        e.currentTarget.style.boxShadow = `0 10px 30px ${rgba(0.2)}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#2F2C2C";
        e.currentTarget.style.boxShadow = "none";
      }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        style={{ backgroundColor: themeColor }}
        initial={false}
      />
      <motion.img
        src={props.image}
        className="h-10 w-10 z-10 transition-all duration-300"
        alt={props.category}
        style={{
          filter: getColorFilter(themeColor),
        }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        className="font-poppins text-base font-semibold text-white z-10 transition-colors"
        style={{ "--hover-color": themeColor } as React.CSSProperties}
        onMouseEnter={(e) => (e.currentTarget.style.color = themeColor)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        whileHover={{ scale: 1.05 }}
      >
        {props.category}
      </motion.p>
      <motion.p
        className="font-poppins text-sm text-gray-300 text-center leading-7 z-10"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {props.description}
      </motion.p>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{ backgroundColor: themeColor }}
        initial={false}
      />
    </motion.div>
  );
};

export default ServiceCard;

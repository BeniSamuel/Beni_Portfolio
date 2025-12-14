import React, { useState } from "react";
import { motion } from "framer-motion";
import { useThemeColors } from "../../hooks/useThemeColors";

const ContactEmail: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", description: "" });
  const { themeColor, rgba } = useThemeColors();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/2"></div>
      <motion.form
        className="flex flex-col gap-6 w-full md:w-1/2 pr-10"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-[#171717] placeholder:font-poppins placeholder:text-sm placeholder:text-gray-400 py-[0.92rem] px-4 w-full rounded-lg border-[#2F2C2C] border-2 outline-none text-white font-poppins text-sm focus:bg-[#1f1f1f] transition-all duration-300"
          style={{ "--focus-border": themeColor } as React.CSSProperties}
          onFocus={(e) => (e.currentTarget.style.borderColor = themeColor)}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2F2C2C")}
          variants={inputVariants}
          whileFocus="focus"
        />
        <motion.textarea
          className="bg-[#171717] placeholder:font-poppins placeholder:text-sm placeholder:text-gray-400 py-[0.92rem] px-4 rounded-lg border-[#2F2C2C] border-2 outline-none text-white font-poppins text-sm focus:bg-[#1f1f1f] leading-7 transition-all duration-300 resize-none"
          style={{ "--focus-border": themeColor } as React.CSSProperties}
          onFocus={(e) => (e.currentTarget.style.borderColor = themeColor)}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#2F2C2C")}
          placeholder="Description"
          rows={5}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          variants={inputVariants}
          whileFocus="focus"
        />
        <motion.input
          type="submit"
          value="Submit"
          className="py-[0.92rem] w-full font-poppins font-medium text-white text-sm rounded-lg cursor-pointer relative overflow-hidden group"
          style={{ backgroundColor: themeColor }}
          whileHover={{ scale: 1.02, boxShadow: `0 10px 30px ${rgba(0.4)}` }}
          whileTap={{ scale: 0.98 }}
        />
      </motion.form>
    </div>
  );
};

export default ContactEmail;

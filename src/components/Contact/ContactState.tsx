import React from "react";
import { motion } from "framer-motion";
import ContactTypes from "../../types/Contact/ContactTypes";
import { useThemeColors } from "../../hooks/useThemeColors";

const ContactState: React.FC<ContactTypes> = ({ section, setSection }) => {
  const { themeColor } = useThemeColors();
  const tabs = [
    { id: "mail", label: "Mail" },
    { id: "phone", label: "Phone" },
    { id: "social", label: "Social" },
  ];

  return (
    <div className="flex flex-row gap-12 py-7 px-4 items-center justify-center">
      <div className="flex flex-row w-fit bg-[#171717] border-[#2F2C2C] border-2 gap-8 py-4 px-8 rounded-3xl items-center justify-center relative">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            onClick={() => setSection(tab.id)}
            className="relative cursor-pointer text-white font-poppins text-sm py-2 px-7 rounded-2xl z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section === tab.id && (
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundColor: themeColor }}
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                section === tab.id
                  ? "text-white"
                  : "opacity-50 hover:opacity-75"
              }`}
            >
              {tab.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactState;

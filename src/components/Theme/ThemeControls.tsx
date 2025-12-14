import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import SettingsPanel from "./SettingsPanel";
import settings from "../../assets/Dashboard/settings.svg";
import whiteMode from "../../assets/Dashboard/whiteMode.svg";

const ThemeControls: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { toggleThemeMode } = useTheme();

  return (
    <>
      <div className="absolute top-9 right-10 flex flex-col gap-4 z-20">
        {/* Settings Icon - Opens Color Theme Panel */}
        <motion.div
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsSettingsOpen(true)}
          className="cursor-pointer"
        >
          <img src={settings} className="h-4 w-4" alt="settings" />
        </motion.div>

        {/* Theme Mode Toggle - Dark/Light Mode */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
          onClick={toggleThemeMode}
          className="cursor-pointer"
        >
          <img src={whiteMode} className="h-4 w-4" alt="theme mode" />
        </motion.div>
      </div>

      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
};

export default ThemeControls;

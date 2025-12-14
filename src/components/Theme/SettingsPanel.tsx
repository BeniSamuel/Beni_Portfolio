import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const { colorTheme, setColorTheme } = useTheme();

  const colors = [
    { name: "red", value: "#ED2929", label: "Red" },
    { name: "green", value: "#22C55E", label: "Green" },
    { name: "blue", value: "#3B82F6", label: "Blue" },
    { name: "orange", value: "#F97316", label: "Orange" },
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed top-20 right-10 bg-[#171717] border-2 border-gray-700 rounded-xl p-6 z-50 min-w-[250px] shadow-2xl"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-poppins font-semibold text-lg">
                Color Theme
              </h3>
              <motion.button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                ✕
              </motion.button>
            </div>

            <div className="flex flex-col gap-3">
              {colors.map((color) => (
                <motion.button
                  key={color.name}
                  onClick={() => {
                    setColorTheme(color.name);
                    onClose();
                  }}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                    colorTheme === color.name
                      ? "border-white bg-white/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white/30"
                    style={{ backgroundColor: color.value }}
                  />
                  <span className="text-white font-poppins text-sm">
                    {color.label}
                  </span>
                  {colorTheme === color.name && (
                    <motion.span
                      className="ml-auto text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SettingsPanel;

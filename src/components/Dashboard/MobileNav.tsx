import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  id: string;
  icon: string;
  activeIcon: string;
  label: string;
  route: string;
};

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeTab: string;
  onNavigate: (tab: string, route: string) => void;
  themeColor: string;
  getColorFilter: (hex: string) => string;
};

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems,
  activeTab,
  onNavigate,
  themeColor,
  getColorFilter,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute top-0 left-0 h-full w-[75%] bg-[#020202] px-6 py-8 border-r border-gray-800"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-6 mt-10">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;

                return (
                  <motion.div
                    key={item.id}
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => {
                      onNavigate(item.id, item.route);
                      onClose();
                    }}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={isActive ? item.activeIcon : item.icon}
                      className="h-5 w-5"
                      style={{
                        filter: isActive
                          ? getColorFilter(themeColor)
                          : "brightness(0) invert(1) opacity(0.7)",
                      }}
                      alt={item.label}
                    />
                    <span
                      className="font-poppins text-sm"
                      style={
                        isActive ? { color: themeColor } : { color: "white" }
                      }
                    >
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

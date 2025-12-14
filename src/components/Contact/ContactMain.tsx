import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactState from "./ContactState";
import ContactEmail from "./ContactEmail";
import ContactPhone from "./ContactPhone";

const ContactMain: React.FC = () => {
  const [section, setSection] = useState("mail");

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex flex-col gap-12">
      <ContactState section={section} setSection={setSection} />
      <AnimatePresence mode="wait">
        {section === "mail" ? (
          <motion.div
            key="mail"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ContactEmail />
          </motion.div>
        ) : (
          <motion.div
            key="phone"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ContactPhone />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactMain;

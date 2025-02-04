import React, { useState } from "react";
import ContactState from "./ContactState";
import ContactEmail from "./ContactEmail";
import ContactPhone from "./ContactPhone";

const ContactMain: React.FC = () => {
  const [section, setSection] = useState("mail");
  return (
    <div className=" flex flex-col gap-12 ">
      <ContactState section={section} setSection={setSection} />
      {section === "mail" ? <ContactEmail /> : <ContactPhone />}
    </div>
  );
};

export default ContactMain;

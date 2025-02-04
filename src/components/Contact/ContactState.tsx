import React from "react";
import ContactTypes from "../../types/Contact/ContactTypes";

const ContactState: React.FC<ContactTypes> = ({ section, setSection }) => {
  return (
    <div className="flex flex-row gap-12 py-7 px-4 items-center justify-center">
      <div className="flex flex-row w-fit bg-[#171717] border-[#2F2C2C] border-2 gap-12 py-4 px-8 rounded-3xl items-center justify-center">
        <div
          onClick={() => setSection("mail")}
          className={`cursor-pointer text-white font-poppins text-sm ${
            section === "mail"
              ? "bg-[#ED2929] py-2 px-7 rounded-2xl"
              : "opacity-50"
          }`}
        >
          Mail
        </div>
        <div
          onClick={() => setSection("phone")}
          className={`cursor-pointer text-white font-poppins text-sm ${
            section === "phone"
              ? "bg-[#ED2929] py-2 px-7 rounded-2xl"
              : "opacity-50"
          }`}
        >
          Phone
        </div>
        <div
          onClick={() => setSection("social")}
          className={`cursor-pointer text-white font-poppins text-sm ${
            section === "social"
              ? "bg-[#ED2929] py-2 px-7 rounded-2xl"
              : "opacity-50"
          }`}
        >
          Social
        </div>
      </div>
    </div>
  );
};

export default ContactState;

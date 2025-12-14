import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useThemeColors } from "../../hooks/useThemeColors";

const DynamicText: React.FC = () => {
  const { themeColor } = useThemeColors();

  return (
    <span>
      <Typewriter
        words={[
          "Backend Developer",
          "Frontend Developer",
          "Mobile Developer",
          "Desktop App Developer",
          "Into Cybersecurity",
          "Embedded Designer",
        ]}
        loop={Infinity}
        cursor
        cursorColor={themeColor}
        cursorStyle="|"
        cursorBlinking={false}
        typeSpeed={150}
        deleteSpeed={150}
        delaySpeed={1000}
      />
    </span>
  );
};

export default DynamicText;

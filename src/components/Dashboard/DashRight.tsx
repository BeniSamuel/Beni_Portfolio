import React, { ReactNode } from "react";

type DashRightProps = {
  children: ReactNode;
};

const DashRight: React.FC<DashRightProps> = ({ children }) => {
  return (
    <div className="bg-[#020202] h-[100vh] w-[100vw] md:w-[85vw] overflow-y-auto relative">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(237, 41, 41, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237, 41, 41, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DashRight;

import React, { ReactNode } from "react";

type DashRightProps = {
  children: ReactNode;
};

const DashRight: React.FC<DashRightProps> = ({ children }) => {
  return (
    <div className=" bg-[#020202] h-[100vh] w-[100vw] md:w-[85vw] overflow-y-auto">
      {children}
    </div>
  );
};

export default DashRight;

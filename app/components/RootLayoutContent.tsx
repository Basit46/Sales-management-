import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const RootLayoutContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
};

export default RootLayoutContent;

import * as React from "react";
import { NavBar } from "../components/ImgClasNavBar";
import { Sidebar } from "../components/Sidebar";

export const ImgClasMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <NavBar />

        {/* Main Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

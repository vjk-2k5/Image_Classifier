import * as React from "react";
import { NavBar } from "../components/ImgRegNavBar";
import { Sidebar } from "../components/Sidebar";
import{ ImageRecognizer } from "../components/ImgRegMainContent";
export const ImgClasMainLayout = () => {
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
          <ImageRecognizer/>
        </main>
      </div>
    </div>
  );
};
export default ImgClasMainLayout;


import * as React from "react";
import { NavBar } from "../components/ImgClasNavBar";
import { Sidebar } from "../components/Sidebar";
import{ MainContent } from "../components/ImgClasMainContent";
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
          <MainContent/>
        </main>
      </div>
    </div>
  );
};
export default ImgClasMainLayout;


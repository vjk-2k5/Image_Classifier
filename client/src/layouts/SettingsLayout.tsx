import { NavBar } from "../components/SettingsNavBar";
import * as React from "react";
import { Sidebar } from "../components/Sidebar";
import{ MainContent } from "../components/ImgClasMainContent";
import { SheetDemo } from "../components/Profile";
import { SettingsMainContent } from "../components/SettingsMainContent";


export const SettingsLayout = () => {
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
          <SettingsMainContent/>
        </main>
      </div>
    </div>
  );
};
export default SettingsLayout;


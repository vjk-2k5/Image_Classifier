import { NavBar } from "../components/SettingsNavBar";
import * as React from "react";
import { Sidebar } from "../components/Sidebar";
import { SettingsMainContent } from "../components/SettingsMainContent";


const SettingsLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <NavBar />
        <main className="p-6">
          <SettingsMainContent/>
        </main>
      </div>
    </div>
  );
};
export default SettingsLayout;


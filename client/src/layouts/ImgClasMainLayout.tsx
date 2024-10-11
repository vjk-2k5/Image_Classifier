import * as React from "react";
import { NavBar } from "../components/ImgClasNavBar";
import { Sidebar } from "../components/Sidebar";
import MainContent  from "../components/ImgClasMainContent";

const ImgClasMainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <NavBar />
        <main className="p-6">
          <MainContent/>
        </main>
      </div>
    </div>
  );
};

export default ImgClasMainLayout;


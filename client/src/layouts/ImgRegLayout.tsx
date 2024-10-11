import * as React from "react";
import { NavBar } from "../components/ImgRegNavBar";
import { Sidebar } from "../components/Sidebar";
import{ ImageRecognizer } from "../components/ImgRegMainContent";

const ImgClasMainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <NavBar />
        <main className="p-6">
          <ImageRecognizer/>
        </main>
      </div>
    </div>
  );
};
export default ImgClasMainLayout;


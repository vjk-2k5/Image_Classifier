import * as React from "react";
import { cn } from "../lib/utils"; // Ensure this path is correct
import { Button } from "./Button"; // Ensure this path is correct
import { Link } from "react-router-dom"; // Ensure this import is correct

export const DashboardNavBar = () => {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow">
      <div className="container mx-auto flex justify-between p-4">
        <h1 className="text-lg font-bold">DashBoard</h1>
        <Button variant="ghost">Profile</Button>
      </div>
    </header>
  );
};

export default DashboardNavBar;

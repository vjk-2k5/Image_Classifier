import * as React from "react";
import { cn } from "../lib/utils"; // Ensure this path is correct
import { Button } from "./Button"; // Ensure this path is correct
import { Link } from "react-router-dom"; // Ensure this import is correct
import { SheetDemo } from "./Profile";

export const NavBar = () => {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow">
      <div className="container mx-auto flex justify-between p-4">
        <h1 className="text-lg font-bold">Settings</h1>
        < SheetDemo />
      </div>
    </header>
  );
};

export default NavBar;
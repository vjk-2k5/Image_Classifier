import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./Button"; // Assuming you already have a Button component
import { SheetDemo } from "./Profile";

export const NavBar = () => {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow">
      <div className="container mx-auto flex justify-between p-4">
        <h1 className="text-lg font-bold">Image-Recognizer</h1>
        < SheetDemo />
      </div>
    </header>
  );
};
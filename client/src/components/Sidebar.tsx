import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/Button"; // Assuming you already have a Button component

export const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-secondary text-secondary-foreground shadow-lg">
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <Button variant="link" asChild>
              <a href="#dashboard">Main Arena</a>
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="link" asChild>
              <a href="#settings">Settings</a>
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="link" asChild>
              <a href="#profile">Profile</a>
            </Button>
          </li>
          <li className="mb-4">
            <Button variant="link" asChild>
              <a href="#logout">Logout</a>
            </Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

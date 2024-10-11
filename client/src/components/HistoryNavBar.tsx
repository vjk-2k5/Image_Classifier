import { SheetDemo } from "./Profile";

export const NavBar = () => {
  return (
    <header className="w-full bg-primary text-primary-foreground shadow">
      <div className="container mx-auto flex justify-between p-4">
        <h1 className="text-lg font-bold">History</h1>
        < SheetDemo />
      </div>
    </header>
  );
};

export default NavBar;

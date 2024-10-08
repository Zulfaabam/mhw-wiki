import React from "react";
import Navbar from "./Navbar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen w-full">
      <main className="px-4 md:px-20 pt-4 md:pt-10 pb-4 min-h-screen relative bg-coral bg-cover bg-gray-600 bg-blend-multiply">
        {children}
      </main>
      <Navbar />
    </div>
  );
};

export default MainLayout;

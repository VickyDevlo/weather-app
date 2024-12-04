import React from "react";
import { useTheme } from "@/context/theme-provider";
import { ThemeToggle } from "@/shared/ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95             backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
        <Link to="/">
          <img
            src={isDark ? "/logo_dark.png" : "/logo_light.png"}
            alt="logo"
            className="h-14"
          />
        </Link>
        <div className="">
          {/* search */} 
           <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

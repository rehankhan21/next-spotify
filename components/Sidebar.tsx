"use client"; //sidebar will be dynamic

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Box from "./Box";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  // useMemo saves this as a cached result for future use
  // caches the routes, so they dont have to fully load everytime we switch back
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        // the home navigation will be active everytime we are
        // not on the search path
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div className=" hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>Sidebar Navigation</Box>
      </div>
    </div>
  );
};

export default Sidebar;

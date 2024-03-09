import React from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full text-white flex-col items-center pb-3 sm:pb-0 sm:flex-row sm:max-w-screen sm:px-6">
      <Link href="/">
        <img
          src="/cinesphere_logo.svg"
          className="h-12 w-auto sm:w-[50%] sm:h-full"
        ></img>
      </Link>
      <SearchInput />
    </nav>
  );
};

export default NavBar;

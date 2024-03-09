import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full text-white flex-col items-center pb-3 sm:pt-2 sm:flex-row sm:max-w-screen sm:px-6">
      <Link href="/">
        <img src="/cinesphere_logo.svg" className="h-12 w-auto sm:w-64"></img>
      </Link>
    </nav>
  );
};

export default NavBar;

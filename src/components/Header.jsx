import Link from "next/link";
import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-5">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="font-semibold">BBD</h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <button>Hire Me</button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="lg:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;

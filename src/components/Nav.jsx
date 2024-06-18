"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } hover:text-accent transition-all`}
            href={link.path}
            key={index}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

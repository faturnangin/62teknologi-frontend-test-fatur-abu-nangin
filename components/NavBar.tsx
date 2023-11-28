"use client";
import React from "react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import ModeToggle from "./ModeToggle";

export default function NavBar() {
  const mobileNav = useRef<HTMLUListElement>(null);
  const toggleNav = () => {
    const nav = mobileNav.current;
    if (nav) {
      nav.classList.toggle("hidden");
    }
  };
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleScroll() {
      const navPos = nav.current?.offsetTop;
      if (window.scrollY > navPos!) {
        // nav.current?.classList.add("fixed");
        nav.current?.classList.add("border-b");
        // nav.current?.classList.add("backdrop-blur-2xl");
      } else {
        // nav.current?.classList.remove("fixed");
        nav.current?.classList.remove("border-b");
        // nav.current?.classList.remove("backdrop-blur-2xl");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      ref={nav}
      className="sticky z-50 backdrop-blur-2xl flex items-center top-0 left-0 w-full bg-grayscale1/70 dark:bg-transparent h-[68px] dark:border-slate-800 border-grayscale2 dark:transition dark:duration-200"
    >
      <div className="container mx-auto">
        <div className="w-full px-1 md:px-12 lg:px-20 h-[50px] flex items-center justify-between dark:text-white">
          <div className="font-bold">Business Finder</div>
          <ul className="hidden md:flex space-x-[100px] text-sm font-medium text-deepblue dark:text-grayscale1">
            <li className="hover:text-blue dark:hover:text-grayscale2">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue dark:hover:text-grayscale2">
              <Link href="/#main">Discover</Link>
            </li>
            <li className="hover:text-blue dark:hover:text-grayscale2">
              <Link href="/#search">Search</Link>
            </li>
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

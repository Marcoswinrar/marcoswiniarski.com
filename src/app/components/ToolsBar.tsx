"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpMenuIcon, HomeMenuIcon, MobileMenuIcon } from "./Icons";
import MobileMenu from "./MobileMenu";

const ToolsBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const scrollTop = () => window.scrollTo({top: 0, left: 0, behavior: "smooth" });

  return (
    <>
      <div
        className={arrowUpStyle}
        onClick={scrollTop}
      >
        <ArrowUpMenuIcon />
      </div>
      <aside className={asideStyle}>
        <Link className={homeIconStyle} href={"/"}>
          <HomeMenuIcon />
        </Link>
        <div onClick={() => setMenuOpen(!isMenuOpen)}>
          <MobileMenuIcon />
        </div>
      </aside >
      {isMenuOpen &&
        <MobileMenu handleMenu={() => setMenuOpen(!isMenuOpen)} />
      }
    </>
  )
}

const asideStyle = `
  fixed 
  xl:hidden 
  bottom-0 
  w-full 
  h-[2.5rem] 
  bg-gradient-to-r 
  from-pink-950 
  to-indigo-950 
  flex 
  items-center 
  justify-center
  cursor-pointer
`;

const homeIconStyle = `
  absolute
  left-0
  mx-3
`;

const arrowUpStyle = `
  fixed
  cursor-pointer
  bottom-0
  right-0
  pt-[0.1rem]
  p-[0.50rem]
  z-10
`;

export default ToolsBar;

"use client";
import React, { useState } from "react";
import { MobileMenuIcon } from "./Icons";
import MobileMenu from "./MobileMenu";

const ToolsBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <aside className="fixed xl:hidden bottom-0 w-full h-[2.5rem] bg-gradient-to-r from-pink-950 to-indigo-950 flex items-center justify-center">
        <div onClick={() => setMenuOpen(!isMenuOpen)}>
          <MobileMenuIcon />
        </div>
      </aside>
      {isMenuOpen && <MobileMenu/>}
    </>
  )
}

export default ToolsBar

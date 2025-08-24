"use client";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  // Detect outside clicks
  useEffect(() => {
    function handleClickOutside(event) {
      if (!menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <div className="p-4 h-dvh bg-[url('../public/hero.png')] bg-center bg-cover ">
      <header className="md:mx-10 ">
        <nav className="flex justify-between items-center">
          {/** Logo */}
          <div>
            <img src="./logo.png" className="w-14 md:w-20" alt="terra logo" />
          </div>

          {/** Desktop Menu */}
          <div className="hidden md:block lg:mr-20">
            <ul className=" md:flex flex-row gap-8 lg:text-lg font-semibold text-white">
              <li>
                <a href="" className="hover:underline ">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Stories
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Data
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/** Mobile Menu Button */}
          <div className="md:hidden px-2" onClick={() => setOpenMenu(true)}>
            <i className="fa-solid fa-bars text-xl text-white"></i>
          </div>

          {/** Mobile Sidebar */}
          <div
            ref={menuRef}
            className={`flex justify-center py-10 fixed  top-0 right-0 h-full bg-neutral-800 transition-all duration-300 overflow-hidden
    ${openMenu ? "w-1/2" : "w-0"}
  `}
          >
            <ul className="flex flex-col gap-4 font-semibold text-lg text-white">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Stories</a>
              </li>
              <li>
                <a href="">Data</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className=" flex  justify-center py-20">
          <div className="text-center max-w-2xl px-4">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              25 Years. 5 Instruments. 1 Planet.
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              NASA’s Terra satellite has been watching Earth since 1999. Explore
              how its data tells stories about our environment, our communities,
              and our future.
            </p>

            {/* Call-to-Action Button */}
            <a
              href="#stories"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition"
            >
              Explore Stories
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

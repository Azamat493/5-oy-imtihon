import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div id="top"></div>
      <header className="bg-[var(--white)] sticky top-0 z-999 border-b-2 border-[#54729ecf]">
        <div className="max-w-[1224px] w-full mx-auto px-4 py-3 flex gap-5 items-center justify-between">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <nav className="hidden lgm:flex items-center justify-center gap-10 lgg:gap-20">
            <a
              href="/"
              onClick={closeMenu}
              className="font-light text-lg text-center text-[color:var(--black)] font-family hover:text-blue-600 transition duration-200"
            >
              Home
            </a>
            <a
              href="/products"
              onClick={closeMenu}
              className="font-light text-lg text-center text-[color:var(--black)] font-family hover:text-blue-600 transition duration-200"
            >
              New Products
            </a>
            <a
              href="/technology"
              onClick={closeMenu}
              className="font-light text-lg text-center text-[color:var(--black)] font-family hover:text-blue-600 transition duration-200"
            >
              Technology
            </a>
            <a
              href="/best"
              onClick={closeMenu}
              className="font-light text-lg text-center text-[color:var(--black)] font-family hover:text-blue-600 transition duration-200"
            >
              Best
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="font-light text-lg text-center text-[color:var(--black)] font-family hover:text-blue-600 transition duration-200"
            >
              Contact Us
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hover:text-[#063A88] transition cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.6501C11.69 21.6501 11.39 21.6101 11.14 21.5201C7.32 20.2101 1.25 15.5601 1.25 8.6901C1.25 5.1901 4.08 2.3501 7.56 2.3501C9.25 2.3501 10.83 3.0101 12 4.1901C13.17 3.0101 14.75 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.2001 22.75 8.6901C22.75 15.5701 16.68 20.2101 12.86 21.5201C12.61 21.6101 12.31 21.6501 12 21.6501ZM7.56 3.8501C4.91 3.8501 2.75 6.0201 2.75 8.6901C2.75 15.5201 9.32 19.3201 11.63 20.1101C11.81 20.1701 12.2 20.1701 12.38 20.1101C14.68 19.3201 21.26 15.5301 21.26 8.6901C21.26 6.0201 19.1 3.8501 16.45 3.8501C14.93 3.8501 13.52 4.5601 12.61 5.7901C12.33 6.1701 11.69 6.1701 11.41 5.7901C10.48 4.5501 9.08 3.8501 7.56 3.8501Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="hover:text-[#063A88] transition cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.19086 6.37994C5.00086 6.37994 4.80086 6.29994 4.66086 6.15994C4.37086 5.86994 4.37086 5.38994 4.66086 5.09994L8.29086 1.46994C8.58086 1.17994 9.06086 1.17994 9.35086 1.46994C9.64086 1.75994 9.64086 2.23994 9.35086 2.52994L5.72086 6.15994C5.57086 6.29994 5.38086 6.37994 5.19086 6.37994Z"
                  fill="currentColor"
                />
                <path
                  d="M18.8091 6.37994C18.6191 6.37994 18.4291 6.30994 18.2791 6.15994L14.6491 2.52994C14.3591 2.23994 14.3591 1.75994 14.6491 1.46994C14.9391 1.17994 15.4191 1.17994 15.7091 1.46994L19.3391 5.09994C19.6291 5.38994 19.6291 5.86994 19.3391 6.15994C19.1991 6.29994 18.9991 6.37994 18.8091 6.37994Z"
                  fill="currentColor"
                />
                <path
                  d="M20.21 10.6001C20.14 10.6001 20.07 10.6001 20 10.6001H19.77H4C3.3 10.6101 2.5 10.6101 1.92 10.0301C1.46 9.5801 1.25 8.8801 1.25 7.8501C1.25 5.1001 3.26 5.1001 4.22 5.1001H19.78C20.74 5.1001 22.75 5.1001 22.75 7.8501C22.75 8.8901 22.54 9.5801 22.08 10.0301C21.56 10.5501 20.86 10.6001 20.21 10.6001ZM4.22 9.1001H20.01C20.46 9.1101 20.88 9.1101 21.02 8.9701C21.09 8.9001 21.24 8.6601 21.24 7.8501C21.24 6.7201 20.96 6.6001 19.77 6.6001H4.22C3.03 6.6001 2.75 6.7201 2.75 7.8501C2.75 8.6601 2.91 8.9001 2.97 8.9701C3.11 9.1001 3.54 9.1001 3.98 9.1001H4.22Z"
                  fill="currentColor"
                />
                <path
                  d="M9.75977 18.3C9.34977 18.3 9.00977 17.96 9.00977 17.55V14C9.00977 13.59 9.34977 13.25 9.75977 13.25C10.1698 13.25 10.5098 13.59 10.5098 14V17.55C10.5098 17.97 10.1698 18.3 9.75977 18.3Z"
                  fill="currentColor"
                />
                <path
                  d="M14.3594 18.3C13.9494 18.3 13.6094 17.96 13.6094 17.55V14C13.6094 13.59 13.9494 13.25 14.3594 13.25C14.7694 13.25 15.1094 13.59 15.1094 14V17.55C15.1094 17.97 14.7694 18.3 14.3594 18.3Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8907 22.75H8.86073C5.28073 22.75 4.48073 20.62 4.17073 18.77L2.76073 10.12C2.69073 9.71 2.97073 9.33 3.38073 9.26C3.79073 9.19 4.17073 9.47 4.24073 9.88L5.65073 18.52C5.94073 20.29 6.54073 21.25 8.86073 21.25H14.8907C17.4607 21.25 17.7507 20.35 18.0807 18.61L19.7607 9.86C19.8407 9.45 20.2307 9.18 20.6407 9.27C21.0507 9.35 21.3107 9.74 21.2307 10.15L19.5507 18.9C19.1607 20.93 18.5107 22.75 14.8907 22.75Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="hover:text-[#063A88] transition cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                  fill="currentColor"
                />
                <path
                  d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <button
            className="lgm:hidden flex flex-col space-y-1 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-[var(--black)]"></span>
            <span className="block w-6 h-0.5 bg-[var(--black)]"></span>
            <span className="block w-6 h-0.5 bg-[var(--black)]"></span>
          </button>
          {isMenuOpen && (
            <div className="fixed inset-0 z-40" onClick={closeMenu}></div>
          )}
          <nav
            className={`fixed top-0 right-0 h-full w-64 bg-[#3792e1] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex flex-col p-6 pt-16 space-y-6">
              <a
                href="/"
                onClick={closeMenu}
                className="font-light text-lg text-[var(--white)] font-family"
              >
                Home
              </a>
              <a
                href="/products"
                onClick={closeMenu}
                className="font-light text-lg text-[var(--white)] font-family"
              >
                New Products
              </a>
              <a
                href="/technology"
                onClick={closeMenu}
                className="font-light text-lg text-[var(--white)] font-family"
              >
                Technology
              </a>
              <a
                href="/best"
                onClick={closeMenu}
                className="font-light text-lg text-[var(--white)] font-family"
              >
                Best
              </a>
              <a
                href="#"
                onClick={closeMenu}
                className="font-light text-lg text-[var(--white))] font-family"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

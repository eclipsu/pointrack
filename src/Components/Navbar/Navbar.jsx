import React from "react";
import Logo from "../../assets/Logo";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap font-sans cursor-pointer">
            <Logo />
          </span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="/login"
              className="text-[#12235B] font-medium font-sans text-base block py-2 px-3 bg-blue-700 rounded md:bg-transparent "
              aria-current="page"
            >
              Login
            </a>
            <button
              type="button"
              className="text-white bg-[#4A69FF] pt-2 pr-4 pb-2 pl-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Pointrack for free
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  ">
              <li>
                <a
                  href="#"
                  className="text-[#12235B] text-base block py-2 px-3 bg-blue-700 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12235B] text-base block py-2 px-3 bg-blue-700 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#12235B] text-base block py-2 px-3 bg-blue-700 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black block py-2 px-3 bg-blue-700 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 space-x-10 sm:space-x-20 text-2xl whitespace-nowrap overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`?genre=${key}`)}
              className="transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute w-1/12 h-10 top-0 right-0 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
}

export default Nav;

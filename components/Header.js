import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightBulbIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col m-5 items-center justify-between h-auto sm:flex-row">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightBulbIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collections" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="logo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;

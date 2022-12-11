import Image from "next/image";
import React from "react";

export default function Navbar() {
  const menu = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About me",
      link: "#",
    },
    {
      name: "My work",
      link: "#",
    },
  ];
  return (
    <div className="flex w-full items-center justify-between  ">
      <div>
        <Image
          alt="Deepak prajapati"
          src="/logo.png"
          width={100}
          height={100}
        />
      </div>
      <div className="flex space-x-5 text-green-300 ">
        {menu.map((m) => {
          return <span key={m}>{m.name}</span>;
        })}
      </div>
    </div>
  );
}

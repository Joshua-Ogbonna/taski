import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Image
        src="/logo.svg"
        alt="logo"
        width={83}
        height={28}
        className="cursor-pointer"
      />

      <div className="flex items-center gap-3 cursor-pointer">
        <h5>John</h5>
        <Image src="/profile.svg" alt="" width={42} height={42} />
      </div>
    </div>
  );
};

export default Navbar;

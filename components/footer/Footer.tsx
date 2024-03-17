"use client";

import React, { useState } from "react";
import Image from "next/image";
import AddDialog from "../dialog/AddDialog";
import { useRouter } from "next/navigation";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Dialog Component */}
      <AddDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="sm:hidden fixed bottom-0 w-[100%] flex items-center justify-between p-6 bg-[#fff] ">
        <div
          className="flex items-center justify-center flex-col cursor-pointer gap-2 text-[14px] font-urbanist text-[#007FFF] font-semibold "
          onClick={() => router.push("/")}
        >
          <Image src="/task.svg" alt="" width={24} height={24} />
          Todo
        </div>
        <div
          className="flex items-center justify-center flex-col cursor-pointer gap-2 text-[14px] font-urbanist text-[#C6CFDC] font-medium "
          onClick={() => setIsOpen(true)}
        >
          <Image src="/plus.svg" alt="" width={24} height={24} />
          Create
        </div>
        <div className="flex items-center justify-center flex-col cursor-pointer gap-2 text-[14px] font-urbanist text-[#C6CFDC] font-medium ">
          <Image src="/search_icon.svg" alt="" width={24} height={24} />
          Search
        </div>
        <div
          className="flex items-center justify-center flex-col cursor-pointer gap-2 text-[14px] font-urbanist text-[#C6CFDC] font-medium "
          onClick={() => router.push("/done")}
        >
          <Image src="/done.svg" alt="" width={24} height={24} />
          Done
        </div>
      </div>
    </>
  );
};

export default Footer;

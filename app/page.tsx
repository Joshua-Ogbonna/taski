"use client";

import Tasklists from "@/components/tasklists/Tasklists";
import { useAppContext } from "contexts/AppContext";
import Image from "next/image";

export default function Home() {
  const { todos, searchQuery, setSearchQuery } = useAppContext();
  return (
    <main className="pt-12 pb-[100px]">
      {/* Header section */}
      <div className="flex items-end justify-between">
        <div>
          <h3 className="font-bold font-urbanist text-[20px] lg:text-[28px] leading-[33.6px] text-[#3F3D56] min-h-[34px]">
            Welcome, <span className="text-[#007FFF]">John</span>.
          </h3>
          <p className="font-urbanist leading-[21.6px] text-[#8D9CB8] text-[16px] lg:text-[18px] font-medium mt-1">
            {`You’ve`} got {todos && todos.length}{" "}
            {todos && todos.length > 1 ? "tasks" : "task"} to do.
          </p>
        </div>

        <div className="hidden sm:block relative w-[260px] h-[38px]">
          <Image
            src="/search.svg"
            alt=""
            width={16}
            height={16}
            className="absolute left-4 bottom-3"
          />
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="w-[100%] h-[100%] pl-10 bg-[#F5F7F9] rounded-xl text-base font-urbanist font-medium"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tasks List */}
      <Tasklists />
    </main>
  );
}

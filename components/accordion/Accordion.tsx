"use client";

import React, { FC, useState } from "react";
import TaskDetail from "../task-detail/TaskDetail";
import Image from "next/image";

interface Props {
  title: string;
  content: string;
  completed: boolean;
}

const Accordion: FC<Props> = ({ title, content, completed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-[#F5F7F9] p-6 rounded-[20px] my-6">
      {/* Head */}
      <div className="flex items-center justify-between cursor-pointer">
        <div className="flex items-start gap-4">
          {completed ? (
            <div className="bg-[#C6CFDC] w-[24px] h-[24px] opacity-50 rounded-[7px] flex items-center justify-center">
              <Image src="/checked.svg" alt="" width={10} height={6} />
            </div>
          ) : (
            <input
              type="checkbox"
              name="check"
              className={`w-[24px] h-[24px] bg-[#C6CFDC] rounded-[7px] border-4 border-solid border-[#C6CFDC] cursor-pointer`}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          )}
          <h5
            className={`w-[100%] text-[16px] md:text-[18px] leading-[19.2px] md:leading-[21.6px] ${
              checked
                ? "text-checked-color"
                : !completed
                ? "text-[#3F3D56]"
                : "text-[#8D9CB8]"
            } font-urbanist font-semibold ${checked ? "line-through" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {" "}
            {title}{" "}
          </h5>
        </div>
        <div className="flex items-center justify-between">
          {!completed ? (
            <div className="flex items-center gap-4">
              <Image
                src="/forward.svg"
                alt=""
                width={30}
                height={30}
                className="cursor-pointer hidden md:block"
              />
              <Image
                src="/edit.svg"
                alt=""
                width={30}
                height={30}
                className="cursor-pointer hidden md:block"
              />
              <Image
                src="/remove.svg"
                alt=""
                width={30}
                height={30}
                className="cursor-pointer hidden md:block"
              />
              <Image
                src="/dots.svg"
                alt=""
                width={24}
                height={24}
                className="cursor-pointer block md:hidden "
              />
            </div>
          ) : (
            <div className="flex items-center justify-end ">
              <Image
                src="/delete.svg"
                alt=""
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <TaskDetail content={content} />
      </div>
    </div>
  );
};

export default Accordion;

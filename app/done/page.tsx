"use client";

import Accordion from "@/components/accordion/Accordion";
import Pagination from "@/components/shared/Pagination";
import { useAppContext } from "contexts/AppContext";
import React from "react";

const Done = () => {
  const { currentItems } = useAppContext();

  return (
    <div className="pb-[100px] pt-[20px] ">
      {/* Completed tasks list */}
      <div className="block sm:hidden ">
        {currentItems && currentItems.length ? (
          <div className="flex items-center justify-between mt-6 ">
            <div className="font-urbanist leading-[21.6px] text-[#8D9CB8] text-[18px] font-medium">
              Completed tasks{" "}
            </div>

            <div className="h-[30px] rounded-[8px] flex items-center justify-center cursor-pointer py-2 px-[8px] text-color-rgba font-semibold leading-[21.6px] text-[18px] font-urbanist ">
              Delete all
            </div>
          </div>
        ) : null}

        {currentItems &&
          currentItems
            .filter((task) => task.completed)
            .map((task) => (
              <Accordion
                title={task.title}
                content=""
                key={task.id}
                completed={task.completed}
              />
            ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Done;

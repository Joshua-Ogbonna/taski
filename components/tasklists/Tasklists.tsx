"use client";

import React, { useEffect, useState, KeyboardEvent } from "react";
import axios from "axios";
import Image from "next/image";

import Accordion from "../accordion/Accordion";
import { useAppContext } from "contexts/AppContext";
import Pagination from "../shared/Pagination";

const Tasklists = () => {
  const {
    todos,
    loader,
    todo,
    setTodo,
    postTodo,
    isInputActive,
    setIsInputActive,
    currentItems,
  } = useAppContext();

  return (
    <div>
      {/* Add new task */}
      <div className="hidden lg:block">
        <div className="p-6 pb-2 mt-6 flex items-center gap-4">
          <Image
            src={todo.title.length ? "/add_active.svg" : "/add.svg"}
            alt=""
            width={24}
            height={24}
          />
          {loader === "creating" ? (
            <div className="p-6 font-urbanist leading-[21.6px] text-[#8D9CB8] text-[18px] font-medium">
              Creating todo
            </div>
          ) : (
            <>
              <input
                type="text"
                name="newTask"
                placeholder="Tap “Enter” to create task"
                className="w-[208px] h-[22px] font-urbanist text-[18px] leading-[21.6px] text-[#8D9CB8]"
                value={todo.title}
                onChange={(e) => {
                  setTodo({ ...todo, title: e.target.value });
                  setIsInputActive(e.target.value.trim() !== "");
                }}
              />
            </>
          )}
        </div>
        {isInputActive ? (
          <div className="p-6 pt-0 mt-6 flex items-center gap-4">
            <Image src={"/plus.svg"} alt="" width={24} height={24} />
            <input
              type="text"
              name="body"
              placeholder="Add a note..."
              className="w-[208px] h-[22px] font-urbanist text-[18px] leading-[21.6px] text-[#8D9CB8]"
              value={todo.body}
              onChange={(e) => {
                setTodo({ ...todo, body: e.target.value });
              }}
              onKeyDown={postTodo}
            />
          </div>
        ) : null}
      </div>

      {/* Tasks */}
      <div>
        {loader === "fetching" ? (
          <div className="p-6 font-urbanist leading-[21.6px] text-[#8D9CB8] text-[18px] font-medium">
            Fetching todos
          </div>
        ) : (
          <>
            {/* Uncomplete tasks list */}
            <div>
              {currentItems &&
                currentItems
                  .filter((task) => !task.completed)
                  .map((task) => (
                    <Accordion
                      title={task.title}
                      content=""
                      key={task.id}
                      completed={task.completed}
                    />
                  ))}
            </div>

            {/* Completed tasks list */}
            <div className="hidden sm:block ">
              {currentItems && currentItems.length ? (
                <div className="flex items-center justify-between mb-[-10px] ">
                  <div className="font-urbanist leading-[21.6px] text-[#8D9CB8] text-[18px] font-medium">
                    Completed tasks{" "}
                  </div>

                  <div className="h-[30px] bg-red-rgba rounded-[8px] flex items-center justify-center cursor-pointer py-2 px-[8px] text-color-rgba font-semibold leading-[21.6px] text-[18px] font-urbanist ">
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
          </>
        )}

        <Pagination />
      </div>
    </div>
  );
};

export default Tasklists;

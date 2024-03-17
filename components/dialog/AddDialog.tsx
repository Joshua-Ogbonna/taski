"use client";

import { useAppContext } from "contexts/AppContext";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddDialog: FC<Props> = ({ isOpen, onClose }) => {
  const { todo, setTodo, postTodo, loader } = useAppContext();

  return (
    <>
      {isOpen && (
        <div className="fixed sm:hidden bottom-0 bg-[#fff] w-[100%] h-[423px] z-50 rounded-t-[24px] drop-shadow-lg py-8 px-12 ">
          <div className="flex items-center gap-4 ">
            <Image src="/unchecked.svg" alt="" width={24} height={24} />
            <input
              type="text"
              name="title"
              placeholder="What’s in your mind?"
              className="text-[16px] font-urbanist font-medium leading-[19.2px] "
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
          </div>
          <div className="flex items-center gap-4 my-8 ">
            <Image src="/pen.svg" alt="" width={24} height={24} />
            <input
              type="text"
              name="note"
              placeholder="Add a note..."
              className="text-[16px] font-urbanist font-medium leading-[19.2px] "
              value={todo.body}
              onChange={(e) => setTodo({ ...todo, body: e.target.value })}
            />
          </div>

          <h5
            className="text-[#007FFF] font-urbanist text-[16px] leading-[19.2px] font-bold text-right cursor-pointer "
            onClick={() => {
              postTodo();
              setTimeout(() => {
                if (loader === null) onClose();
              }, 3000);
            }}
          >
            {loader === "creating" ? "Creating todo" : "Create"}
          </h5>
        </div>
      )}
    </>
  );
};

export default AddDialog;

// box-shadow: 0px -6px 24px 0px #C6CFDC80;

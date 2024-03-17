import React, { FC } from "react";

interface Props {
  content: string;
}

const TaskDetail: FC<Props> = ({ content }) => {
  return (
    <div className="text-[#8D9CB8] text-[16px] leading-[19.2px] font-medium font-urbanist mt-2 w-[100%] lg:w-[912px]">
      {content}{" "}
    </div>
  );
};

export default TaskDetail;

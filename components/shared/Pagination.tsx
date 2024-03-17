"use client";

import { useAppContext } from "contexts/AppContext";
import React from "react";

const Pagination = () => {
  const { currentPage, handlePageChange, totalPages } = useAppContext();
  return (
    <div className="flex justify-center mt-4">
      <button
        className="mx-2 px-3 py-1 bg-gray-200 rounded-md"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>
      {/* {Array.from({ length: totalPages }, (_, index) => (
     <button
       key={index + 1}
       className={`mx-2 px-3 py-1 rounded-md ${
         currentPage === index + 1
           ? "bg-blue-500 text-white"
           : "bg-gray-200"
       }`}
       onClick={() => handlePageChange(index + 1)}
     >
       {index + 1}
     </button>
   ))} */}
      <button
        className="mx-2 px-3 py-1 bg-gray-200 rounded-md"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

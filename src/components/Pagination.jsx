import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [1, 2, 3];

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-9 h-9 border rounded ${
            currentPage === page ? 'bg-green-100 font-bold' : ''
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pages.length}
        className="w-9 h-9 inline-flex justify-center items-center border rounded text-green-700 disabled:text-gray-300"
      >
        <IoIosArrowForward size={24}/>
      </button>
    </div>
  );
}

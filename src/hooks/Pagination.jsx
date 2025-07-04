import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function Pagination({ currentPage, getPaginationRange, data, setCurrentPage, isFetching }) {

  return (
    <div className="flex justify-center items-center gap-2 mt-4 mb-5 inter">
          <button
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1 || isFetching}
          >
            First
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1 || isFetching}
          >
            <FaChevronLeft size={16} className="hover:text-black text-gray-500"/>
          </button>

          {getPaginationRange().map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-md ${
                page === currentPage
                  ? "bg-[#0c0c0c] text-white"
                  : page === "..." || isFetching
                  ? ""
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => page !== "..." && setCurrentPage(page)}
              disabled={page === "..." || isFetching}
            >
              {page}
            </button>
          ))}
          <button
          
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={
              currentPage >= (data?.totalPages || 0) || isFetching
            }
          >
            <FaChevronRight size={16} className="hover:text-black text-gray-500"/>
          </button>
          <button
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
            onClick={() => setCurrentPage(data?.totalPages|| 1)}
            disabled={
              currentPage >= (data?.totalPages|| 0) || isFetching
            }
          >
            Last
          </button>
        </div>
  );
} 
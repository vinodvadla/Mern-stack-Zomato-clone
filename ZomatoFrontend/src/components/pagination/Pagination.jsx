import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
function Pagination({ pages, page, increment, decrement, customIncr }) {
  return (
    <div className="w-full h-10 flex items-center gap-2 justify-center mt-3">
      <button
        className="px-3 py-3 active:bg-slate-700 bg-black text-white font-bold rounded disabled:opacity-50 disabled:bg-slate-500"
        onClick={decrement}
        disabled={page == 1 ? true : false}
      >
        <AiOutlineArrowLeft className="font-bold" />
      </button>
      {pages.map((e, i) => {
        return (
          <button
            onClick={() => {
              customIncr(e);
            }}
            key={i}
            className={
              page === e
                ? "px-3 py-2 bg-red-400 text-white font-bold rounded"
                : "px-3 py-2 bg-black text-white font-bold rounded"
            }
          >
            {e}
          </button>
        );
      })}
      <button
        onClick={increment}
        disabled={page == pages.length ? true : false}
        className="px-3 py-3 active:bg-slate-700 bg-black text-white font-bold rounded disabled:opacity-50 disabled:bg-slate-500"
      >
        <AiOutlineArrowRight className="font-bold" />
      </button>
    </div>
  );
}

export default Pagination;

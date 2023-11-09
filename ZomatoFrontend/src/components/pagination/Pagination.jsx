import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
function Pagination() {
  const [page, setPage] = useState(1);
  let arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="w-full h-10 flex items-center gap-2 justify-center mt-3">
      <button
        className="px-3 py-3 active:bg-slate-700 bg-black text-white font-bold rounded"
        onClick={() => {
          if (page !== arr[0]) {
            setPage((prev) => prev - 1);
          }
        }}
      >
        <AiOutlineArrowLeft className="font-bold" />
      </button>
      {arr.map((e, i) => {
        return (
          <button
            onClick={() => {
              setPage(e);
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
        onClick={() => {
          if (page !== arr[arr.length - 1]) setPage((prev) => prev + 1);
        }}
        className="px-3 py-3 active:bg-slate-700 bg-black text-white font-bold rounded"
      >
        <AiOutlineArrowRight className="font-bold" />
      </button>
    </div>
  );
}

export default Pagination;

import { useState } from "react";

export default function ProductCard({ product }) {
  const { nama, deskripsi, imageURL } = product;
  const [counter, setCounter] = useState(0);
  const handleAddCounter = () => {
    setCounter(counter + 1);
  };
  const handleMinCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="relative flex flex-col gap-y-5 border-2 border-black rounded-lg overflow-hidden shadow-lg justify-between">
      <img src={imageURL} alt="" className="w-full object-cover h-[220px]" />
      <div className="mx-3">
        <h2 className="text-2xl font-semibold mb-3">{nama}</h2>
        <p className="text-base">{deskripsi}</p>
      </div>
      <div className="mx-3">
        {counter ? (
          <div className="mb-3 h-[50px] flex justify-center items-center gap-x-2">
            <button
              type="button"
              className="border border-black h-5 w-5 flex justify-center items-center rounded text-lg font-semibold"
              onClick={handleAddCounter}
            >
              +
            </button>
            <span className="text-lg font-bold">{counter}</span>
            <button
              type="button"
              className="border border-black h-5 w-5 flex justify-center items-center rounded text-lg font-semibold"
              onClick={handleMinCounter}
            >
              -
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              className="mb-3 h-[50px] w-full bg-blue-600 rounded-md font-medium text-white"
              onClick={handleAddCounter}
            >
              Keranjang
            </button>
          </>
        )}
      </div>
    </div>
  );
}

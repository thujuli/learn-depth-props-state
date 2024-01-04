import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import EditProduct from "./EditProduct";

export default function ProductCard({
  product,
  onDeleteProduct,
  onEditProduct,
}) {
  const [counter, setCounter] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const handleAddCounter = () => {
    setCounter(counter + 1);
  };
  const handleMinCounter = () => {
    setCounter(counter - 1);
  };
  const handleDeleteProduct = () => {
    onDeleteProduct(product.id);
  };
  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };
  return (
    <>
      {showEdit ? (
        <EditProduct
          product={product}
          handleShowEdit={handleShowEdit}
          onEditProduct={onEditProduct}
        />
      ) : (
        <div className="relative flex flex-col gap-y-5 border-2 border-black rounded-lg overflow-hidden shadow-lg justify-between">
          <div className="absolute top-0 right-0 bg-slate-400 px-1 space-x-2 rounded">
            <button type="button">
              <FaEdit
                className="hover:text-yellow-300"
                onClick={handleShowEdit}
              />
            </button>
            <button type="button">
              <MdDeleteForever
                className="hover:text-red-400"
                onClick={handleDeleteProduct}
              />
            </button>
          </div>
          <img
            src={product.imageURL}
            alt=""
            className="w-full object-cover h-[220px]"
          />
          <div className="mx-3">
            <h2 className="text-2xl font-semibold mb-3">{product.nama}</h2>
            <p className="text-base">{product.deskripsi}</p>
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
      )}
    </>
  );
}

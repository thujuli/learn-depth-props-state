import { useContext, useState } from "react";
import ProductContext from "../context/products";

export default function EditProduct({ product, handleShowEdit }) {
  const { onEditProduct } = useContext(ProductContext);
  const initialState = {
    id: product.id,
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProduct(product.id, formData);
    handleShowEdit();
  };
  return (
    <div className="flex flex-col border-2 border-black rounded-lg shadow-lg py-3 px-2 justify-center">
      <h3 className="font-serif text-xl text-center font-semibold mb-5">
        Edit Product
      </h3>
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          id="nama"
          value={formData.nama}
          onChange={handleChange}
          className="h-10 w-full border rounded-lg px-2 border-gray-500/50 shadow-md font-medium  focus:border focus:border-gray-500/50 focus:outline-0 focus:shadow-lg"
        />
        <input
          type="text"
          name="deskripsi"
          id="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          className="h-10 w-full border rounded-lg px-2 border-gray-500/50 shadow-md font-medium  focus:border focus:border-gray-500/50 focus:outline-0 focus:shadow-lg"
        />
        <input
          type="text"
          name="imageURL"
          id="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
          className="h-10 w-full border rounded-lg px-2 border-gray-500/50 shadow-md font-medium  focus:border focus:border-gray-500/50 focus:outline-0 focus:shadow-lg"
        />
        <button
          type="submit"
          className="h-[50px] w-full bg-green-600 rounded-md font-medium text-white"
        >
          SUBMIT
        </button>
        <button
          type="button"
          className="h-[50px] w-full bg-red-600 rounded-md font-medium text-white"
          onClick={handleShowEdit}
        >
          CANCEL
        </button>
      </form>
    </div>
  );
}

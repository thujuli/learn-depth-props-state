import { useState } from "react";

export default function CreateProduct({ handleCreateProduct }) {
  const [showForm, setShowForm] = useState(false);
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateProduct(formData);
    setFormData(initialState);
  };
  return (
    <>
      <div className="mt-4 px-5">
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-3 h-[50px] py-3 px-5 bg-blue-600 rounded-md font-medium text-white ml-auto block"
        >
          {showForm ? "Close Form" : "Show Form"}
        </button>
      </div>
      {showForm && (
        <div className="w-1/3 mx-auto border-2 border-black rounded-lg p-4">
          <h2 className="text-center text-2xl font-medium mb-5 font-serif">
            Add Product
          </h2>
          <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nama"
              id="nama"
              value={formData.nama}
              placeholder="Product Name"
              onChange={handleChange}
              className="h-[50px] border rounded-lg px-2 border-gray-500/50 shadow-md font-medium  focus:border focus:border-gray-500/50 focus:outline-0 focus:shadow-lg"
            />
            <input
              type="text"
              name="deskripsi"
              id="deskripsi"
              value={formData.deskripsi}
              placeholder="Product Description"
              onChange={handleChange}
              className="h-[50px] border rounded-lg px-2 border-gray-500/50 shadow-md font-medium  focus:border focus:border-gray-500/50 focus:outline-0 focus:shadow-lg"
            />
            <input
              type="text"
              name="imageURL"
              id="imageURL"
              value={formData.imageURL}
              placeholder="Image URL"
              onChange={handleChange}
              className="h-[50px] border rounded-lg px-2 border-gray-500/50 shadow-md font-medium  focus:border focus:border-gray-500/50 focus:outline-0 focus:shadow-lg"
            />
            <button
              type="submit"
              className="mb-3 h-[50px] w-full bg-blue-600 rounded-md font-medium text-white"
            >
              SUBMIT
            </button>
          </form>
        </div>
      )}
    </>
  );
}

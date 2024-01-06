import axios from "axios";

export const getProducts = async () => {
  return await axios.get("http://localhost:3000/products");
};

export const createProduct = async (product) => {
  return await axios.post("http://localhost:3000/products", product);
};

export const deleteProduct = async (id) => {
  await axios.delete(`http://localhost:3000/products/${id}`);
};

export const updateProduct = async (id, data) => {
  return await axios.put(`http://localhost:3000/products/${id}`, data);
};

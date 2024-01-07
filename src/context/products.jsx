import { createContext, useState } from "react";
import {
  deleteProduct,
  getProducts,
  createProduct,
  updateProduct,
} from "../api/products";

const ProductContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await getProducts();
    setProducts([...response.data]);
  };
  const onCreateProduct = async (product) => {
    const response = await createProduct(product);
    setProducts([...products, response.data]);
  };
  const onDeleteProduct = async (id) => {
    deleteProduct(id);
    const newProducts = products.filter((product) => {
      return product.id != id;
    });
    setProducts(newProducts);
  };
  const onEditProduct = async (id, data) => {
    const response = await updateProduct(id, data);
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, ...response.data };
      }
      return product;
    });
    setProducts(newProducts);
  };

  const valueToShare = {
    products,
    fetchData,
    onCreateProduct,
    onDeleteProduct,
    onEditProduct,
  };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;

import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import CreateProduct from "./components/CreateProduct";
import {
  deleteProduct,
  getProducts,
  createProduct,
  updateProduct,
} from "./api/products";

function App() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await getProducts();
    setProducts([...response.data]);
  };
  useEffect(() => {
    fetchData();
  }, []);
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
  return (
    <div className="max-w-[1500px] mx-auto">
      <h1 className="text-center text-4xl font-medium mt-5">Belanja Mobil</h1>
      <CreateProduct onCreateProduct={onCreateProduct} />
      <div className="grid grid-cols-4 gap-5 mt-5 p-3">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            onDeleteProduct={onDeleteProduct}
            onEditProduct={onEditProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

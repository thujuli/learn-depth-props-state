import { useState } from "react";
import { Products } from "./data/product";
import ProductCard from "./components/ProductCard";
import CreateProduct from "./components/CreateProduct";

function App() {
  const [products, setProducts] = useState(Products);
  const handleCreateProduct = (product) => {
    setProducts([...products, product]);
  };
  return (
    <div className="max-w-[1500px] mx-auto">
      <h1 className="text-center text-4xl font-medium mt-5">Belanja Mobil</h1>
      <CreateProduct handleCreateProduct={handleCreateProduct} />
      <div className="grid grid-cols-4 gap-5 mt-5 p-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

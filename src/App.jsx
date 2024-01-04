import { useState } from "react";
import { Products } from "./data/product";
import ProductCard from "./components/ProductCard";
import CreateProduct from "./components/CreateProduct";

function App() {
  const [products, setProducts] = useState(Products);
  const onCreateProduct = (product) => {
    setProducts([
      ...products,
      { ...product, id: Math.floor(Math.random() * 7777777) },
    ]);
  };
  const onDeleteProduct = (id) => {
    const newProducts = products.filter((product) => {
      return product.id != id;
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
          />
        ))}
      </div>
    </div>
  );
}

export default App;

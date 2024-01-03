import { useState } from "react";
import { Products } from "./data/product";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState(Products);

  return (
    <div className="max-w-[1500px] mx-auto">
      <h1 className="text-center text-4xl font-medium mt-5">Belanja Mobil</h1>
      <div className="grid grid-cols-4 gap-5 mt-5 p-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

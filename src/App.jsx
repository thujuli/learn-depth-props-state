import { useEffect, useContext } from "react";
import ProductCard from "./components/ProductCard";
import CreateProduct from "./components/CreateProduct";
import ProductContext from "./context/products";

function App() {
  const { fetchData, products } = useContext(ProductContext);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[1500px] mx-auto">
      <h1 className="text-center text-4xl font-medium mt-5">Belanja Mobil</h1>
      <CreateProduct />
      <div className="grid grid-cols-4 gap-5 mt-5 p-3">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

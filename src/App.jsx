import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchProducts } from "./redux/features/products/productSlice";
import ProductCart from "./components/common/cards/ProductCart";
import CardProduct from "./components/common/cards/CardProduct";

function App() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  // console.log("products", products);
  // console.log("status", status);

  useEffect(() => {
    console.log("useEffect called");
    dispatch(fetchProducts());
  }, []);

  return (
    <section>
      <h1 className="text-3xl text-cyan-700 font-bold text-center mb-5">
        Our Products
      </h1>
      {status === "loading" && <h1>Loading...</h1>}
      {status === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {products?.slice(0, 20).map((product, index) => {
            return (
              <CardProduct
                image={product.images[0]}
                description={product.description}
                title={product.title}
                price={product.price}
                id={product.id}
                qty={1}
                key={index}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import { CardProductDetail } from "../../components/common/cards/CardProductDtail";
import { fetchProductById } from "../../redux/features/products/productSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const param = useParams();
  console.log("param", typeof param);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  console.log("product", product);

  useEffect(() => {
    dispatch(fetchProductById(`${param.id}`));
  }, []);

  return (
    <div className="flex justify-center items-center h-[90vh] flex-col">
      <h1 className="text-2xl text-cyan-700 font-bold mb-5">Product details</h1>
      <CardProductDetail
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.images}
      />
    </div>
  );
}

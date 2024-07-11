import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity
} from "../../../redux/features/cart/cartSlice";

export default function ProductCart({
  image,
  title,
  price,
  description,
  qty,
  id
}) {
  const dispatch = useDispatch();
  const handleIncreaseQty = (id) => {
    console.log("pro id when increase", id);
    console.log("handleIncreaseQty called");
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQty = (id) => {
    console.log("pro id when decrease", id);
    dispatch(decreaseQuantity(id));
  };
  return (
    <>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt={title}
                  height="100"
                  src={
                    image ||
                    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
                  }
                  width="100"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-2xl truncate font-medium text-gray-900 dark:text-white">
                  {title || "No title"}
                </p>
                <p className="truncate text-base text-gray-500 dark:text-gray-400">
                  {description || "No description"}
                </p>
                {/* increase and decrease qty */}
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => handleDecreaseQty(id)}
                    className="mx-2 px-2 py-1 rounded-sm bg-slate-400 "
                  >
                    -
                  </button>
                  <span className="mx-2 px-3 py-2 rounded-sm bg-slate-100">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleIncreaseQty(id)}
                    className="mx-2 px-2 py-1 rounded-sm bg-slate-400 "
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-2xl inline-flex items-center font-semibold text-gray-900 dark:text-white">
                {price ? price : "unavailable"} $
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

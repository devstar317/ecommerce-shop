import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";
import Link from "next/link";

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const addItemToCart = () => {
    //Sending the product as an action to the REDUX store... the cart slice
    dispatch(
      addToCart({ id, title, price, description, category, image, qty: 1 })
    );
  };

  return (
    <Fade bottom>
      <div className="relative flex flex-col m-4 bg-white z-30 md:p-8 p-6 rounded-md shadow-lg">
        <p className="absolute top-2 right-3 text-xs italic text-gray-400 capitalize">
          {category}
        </p>
        <Image
          src={image}
          height={200}
          width={200}
          objectFit="contain"
          className="cursor-pointer"
          onClick={() => router.push(`/product-details/${id}`)}
        />
        <h4 className="my-3 link font-medium">
          <Link href={`/product-details/${id}`}>{title}</Link>
        </h4>
        <p className="text-xs  mb-2 line-clamp-2 text-gray-500 link">
          <Link href={`/product-details/${id}`}>{description}</Link>
        </p>
        <div className="mb-5 mt-2 font-bold text-gray-700">
          <Currency quantity={price} currency="INR" />
        </div>
        <button className="mt-auto button" onClick={addItemToCart}>
          Add to Cart
        </button>
      </div>
    </Fade>
  );
}

export default Product;

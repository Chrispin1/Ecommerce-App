import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Header from "../components/Header";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, product.id);
  };

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <h1 className="h-screen flex justify-center items-center font-bold text-2xl">
        Loading...
      </h1>
    );
  }
  const { title, image, price, description } = product;
  return (
    <div className="relative">
      <Header />
      {/* <Link
        to={"/"}
        className="bg-black absolute px-4 py-2 text-white mx-10 my-10"
      >
        Home
      </Link> */}
      <section className="md:pt-[700px] pt-[150px] pb-12 lg:py-32 flex mx-auto items-center justify-center">
        <div className="flex flex-col md:flex-row px-20 mx-auto">
          <div className="md:w-1/2 mx-auto">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          <div className="md:w-1/2 md:ml-32">
            <h1 className="md:text-[26px] text-lg font-semibold mx-auto pt-4 md:pt-0">
              {title}
            </h1>
            <p className="text-red-500 mt-4 text-[26px] text-lg">$ {price}</p>
            <p className="max-w-[500px]">{description}</p>
            <button
              className="cursor-pointer px-2 py-2 bg-black text-white mt-4 focus:gray-500"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;

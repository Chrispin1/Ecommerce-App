import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

import Header from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAllProducts } from "@/store/nextSlice";
import { ProductProps } from "../../type";

interface Props{
  productData: ProductProps;
}
export default function Home({ productData}:Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllProducts({ allProducts: productData }));
  }, [productData]);
  return (
  <main>
   
   
    <div className="max-w-screen-2xl mx-auto"> <Banner />
    <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
    <Products productData={ productData}/></div>
    </div>
 
    </main>
   
  );
}

export const getServerSideProps = async()=>{
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return {props:{productData}};
};


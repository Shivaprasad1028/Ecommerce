import React from "react";
import Image from "next/image";

import { ProductProps } from "../../type"; 
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import ChangedPrice from "./ChangedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";


const Products = ({ productData }: any ) => {
 const dispatch = useDispatch()
  return (
    <div className='text-black w-full px-6 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-4'>
    {
        productData.map(
          ({
            _id,
            title,
            brand,
            category,
            description,
            image,
            isNew,
            oldPrice,
            price,
        }: ProductProps) =>(
            <div key={_id} className="w-full bg-white p-4 border border-gray-300 rounded-lg group overflow-hidden  ">
<div className="w-full relative h-[260px]" >
                <Image  className="w-full h-full object-cover scale-90 hover:scale-100 duration-300 transition-transform"
                 width={300} height={300} src={image} alt="productImage" />
              
             
                <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 rounded-md flex flex-col
                translate-x-20 duration-300 group-hover:translate-x-0 transition-transform "> 
               <span 
                   onClick={()=>
                    dispatch(addToCart({
                      _id:_id,
                          brand:brand,
                          category:category,
                          description:description,
                          image:image,
                          isNew:isNew,
                          oldPrice:oldPrice,
                          price:price,
                          title:title,
                           quantity:1,
                      
                      }))}
                  className="w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent 
                 cursor-pointer hover:bg-amazon_yellow rounded-md duration-300"> <HiShoppingCart />
                </span> 
                <span 
                 onClick={()=>
                  dispatch(addToFavorite({
                    _id:_id,
                        brand:brand,
                        category:category,
                        description:description,
                        image:image,
                        isNew:isNew,
                        oldPrice:oldPrice,
                        price:price,
                        title:title,
                         quantity:1,
                    
                    }))} className="w-full h-full border-t-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent 
                 cursor-pointer hover:bg-amazon_yellow rounded-md duration-300"><FaHeart />
                 </span>
                </div>
                {isNew && <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wider animate-bounce">
                  !save<ChangedPrice amount={oldPrice-price}/> </p>}
                </div>
                <hr />
                <div className="px-2 py-1 flex flex-col gap-1">
                  <p className="text-xs text-gray-500 tracking-wide"> {category}</p>
                  <p className="font-medium text-base"> {title}</p>
                  <p className="flex items-center gap-2"> 
                    <span className="text-sm line-through">
                      <ChangedPrice amount={oldPrice}/>
                    </span>
                    <span className="font-semibold text-amazon_blue">
                      <ChangedPrice amount={price}/>
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 w-full "> {description.substring(0,120)}</p>

                  <button 
               onClick={()=>
                dispatch(addToCart({
                  _id:_id,
                      brand:brand,
                      category:category,
                      description:description,
                      image:image,
                      isNew:isNew,
                      oldPrice:oldPrice,
                      price:price,
                      title:title,
                       quantity:1,
                  
                  }))}
                   className="h-10 bg-amazon_blue rounded-md text-white mt-1 font-medium duration-300 hover:bg-amazon_yellow hover:text-amazon_blue  ">
                    add to cart
                  </button>

                </div>
            </div>  
        ))
    }
    </div>
  );
};

export default Products;



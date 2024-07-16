import React from 'react'
import { useSelector } from 'react-redux';
import { StateProps, StoreProduct } from '../../type';
import CartProduct from '@/components/CartProduct';
import ResetCard from '@/components/ResetCard';
import Link from 'next/link';
import PaymentCart from '@/components/PaymentCart';

const Cart = () => {
  const {productData} = useSelector((state:StateProps) =>  state.next);

  return (
    <div className='max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4'>
      {
        productData.length > 0 ?( <>
         <div className='bg-white lg:col-span-4 xs:col-span-5 p-4 rounded-lg'>
         <div className='text-amazon_blue flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
          <p className='text-2xl font-semibold text-amazon_blue'> Shopping Cart</p>
          <p className='text-amazon_blue text-lg font-semibold'> Subtitle</p>
         </div>
         <div className='text-amazon_blue pt-2 flex flex-col gap-2'>
          {productData.map((item: StoreProduct) =>(
            <div key={item._id} >
             <CartProduct item={item}/> </div>
          )
          )}
          <ResetCard />
         </div>
        </div> 
        <div className='bg-white h-64 col-span-1 text-amazon_blue text-sm p-4 w-full  flex items-center justify-center rounded-lg'> 
          <PaymentCart />
        </div>
         </>):(<div className='h-64 bg-white items-center justify-center col-span-5 rounded-lg py-5 flex flex-col shadow-lg'>
          <h1 className='text-amazon_blue '> Your cart is empty!</h1>
          <Link href={"/"}><button className='text-amazon_blue w-52 h-10 mt-2 bg-amazon_blue text-white rounded-lg  font-semibold text-sm hover:bg-amazon_yellow hover:text-amazon_blue'>Go to shopping</button></Link>
        </div>)
      }
      
    </div>
  )
}

export default Cart;

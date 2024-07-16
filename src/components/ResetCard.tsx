import { resetCart } from '@/store/nextSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const ResetCard = () => {
  const dispatch = useDispatch()
 const handleReset =()=>
 {
   const confirmReset = window.confirm(
    "Are you sure to reset your items from the cart?"
   );
   if (confirmReset){
    dispatch(resetCart())
   }
 }
  return  (
    <button  onClick={handleReset} className='flex w-44 h-10 bg-gray-200 items-center justify-center rounded-lg hover:bg-red-600 duration-300 font-semibold  hover:text-white tracking-wide' > reset Cart</button>
   
  )
}

export default ResetCard;

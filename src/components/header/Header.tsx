import Image from 'next/image';
import logo from '../../Images/logo.png';
import cartIcon from '../../Images/cartIcon.png';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { StateProps, StoreProduct } from '../../../type';
import { useSession, signIn } from "next-auth/react";
import { useEffect } from 'react';
import { addUser } from '@/store/nextSlice';

export const Header = () => {
  const { data:session} = useSession();
 const { productData, favoriteData,userInfo } = useSelector((state:StateProps) =>state.next);     
 const dispatch = useDispatch()
 useEffect(()=>{
   if(session){
           dispatch(
             addUser({
               name: session?.user?.name,
               email: session?.user?.email,
               image: session?.user?.image,
             })
           );
   }
 } ,[session]);
  return (
    <div  className="w-full h-20 bg-amazon_blue text-light sticky top-0 z-50">
    <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4 '>
      <Link href={'/'} className='px-2 border border-transparent hover:border-white
      cursor-pointer duration-300  flex items-center justify-center h-[70%]'>
          <Image className="w-28 object-cover mt-3
          " src={logo} alt="logoImgn" />
          </Link>

          <div className='px-2 border border-transparent hover:border-white
      cursor-pointer duration-300 items-center justify-center h-[70%]  
      hidden lgl:inline-flex gap-1'>
          <SlLocationPin />
          <div className='text-xs'>
          <p>Deliver to</p>
          <p className='text-white font-bold uppercase'> India</p>
          </div>
          </div>

          <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
            <input className='h-full w-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] outline-none 
            focus-visible:border-amazon_yellow' type="text" placeholder='Search next_amazon_yt products' />
            <span  className= 'w-12 h-full bg-amazon_yellow text-black  text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md'> <HiOutlineSearch /></span>
          </div>
               {
               userInfo?(   <div className='flex px-2 border border-transparent hover:border-white
      cursor-pointer duration-300 items-center justify-center h-[70%]
   gap-1 ' >
           <img src={userInfo.image} alt="userImage" className='w-8 h-8 rounded-full object-cover'/>
           <div className= 'text-xs text-gray-100 flex flex-col  justify-between'>
          <p className='text-white font-bold'> 
         {userInfo.name}
          </p>
          <p>
            {userInfo.email}
          </p>
          </div>
          </div> ):(
          <div onClick={() => signIn()} className=' px-2 border border-transparent hover:border-white
      cursor-pointer duration-300 items-center justify-center h-[70%]  py-3 
     flex-col gap-1 text-xs text-gray-200 ' >
            <p> Hello, sign in</p>
            <p className='text-white font-bold items-center flex'> Accounts & Lists{" "}  <span className='px-1'>   <BiCaretDown /></span></p>
           
          </div>)}

          <Link href={'/Favorite'} className=' px-2 border border-transparent hover:border-white
      cursor-pointer duration-300 items-center justify-center h-[70%]   py-3
      flex-col gap-1 text-xs text-gray-100 relative' >
            <p> Marked </p>
            <p className='text-white font-bold'> & Favourites</p>
            {
              favoriteData.length > 0 && (<span className='absolute right-2 top-2 h-4 w-4 border-[1px]   border-gray-400
              flex items-center justify-center text-xs text-amazon_yellow'> {favoriteData.length}</span>)
            }
          </Link>

          <Link href={'/cart'} className='px-2 border border-transparent hover:border-white
      cursor-pointer duration-300 items-center justify-center h-[70%]  
        text-xs flex relative text-gray-200'>

            <Image className='w-auto object-cover h-8' src={cartIcon} alt="carting"/>
            <p className='text-xs font-bold mt-3 text-white'>  Cart</p>
            <span className='absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold'>{productData ? productData.length :0}</span>
          </Link>

          
    </div>
    </div>
  );
};
export default Header;

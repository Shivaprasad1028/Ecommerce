import { LuMenu } from "react-icons/lu";
import { useSelector ,useDispatch } from "react-redux";
import { StateProps } from '../../../type';
import { signOut } from "next-auth/react";
import { removeUser} from "@/store/nextSlice";
export const BottomHeader = () => {
  const { userInfo } = useSelector((state:StateProps) =>state.next); 
  const dispatch = useDispatch();    
  const handleSignOut = ()=>{
    signOut();
    dispatch(removeUser());
  }
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex ">
   <p className="flex items-center  h-8 gap-1 border border-transparent px-2 mt-1 hover:border-white cursor-pointer duration-300  ">
<LuMenu className="text-xl"/> All
   </p>
   <p className=" items-center hidden md:inline-flex  h-8 gap-1 border border-transparent px-2 mt-1 hover:border-white cursor-pointer duration-300  ">
    Todays Deals
   </p>
   <p className=" items-center  hidden md:inline-flex h-8 gap-1 border border-transparent px-2 mt-1 hover:border-white cursor-pointer duration-300  ">
    Customer Service
   </p>
   <p className=" items-center hidden md:inline-flex h-8 gap-1 border border-transparent px-2 mt-1 hover:border-white cursor-pointer duration-300  ">
    Registry
   </p>
   <p className="items-center hidden md:inline-flex h-8 gap-1 border border-transparent px-2 mt-1 hover:border-white cursor-pointer duration-300  ">
    Gift Card
   </p>
   <p className=" items-center  hidden md:inline-flex h-8 gap-1 border border-transparent px-2 mt-1 hover:border-white cursor-pointer duration-300  ">
    Sell
   </p>
   {userInfo && (
   <button onClick={handleSignOut} className=" items-center  hidden md:inline-flex h-8 gap-1 border border-transparent px-2 mt-1 text-amazon_yellow
    hover:border-red-600 hover:text-red-400 cursor-pointer duration-300">
   Signout
   </button>
  
    
   )}
    </div>
  );
};
export default BottomHeader;

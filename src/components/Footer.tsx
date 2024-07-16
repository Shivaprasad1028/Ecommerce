import Image from 'next/image';
import logo from '../Images/logo.png';


const Footer = () => {
return(
<div className="text-black bg-amazon_light h-20 justify-center text-center items-center flex pt-3">

  

  <Image  src={logo} alt="logoImgn"  className=' w-28'/>

  <div className='text-sm  flex items-center justify-center pb-4 ml-2 text-gray-300'>
  <p className=''> All rights are reserved <span className='hover:text-white cursor-pointer hover:underline  duration-300'> <a href=" "> @Shivaprasad.com </a></span></p></div>
</div>
);
};
export default Footer;


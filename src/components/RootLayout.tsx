import Header from "@/components/header/Header";
import BottomHeader from "@/components/header/BottomHeader";
import Footer from "@/components/Footer";
import React,{ReactElement} from 'react';
interface Props{
    children:ReactElement
}

const RootLayout = ({children}:Props) => {
  return (
    <>
       <Header />
    <BottomHeader />
    {children}
  <Footer />
    </>
  )
};

export default RootLayout;

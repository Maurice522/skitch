
import OrderDetails from "../components/cartComponent/OrderDetails";
import UserDetails from "../components/cartComponent/UserDetails";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function Cart() {
   
    const restaurant=useSelector((state)=>state.cart.restraunt)
    const orderCartArray=useSelector((state)=>state.cart.menuCart)
    const[finalCart,setFinalCart]=useState(orderCartArray)
    const[restraunt,setRestraunt]=useState(restaurant)


    return (
        <>
        <div className="flex md:p-4 flex-row bg-[#EDE7DB] items-start justify-center gap-4 max-md:flex-col-reverse max-md:items-center">
            <UserDetails cart={finalCart}/>
            <OrderDetails restaurant={restraunt} cart={finalCart} setFinalCart={setFinalCart}/>
         </div>
        </>
    )
}
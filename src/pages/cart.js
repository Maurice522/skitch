import { useLocation } from "react-router-dom";
import OrderDetails from "../components/cartComponent/OrderDetails";
import UserDetails from "../components/cartComponent/UserDetails";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export default function Cart() {
    // const data=useLocation()
    // console.log("data",data.state)
    const restaurant=useSelector((state)=>state.cart.restraunt)
    const orderCartArray=useSelector((state)=>state.cart.menuCart)
    const[finalCart,setFinalCart]=useState(orderCartArray)
    const[restraunt,setRestraunt]=useState(restaurant)
console.log("finalCart",finalCart)
console.log("restraunt",restraunt)
//     useEffect(()=>{
// if(data.state){
//     setFinalCart(data.state.cart) 
//     setRestraunt(data.state.restaurant) 
// }
//     },[])
    return (
        <>
        <div className="flex md:p-4 flex-row bg-[#EDE7DB] items-start justify-center gap-4 max-md:flex-col-reverse max-md:items-center">
            <UserDetails />
            <OrderDetails restaurant={restraunt} cart={finalCart} setFinalCart={setFinalCart}/>
         </div>
        </>
    )
}
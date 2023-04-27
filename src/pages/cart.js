import { useLocation } from "react-router-dom";
import OrderDetails from "../components/cartComponent/OrderDetails";
import UserDetails from "../components/cartComponent/UserDetails";
import { useState } from "react";
import { useEffect } from "react";


export default function Cart() {
    const data=useLocation()
    console.log("data",data.state)
    // const {restaurant,cart}=useLocation().state
    // console.log("cartrestaurant",restaurant)
    // console.log("cart",cart)
    const[finalCart,setFinalCart]=useState([])
    const[restraunt,setRestraunt]=useState({})

    useEffect(()=>{
if(data.state){
    setFinalCart(data.state.cart) 
    setRestraunt(data.state.restaurant) 
}
    },[])
    return (
        <>
        <div className="flex md:p-4 flex-row bg-[#EDE7DB] items-start justify-center gap-4 max-md:flex-col-reverse max-md:items-center">
            <UserDetails />
            <OrderDetails restaurant={restraunt} cart={finalCart} setFinalCart={setFinalCart}/>
         </div>
        </>
    )
}

import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/CartSlice";
import { useState } from "react";

export default function MenuCard({menu,tempIdArr,setTempIdArr}) {
const dispatch=useDispatch()
const menuCart=useSelector((state)=>state.cart.menuCart)
const[toggle1,setToggle1]=useState(false)
console.log("menuCart",menuCart)
const handleAddCartFunction=(menu)=>{
    if(tempIdArr.includes(menu.id)){return}
   if(menu?.half?.available){setToggle1(true);return}
   addToCartClick(menu,false)
}

const addToCartClick=(menu,opt)=>{
    if(tempIdArr.length===0){dispatch(setCart([...menuCart,{...menu,quantity:1,askedForHalf:opt}]));setTempIdArr((p)=>{return[...p,menu.id]});setToggle1(false);return}
if(!tempIdArr.includes(menu.id)){dispatch(setCart([...menuCart,{...menu,quantity:1,askedForHalf:opt}]));setTempIdArr((p)=>{return[...p,menu.id]})}
setToggle1(false)
}

    return (
        <div className="flex flex-row gap-3 max-lg:-ml-4 max-lg:border max-lg:rounded-lg max-lg:gap-2 max-lg:flex-wrap">
            <div className="flex flex-col max-lg:m-1 max-lg:w-[40vw] md:w-[20vw] order-1 max-lg:order-1">
                <img src={menu?.image} className="max-lg:w-[200px] max-lg:h-[200px] w-fit rounded-2xl" />
                <div onClick={()=>handleAddCartFunction(menu)} className="flex hover:cursor-pointer flex-row self-center items-center justify-center -top-4 bg-white w-[92px] gap-1 relative rounded-[4px] border-[#F59428] border border-solid">
                    {!toggle1&&<span className="text-[#F59428] text-center whitespace-pre"> ADD+</span>}
                    {toggle1&&<div className="text-[#F59428] text-center whitespace-pre"> ADD HALF ?
                    <p onClick={(e)=>{e.stopPropagation(); addToCartClick(menu,true)}}>Yes</p>
                    <p onClick={(e)=>{e.stopPropagation(); addToCartClick(menu,false)}}>No</p>
                    </div>}
                </div>
            </div>
            <div className="flex flex-col justify-center max-lg:mt-2 max-lg:w-[40vw] order-2 max-lg:order-2">
                <div className="flex flex-row gap-2">                    
                    <span className="text-base font-medium font-nav">{menu?.name}</span>
                    <img src={menu.veg?"veg.png":"non-veg.png"} alt="veg" className="w-[17px] h-[17px]" />
                </div>
                <img src="menu_star.png" className="w-[111px] h-[25px]" />
                <span>{menu?.desc}</span>
            </div>
            <div className="flex flex-row order-3 max-lg:border-0 max-lg:rounded-lg max-lg:shadow-priceCard justify-evenly gap-6 max-lg:w-[100vw] max-lg:order-3">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-[58px] rounded-[6px] border-[#277BC0] border-2 border-solid">
                        <span className="text-[#277BC0] text-center whitespace-pre"> High</span>
                    </div>
                    <span className="text-[#277BC0]">+200</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-[58px] rounded-[6px] border-[#DC3535] border-2 border-solid">
                        <span className="text-[#DC3535] text-center whitespace-pre">Low</span>
                    </div>
                    <span className="text-[#DC3535]">-140.5</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center mt-7">
                    <div className="rounded-[6px] w-auto border-[#4E9F3D] bg-[#4E9F3D] border-2 border-solid">
                        <span className="text-[white] text-center whitespace-pre"> Current</span>
                    </div>
                    <span className="text-[#4E9F3D]">₹176.50</span>
                    <span className="text-[#4E9F3D]">+12.3(-20.5)</span>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";
import Layout from "../components/Layout";
import MenuCard from "../components/MenuCard";
import SearchBar from "../components/SearchBar";
import { useLocation, useNavigate } from 'react-router-dom'
export default function Menu() {

    const restaurant=useLocation().state
    const[orderCartArray,setOrderCartArray]=useState([])
    const[tempIdArr,setTempIdArr]=useState([])
    const navigate=useNavigate()

const handleQuantityOfOrderIncrease=(order)=>{

const newArr=orderCartArray.map((item)=>{
    if(item.id===order.id){return{...item,quantity:(order.quantity)+1}}
    else{return item}
})
setOrderCartArray(newArr)
}
const handleQuantityOfOrderDecrease=(order)=>{
    if(order.quantity===1){
      let tempArr=  orderCartArray.filter((item)=>{return item.id!==order.id})
      let tempIdArray=tempIdArr.filter((item)=>{return item!==order.id})
      setOrderCartArray(tempArr)
      setTempIdArr(tempIdArray)
        return}
    const newArr=orderCartArray.map((item)=>{
        if(item.id===order.id){return{...item,quantity:(order.quantity)-1}}
        else{return item}
    })
    setOrderCartArray(newArr)
}

    return (
        <div className="flex flex-row gap-6 mt-8 mb-8 ml-4 max-lg:flex max-lg:flex-col-reverse">
            <div className="flex flex-col gap-8 basis-1/2">
                <div className="max-lg:hidden">
                    <SearchBar />
                </div>
                <div className="flex flex-row items-center max-lg:top-40 max-sm:top-20 max-lg:w-[100%] max-lg:absolute max-lg:border-0 border-b-[2px] p-2 border-[#949494]">
                    <div className="flex flex-col max-lg:w-[50vw] items-start justify-center gap-4 max-lg:basis-1/2">
                        <div className="flex flex-row items-center justify-center"><img style={{marginRight:"1rem"}} src={restaurant?.image} alt="burger king" className="max-lg:w-[30px] max-lg:h-[30px] w-[70px] h-[70px]" /> <span className="text-3xl font-semibold whitespace-pre max-lg:text-xl">{restaurant?.name}</span></div>
                        <span className="text-xl font-medium max-lg:text-xs max-lg:font-medium">{restaurant?.desc}</span>
                        <div className="flex flex-row gap-2">
                            <div className="flex flex-row items-center gap-1 w-12 rounded-[4px] bg-[#F59428]">
                                <img src="star_white.png" alt="star" className="w-4" />
                                <span className="text-white">4.4</span>
                            </div>
                            <span>9,176 Reviews</span>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-2">
                            <span>5 km away</span>
                            <div className="px-2 border-l-2">35 min</div>
                        </div>
                    </div>
                    <div className="max-lg:flex max-lg:gap-4 max-lg:flex-col">
                        <div className="border border-[#A6A6A6] max-lg:w-[145px] max-lg:p-2 max-lg:h-[42px] text-center max-lg:ml-auto rounded-lg flex flex-row gap-6 self-start ml-auto p-4">
                            <span className="self-start text-base font-semibold">Outlet</span>
                            <div className="ml-auto">GIP DT</div>
                        </div>
                        <div className="flex flex-row lg:hidden max-lg:p-2 border gap-2 border-[#414141] rounded-lg p-3 bg-black text-white">
                            <span>Menu</span>
                            <img src="menu(1).png" />
                        </div>
                        <div className="border max-lg:rounded-2xl lg:hidden border-[#A6A6A6] max-lg:w-[145px] max-lg:p-2 max-lg:h-[42px] text-center max-lg:ml-auto rounded-lg flex flex-row gap-6 self-start ml-auto p-4">
                            Reviews
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 max-lg:hidden">
                    <div className="flex flex-row border gap-2 border-[#414141] rounded-lg p-3">
                        <img src="veg.png" />
                        <span>Veg</span>
                    </div>
                    <div className="flex flex-row border gap-2 border-[#414141] rounded-lg p-3">
                        <img src="non-veg.png" />
                        <span>Non-Veg</span>
                    </div>
                    <div className="flex flex-row border gap-2 border-[#414141] rounded-lg p-3 ml-auto bg-black text-white">
                        <span>Menu</span>
                        <img src="menu(1).png" />
                    </div>
                </div>
                <div className="max-lg:hidden">
                {restaurant.menu.map((menu)=>{
                    return <MenuCard menu={menu} setOrderCartArray={setOrderCartArray} tempIdArr={tempIdArr} setTempIdArr={setTempIdArr} />
                })}
                {restaurant.comboMenu&&restaurant.comboMenu.map((menu)=>{
                    return <MenuCard menu={menu} setOrderCartArray={setOrderCartArray} tempIdArr={tempIdArr} setTempIdArr={setTempIdArr} />
                })}
                    
                </div>
            </div>
            <div className="flex flex-col gap-8 max-lg:py-7 max-lg:relative max-sm:top-56 max-lg:top-60 max-lg:border max-lg:border-solid max-lg:rounded-md max-lg:mr-4 lg:ml-auto lg:mr-16">
                <div className="rounded-[7px] bg-[#4E9F3D] max-lg:w-[100%] max-lg:bg-[#F59428] max-lg:border-0 border-[#4E9F3D] w-[285px] h-[52px] border-2 border-solid flex justify-center gap-3 items-center flex-row">
                    <img src="offer.png" />
                    <span className="text-center text-white whitespace-pre">40% OFF up to 80</span>
                </div>
                <div className="lg:hidden">
                    <SearchBar />
                </div>
                <span className="text-base font-medium">Best Seller</span>
                <div className="flex flex-row gap-[26px]">
                    <div className="flex flex-col max-lg:basis-1/2 border border-[#949494] rounded-[8px] p-4">
                        <span className="text-base font-medium">Cheese Burst Burger</span>
                        <span className="text-[#818181]">This Week - 2.4k Reviews</span>
                        <img src="candle_stick.png" />
                    </div>
                    <div className="flex flex-col basis-1/2 border border-[#949494] rounded-[8px] p-4">
                        <span className="text-base font-medium"> Veg Burger</span>
                        <span className="text-[#818181]">This Week - 2.0k Reviews</span>
                        <img src="candle_stick(1).png" />
                    </div>
                </div>
                <div className="lg:hidden">
                {restaurant.menu.map((menu)=>{
                    return <MenuCard menu={menu} setOrderCartArray={setOrderCartArray} tempIdArr={tempIdArr} setTempIdArr={setTempIdArr} />
                })}
                {restaurant.comboMenu&&restaurant.comboMenu.map((menu)=>{
                    return <MenuCard menu={menu} setOrderCartArray={setOrderCartArray} tempIdArr={tempIdArr} setTempIdArr={setTempIdArr} />
                })}
                </div>
                <div className="flex flex-col max-lg:hidden gap-7 border-[#949494] border rounded-[8px] p-4">
                    <div className="flex flex-row shadow-menuTotal">
                        <span>{orderCartArray.length} ITEMS added</span>
                        <button onClick={()=>navigate("/cart",{state:{restaurant:restaurant,cart:orderCartArray}})}  className="text-[#DC3535] ml-auto flex flex-row justify-center items-center gap-2">Order Now <img src="right-arrow_pink.png" /></button>
                    </div>
                    <div className="flex flex-row items-center">
                        <img style={{marginRight:"1rem"}} src={restaurant.image} alt="burger king" className="w-[48px] h-[48px]" />
                        <span className="text-xl font-medium">{restaurant.name}</span>
                    </div>
                    {orderCartArray.map((order)=>{
                        return <>
                        <div key={order.id} className="flex flex-row gap-16">
                        <div className="flex flex-row">
                            <img src={order.veg?"veg.png":"non-veg.png"} />
                            <span className="whitespace-pre">{order.name}</span>
                        </div>
                        <div className="flex text-[#F59428] flex-row border border-solid rounded-md border-[#F59428] gap-4 px-1">
                            <button onClick={()=>handleQuantityOfOrderDecrease(order)}>-</button>
                            <span>{order.quantity}</span>
                            <button onClick={()=>handleQuantityOfOrderIncrease(order)}>+</button>
                        </div>
                    </div> 
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}
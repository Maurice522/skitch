import { useDispatch, useSelector } from "react-redux";
import { getRestaurantFromDatabase } from "../firebase/config";
import { setRestaurantList } from "../redux/restaurantSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Card() {
    const dispatch=useDispatch()
    const[loading,setIsloading]=useState(true)
    const restaurantList=useSelector((state)=>state.restaurantList.restaurantList)
    const navigate=useNavigate()
    const getRestaurants = async () => {
        const results = await getRestaurantFromDatabase();

        if (results.length) {
          dispatch(setRestaurantList([...results]));
        }
        setIsloading(false);
      };
    
      useEffect(() => {
       
        getRestaurants();
      }, []);

    return (
        <div className="grid grid-cols-3 gap-12 max-lg:hidden lg:grid-cols-3 lg:gap-4">
        {(restaurantList&&restaurantList.length>0)&&<>
            {restaurantList.map((restraunt)=>{
                return <>
                <div key={restraunt.id} onClick={()=>navigate("/menu",{state:restraunt})} className="flex flex-col gap-3 lg:max-xl:w-[200px] w-[274px]">
                <div style={{backgroundImage:`url(${restraunt.image})`}} className="bg-burger lg:max-xl:bg-contain lg:max-xl:h-[175px] h-[240px] rounded-2xl bg-no-repeat"></div>
                <div className="bg-[#F59428] rounded-md self-end p-1 mt-2 absolute">
                    <span className="text-white">25% OFF up to ₹170</span>
                </div>
                <div className="flex flex-row">
                    <span>{restraunt.name}</span>
                    <div className="flex flex-row items-center gap-1 w-12 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star" className="w-4" />
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ {restraunt.price} for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock" />
                        <span className="font-medium leading-[21px] w-16 ml-auto text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div>
                </>
            })}
        </>}
            {/* <div className="flex flex-col gap-3 lg:max-xl:w-[200px] w-[274px]">
                <div className="bg-burger lg:max-xl:bg-contain lg:max-xl:h-[175px] h-[240px] rounded-2xl bg-no-repeat"></div>
                <div className="bg-[#F59428] rounded-md self-end p-1 mt-2 absolute">
                    <span className="text-white">25% OFF up to ₹170</span>
                </div>
                <div className="flex flex-row">
                    <span>Burger</span>
                    <div className="flex flex-row items-center gap-1 w-12 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star" className="w-4" />
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ 100 for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock" />
                        <span className="font-medium leading-[21px] w-16 ml-auto text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:max-xl:w-[200px] w-[274px]">
                <div className="bg-pasta lg:max-xl:bg-contain lg:max-xl:h-[175px] h-[240px] rounded-2xl bg-no-repeat"></div>
                <div className="bg-[#F59428] rounded-md self-end p-1 mt-2 absolute">
                    <span className="text-white">25% OFF up to ₹170</span>
                </div>
                <div className="flex flex-row">
                    <span>Pasta</span>
                    <div className="flex flex-row items-center gap-1 w-12 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star" className="w-4" />
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ 100 for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock" />
                        <span className="font-medium leading-[21px] w-16 ml-auto text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:max-xl:w-[200px] w-[274px]">
                <div className="bg-veg lg:max-xl:bg-contain lg:max-xl:h-[175px] h-[240px] rounded-2xl bg-no-repeat"></div>
                <div className="bg-[#F59428] rounded-md self-end p-1 mt-2 absolute">
                    <span className="text-white">25% OFF up to ₹170</span>
                </div>
                <div className="flex flex-row">
                    <span>Veg Restaurant</span>
                    <div className="flex flex-row items-center gap-1 w-12 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star" className="w-4" />
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ 100 for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock" />
                        <span className="font-medium leading-[21px] w-16 ml-auto text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:max-xl:w-[200px] w-[274px]">
                <div className="bg-pizza lg:max-xl:bg-contain lg:max-xl:h-[175px] h-[240px] rounded-2xl bg-no-repeat"></div>
                <div className="bg-[#F59428] rounded-md self-end p-1 mt-2 absolute">
                    <span className="text-white">25% OFF up to ₹170</span>
                </div>
                <div className="flex flex-row">
                    <span>Pizza</span>
                    <div className="flex flex-row items-center gap-1 w-12 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star" className="w-4" />
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ 100 for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock" />
                        <span className="font-medium leading-[21px] w-16 ml-auto text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:max-xl:w-[200px] w-[274px]">
                <div className="bg-ice lg:max-xl:bg-contain lg:max-xl:h-[175px] h-[240px] rounded-2xl bg-no-repeat"></div>
                <div className="bg-[#F59428] rounded-md self-end p-1 mt-2 absolute">
                    <span className="text-white">25% OFF up to ₹170</span>
                </div>
                <div className="flex flex-row">
                    <span>Pizza</span>
                    <div className="flex flex-row items-center gap-1 w-12 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star" className="w-4" />
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ 100 for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock" />
                        <span className="font-medium leading-[21px] w-16 ml-auto text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:max-xl:w-[200px] w-[274px]">
                <div className="bg-italian lg:max-xl:bg-contain lg:max-xl:h-[175px] h-[240px] rounded-2xl bg-no-repeat"></div>
                <div className="bg-[#F59428] rounded-md self-end p-1 mt-2 absolute">
                    <span className="text-white">25% OFF up to ₹170</span>
                </div>
                <div className="flex flex-row">
                    <span>Pizza</span>
                    <div className="flex flex-row items-center gap-1 w-12 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star" className="w-4" />
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ 100 for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock" />
                        <span className="font-medium leading-[21px] w-16 ml-auto text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
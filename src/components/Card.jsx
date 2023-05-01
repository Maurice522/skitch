import { useDispatch, useSelector } from "react-redux";
import { getRestaurantFromDatabase } from "../firebase/config";
import { setRestaurantList } from "../redux/restaurantSlice";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setRestraunt } from "../redux/CartSlice";

export default function Card() {
    const dispatch = useDispatch()
    const sorter = useSelector((state) => state.sorter)
    const [loading, setIsloading] = useState(true)
    const navigate = useNavigate()
    const [restrauntToShow, setRestrauntToShow] = useState([])
    console.log("restrauntToShow", restrauntToShow)


    const getRestaurants = async () => {
        const results = await getRestaurantFromDatabase();

        if (results.length) {
            setRestrauntToShow([...results])
            dispatch(setRestaurantList([...results]));
        }
        setIsloading(false);
    };

    useEffect(() => {

        getRestaurants();
    }, []);

    function compareLow(a, b) {
        return (Number(a.price) - Number(b.price))

    }
    function compareHigh(a, b) {
        return (Number(b.price) - Number(a.price))

    }
    useEffect(() => {
        if (restrauntToShow.length === 0) { return }
        if (sorter === "") { return }
        if (sorter === "lowToHigh") {
            let tempArr = restrauntToShow
            tempArr.sort(compareLow)
            setRestrauntToShow(tempArr)
            return
        }
        if (sorter === "highToLow") {
            let tempArr = restrauntToShow
            tempArr.sort(compareHigh)
            setRestrauntToShow(tempArr)
            return
        }
    }, [sorter])

    return (
        <div className="grid grid-cols-3 gap-12 max-lg:hidden lg:grid-cols-3 lg:gap-12">
            {(restrauntToShow && restrauntToShow.length > 0) && <>
                {restrauntToShow.map((restraunt) => {
                    return <>
                        <div key={restraunt.id} onClick={() => { navigate("/menu", { state: restraunt }); dispatch(setRestraunt(restraunt)) }} className="flex flex-col w-full gap-3 hover:cursor-pointer">
                            {/* <div style={{ backgroundImage: `url(${restraunt.image})` }} className="bg-burger lg:max-xl:bg-contain lg:max-xl:h-[175px] h-[240px] rounded-2xl bg-no-repeat"></div> */}
                            <img src={restraunt.image} alt={restraunt.name} className="rounded-2xl" />
                            {(JSON.stringify(restraunt.discount) !== "{}") && <div className="bg-[#F59428] rounded-md self-end p-1 mt-2 absolute">
                                <span className="text-white">{restraunt.discount.percentage && (`${restraunt.discount.percentage}% OFF`) + restraunt.discount.upto && (`up to ₹${restraunt.discount.upto}`)}</span>
                            </div>}
                            <div className="items-end justify-end mt-auto">
                                <div className="flex flex-row">
                                    <span>{restraunt.name}</span>
                                    <div className="flex flex-row items-center h-[24px] gap-1 w-12 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                                        <img src="Star.png" alt="star" className="w-4" />
                                        <span>4.4</span>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <span>₹ {restraunt.price} for one</span>
                                    <div className="flex flex-row ml-auto">
                                        <img src="Clock.png" alt="Clock" />
                                        <span className="font-medium leading-[21px] w-16 whitespace-pre ml-auto text-sm font-nav">32 mins</span>
                                    </div>
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
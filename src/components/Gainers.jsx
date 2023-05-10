import { useEffect, useState } from "react";
import FlipMove from 'react-flip-move';

export default function Gainers() {
    const [foods, setFoods] = useState([{ "name": "Indian", "price": 0 }, { "name": "Thai", "price": 0 }, { "name": "French", "price": 0 }, { "name": "Chinese", "price": 0 }])
    const [restaurant, setRestaurant] = useState([{ "name": "Classic Burger", "price": 0 }, { "name": "Pizza", "price": 0 }, { "name": "Momos", "price": 0 }, { "name": "Tandoori Chicken", "price": 0 }])
    const [arr, setArr] = useState([{ "name": "Indian", "price": 0 }, { "name": "Thai", "price": 0 }, { "name": "French", "price": 0 }, { "name": "Chinese", "price": 0 }])
    const [arr1, setArr1] = useState([{ "name": "Classic Burger", "price": 0 }, { "name": "Pizza", "price": 0 }, { "name": "Momos", "price": 0 }, { "name": "Tandoori Chicken", "price": 0 }])
    const [scroll,setScroll] = useState(false)

    useEffect(() => {
        setInterval(() => {
            for (let i = 0; i < 4; i++) {
                setFoods(foods[i].price = ((Math.random()) * 10).toPrecision(3))
                setRestaurant(restaurant[i].price = ((Math.random()) * 10).toPrecision(3))
            }
            const newSortedPrice = [...foods].sort((a, b) => { return b.price - a.price })
            const newSortedRestaurantPrice = [...restaurant].sort((a, b) => { return b.price - a.price })
            // console.log("Sorted price", newSortedPrice)
            setArr(newSortedPrice)
            setArr1(newSortedRestaurantPrice)
            // sortPrice()
        }, 5000)
    }, [])

    window.addEventListener("scroll",addStyle)

    function addStyle() {
        console.log("Scrolled")
        if(window.scrollY > 65) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    return (
        <div id="gainer" className={`p-0 ml-auto mr-3 no-scrollbar overflow-y-hidden overflow-hidden max-lg:ml-2 ${scroll ? "lg:fixed top-2 -right-2 mr-3" : ""}`}>
            <div className="flex flex-col border border-solid shadow-gainer rounded-2xl">
                <div className="bg-[#F59428] p-1 rounded-b-none rounded-2xl">
                    <div className="flex flex-row gap-10 p-1">
                        <span className="text-sm text-white whitespace-pre">Top Gainer cuisine</span>
                        <span className="ml-auto text-sm text-white">Change(%)</span>
                    </div>
                </div>
                <FlipMove duration={1000}>
                    {
                        arr.map((food,index) => {
                            return (
                                <div key={food.name} className={`flex flex-row gap-1 p-1 ${index % 2 == 0 ? 'bg-[#F6F6F6]' : ''}`}>
                                    <div className="flex flex-row whitespace-pre basis-1/2">
                                        <img src="Indian.jpg" className="w-6 h-6" alt="Indian" />
                                        <span className="text-lg font-medium"> {food.name}</span>
                                    </div>
                                    <div className="flex flex-col text-right basis-1/2">
                                        <span className={food.price >= 5 ? "text-[#4E9F3D] text-base font-normal" : "text-[#DC3535] text-base font-normal"}>{food.price > 5 ? ((620 + (620) / 100 * (food.price - 5))).toPrecision(5) : (620 - (620) / 100 * (5 - food.price)).toPrecision(5)}</span>
                                        <span className={food.price >= 5 ? "text-[#4E9F3D]" : "text-[#DC3535]"}>{food.price > 5 ? "+" : "-"}{food.price}%</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </FlipMove>
            </div>
            <div className="flex flex-col mt-4 border border-solid rounded-2xl">
                <div className="bg-[#F59428] p-1 rounded-b-none rounded-2xl">
                    <div className="flex flex-row gap-10 p-1">
                        <span className="text-sm text-white whitespace-pre">Top Gainer Food</span>
                        <span className="ml-auto text-sm text-white">Change(%)</span>
                    </div>
                </div>
                <FlipMove duration={1000}>
                    {
                        arr1.map((restaurant,index) => {
                            return (
                                <div key={restaurant.name} className={`flex flex-row gap-1 p-1 ${index % 2 == 0 ? 'bg-[#F6F6F6]' : ''}`}>
                                    <div className="flex flex-row whitespace-pre basis-1/2">
                                        <img src="Indian.jpg" className="w-6 h-6" alt="Indian" />
                                        <span className="text-lg font-medium"> {restaurant.name}</span>
                                    </div>
                                    <div className="flex flex-col text-right basis-1/2">
                                        <span className={restaurant.price >= 5 ? "text-[#4E9F3D] text-base font-normal" : "text-[#DC3535] text-base font-normal"}>{restaurant.price > 5 ? ((620 + (620) / 100 * (restaurant.price - 5))).toPrecision(5) : (620 - (620) / 100 * (5 - restaurant.price)).toPrecision(5)}</span>
                                        <span className={restaurant.price >= 5 ? "text-[#4E9F3D]" : "text-[#DC3535]"}>{restaurant.price > 5 ? "+" : "-"}{restaurant.price}%</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </FlipMove>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react";
import FlipMove from 'react-flip-move';

export default function Gainers() {
    const [foods, setFoods] = useState([{ "name": "Indian", "price": 0 }, { "name": "Thai", "price": 0 }, { "name": "French", "price": 0 }, { "name": "Chinese", "price": 0 }])
    const [restaurant, setRestaurant] = useState([{ "name": "Burger King", "price": 0 }, { "name": "McDonalds", "price": 0 }, { "name": "Little Italy", "price": 0 }, { "name": "UFO", "price": 0 }])
    const [arr, setArr] = useState([{ "name": "Indian", "price": 0 }, { "name": "Thai", "price": 0 }, { "name": "French", "price": 0 }, { "name": "Chinese", "price": 0 }])
    const [arr1, setArr1] = useState([{ "name": "Burger King", "price": 0 }, { "name": "McDonalds", "price": 0 }, { "name": "Little Italy", "price": 0 }, { "name": "UFO", "price": 0 }])
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
        <div id="gainer" className={`p-0 ml-auto mr-3 overflow-hidden max-lg:ml-2 ${scroll ? "lg:fixed top-2 right-0 mr-3" : ""}`}>
            <div className="flex flex-col border border-solid rounded-2xl">
                <div className="bg-[#F59428] p-1 rounded-b-none rounded-2xl">
                    <div className="flex flex-row gap-10 p-1">
                        <span className="text-sm text-white whitespace-pre">Top Gainer Food</span>
                        <span className="ml-auto text-sm text-white">Change(%)</span>
                    </div>
                </div>
                <FlipMove duration={1000}>
                    {
                        arr.map((food) => {
                            return (
                                <div key={food.name} className="flex flex-row gap-1 p-1">
                                    <div className="flex flex-row whitespace-pre basis-1/2">
                                        <img src="Indian.jpg" className="w-6 h-6" alt="Indian" />
                                        <span>{food.name}</span>
                                    </div>
                                    <div className="flex flex-col text-right basis-1/2">
                                        <span className={food.price >= 5 ? "text-[#4E9F3D]" : "text-[#DC3535]"}>{food.price > 5 ? ((620 + (620) / 100 * (food.price - 5))).toPrecision(5) : (620 - (620) / 100 * (5 - food.price)).toPrecision(5)}</span>
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
                        <span className="text-sm text-white whitespace-pre">Top Gainer Restaurant</span>
                        <span className="ml-auto text-sm text-white">Change(%)</span>
                    </div>
                </div>
                <FlipMove duration={1000}>
                    {
                        arr1.map((restaurant) => {
                            return (
                                <div key={restaurant.name} className="flex flex-row gap-1 p-1">
                                    <div className="flex flex-row whitespace-pre basis-1/2">
                                        <img src="Indian.jpg" className="w-6 h-6" alt="Indian" />
                                        <span>{restaurant.name}</span>
                                    </div>
                                    <div className="flex flex-col text-right basis-1/2">
                                        <span className={restaurant.price >= 5 ? "text-[#4E9F3D]" : "text-[#DC3535]"}>{restaurant.price > 5 ? ((620 + (620) / 100 * (restaurant.price - 5))).toPrecision(5) : (620 - (620) / 100 * (5 - restaurant.price)).toPrecision(5)}</span>
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
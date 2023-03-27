// import Layout from "../components/Layout";

import Card from "../components/Card";
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
    return (
        <div className="flex flex-row gap-2 mt-4 overflow-x-hidden bg-white max-lg:flex max-lg:flex-col">
            <div className="flex flex-col gap-4 md:ml-3 xl:basis-3/4 basis-1/2">
                <div className="border border-solid gap-2 border-[#D0D0D0] rounded-lg flex flex-row p-2">
                    <div className="flex flex-row w-full border-r border-solid border-[#969696]">
                        <img src="./Search.jpg" alt="" className="p-2" />
                        <input type={"search"} placeholder="Search Restaurants,food or dish" className="w-full focus:outline-none border-[0px] max-sm:placeholder:text-xs" />
                    </div>
                    <img src="Mic.jpg" className="p-2" alt="mic" />
                </div>
                <div className="flex flex-row items-center overflow-x-auto gap-9">
                    <div className="flex flex-row items-center w-[96px] gap-2 p-4 bg-white rounded-lg shadow-filter">
                        <span className="text-base leading-[24px] font-normal font-nav">Sort</span>
                        <img src="Settings(1).jpg" alt="" className="h-3" />
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-filter w-[150px]">
                        <span className="text-base whitespace-pre leading-[24px] font-normal font-nav">Fast Delivery</span>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-filter w-[88px]">
                        <span className="text-base leading-[24px] font-normal font-nav">Offers</span>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-filter w-[102px]">
                        <span className="text-base leading-[24px] font-normal font-nav">Cuisines</span>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-filter w-[130px]">
                        <span className="text-base whitespace-pre leading-[24px] font-normal font-nav">Rating 4.0+</span>
                    </div>
                </div>
                <Card />
            </div>
            <div className="p-3 h-[58px] border border-solid border-[#BEBEBE] rounded-lg max-lg:hidden">
                <img src="Setting.png" alt="settings" />
            </div>
            <div className="flex flex-row items-center justify-center lg:hidden">
                <img src="Exchange.png" alt="exchange" />
                <span className="italic font-medium leading-[30px] text-xl uppercase">The Food Stock Exchange</span>
            </div>
            <div className="p-0 ml-auto mr-3 max-lg:ml-2 lg:mt-7">
                <div className="flex flex-col border border-solid rounded-2xl">
                    <div className="bg-[#F59428] p-1 rounded-b-none rounded-2xl">
                        <div className="flex flex-row gap-10 p-1">
                            <span className="text-sm text-white">Top Gainer Cuisine</span>
                            <span className="ml-auto text-sm text-white">Change(%)</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 p-1">
                        <div className="flex flex-row whitespace-pre basis-1/2">
                            <img src="Indian.jpg" className="w-6 h-8" alt="Indian" />
                            <span>Indian</span>
                        </div>
                        <div className="flex flex-col text-right basis-1/2">
                            <span className="text-[#4E9F3D]">672.27</span>
                            <span className="text-[#4E9F3D]">+1.45%</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 p-1">
                        <div className="flex flex-row whitespace-pre basis-1/2">
                            <img src="Thai.jpg" className="w-6 h-8" alt="Thai" />
                            <span>Thai</span>
                        </div>
                        <div className="flex flex-col text-right basis-1/2">
                            <span className="text-[#4E9F3D]">672.27</span>
                            <span className="text-[#4E9F3D]">+1.45%</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 p-1">
                        <div className="flex flex-row whitespace-pre basis-1/2">
                            <img src="French.jpg" className="w-6 h-8" alt="French" />
                            <span>French</span>
                        </div>
                        <div className="flex flex-col text-right basis-1/2">
                            <span className="text-[#4E9F3D]">672.27</span>
                            <span className="text-[#4E9F3D]">+1.45%</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 p-1">
                        <div className="flex flex-row whitespace-pre basis-1/2">
                            <img src="Chinese.jpg" className="w-6 h-8" alt="Chinese" />
                            <span>Chinese</span>
                        </div>
                        <div className="flex flex-col text-right basis-1/2">
                            <span className="text-[#4E9F3D]">672.27</span>
                            <span className="text-[#4E9F3D]">+1.45%</span>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-auto lg:flex lg:flex-col">
                    <div className="flex flex-col mt-4 border border-solid rounded-2xl">
                        <div className="bg-[#F59428] p-1 rounded-b-none rounded-2xl">
                            <div className="flex flex-row gap-4 p-1">
                                <span className="text-sm text-white">Top Gainer Restaurant </span>
                                <span className="ml-auto text-sm text-white">Change(%) </span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 p-1">
                            <div className="flex flex-row whitespace-pre basis-1/2">
                                <img src="Burger_king.jpg" className="w-10 h-8" alt="Burger King" />
                                <span>Burger King</span>
                            </div>
                            <div className="flex flex-col text-right basis-1/2">
                                <span className="text-[#DC3535]">672.27</span>
                                <span className="text-[#DC3535]">+1.45%</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 p-1">
                            <div className="flex flex-row whitespace-pre basis-1/2">
                                <img src="Subway.jpg" alt="Subway" className="w-6 h-8" />
                                <span>Subway</span>
                            </div>
                            <div className="flex flex-col text-right basis-1/2">
                                <span className="text-[#DC3535]">672.27</span>
                                <span className="text-[#DC3535]">+1.45%</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 p-1">
                            <div className="flex flex-row whitespace-pre basis-1/2">
                                <img src="Pizza_Hut.jpg" alt="Pizza Hut" className="w-6 h-8" />
                                <span>Pizza Hut</span>
                            </div>
                            <div className="flex flex-col text-right basis-1/2">
                                <span className="text-[#4E9F3D]">672.27</span>
                                <span className="text-[#4E9F3D]">+1.45%</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 p-1">
                            <div className="flex flex-row whitespace-pre basis-1/2">
                                <img src="Wow_Momos.jpg" alt="Wow Momos" className="w-6 h-8" />
                                <span>Wow Momos</span>
                            </div>
                            <div className="flex flex-col text-right basis-1/2">
                                <span className="text-[#4E9F3D]">672.27</span>
                                <span className="text-[#4E9F3D]">+1.45%</span>
                            </div>
                        </div>
                    </div>                
                </div>
                <div className="w-full overflow-auto lg:flex lg:flex-col">
                    <div className="flex flex-col mt-4 border border-solid rounded-2xl">
                        <div className="bg-[#F59428] rounded-b-none p-1 rounded-2xl">
                            <div className="flex flex-row gap-4 p-1">
                                <span className="ml-2 text-sm text-white whitespace-pre">Top Gainer Restaurant </span>
                                <span className="ml-auto text-sm text-white">Change(%) </span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 p-1">
                            <div className="flex flex-row whitespace-pre basis-1/2">
                                <img src="Burger_king.jpg" className="w-10 h-8" alt="Burger King" />
                                <span>Burger King</span>
                            </div>
                            <div className="flex flex-col text-right basis-1/2">
                                <span className="text-[#DC3535]">672.27</span>
                                <span className="text-[#DC3535]">+1.45%</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 p-1">
                            <div className="flex flex-row whitespace-pre basis-1/2">
                                <img src="Subway.jpg" alt="Subway" className="w-6 h-8" />
                                <span>Subway</span>
                            </div>
                            <div className="flex flex-col text-right basis-1/2">
                                <span className="text-[#DC3535]">672.27</span>
                                <span className="text-[#DC3535]">+1.45%</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 p-1">
                            <div className="flex flex-row whitespace-pre basis-1/2">
                                <img src="Pizza_Hut.jpg" alt="Pizza Hut" className="w-6 h-8" />
                                <span>Pizza Hut</span>
                            </div>
                            <div className="flex flex-col text-right basis-1/2">
                                <span className="text-[#4E9F3D]">672.27</span>
                                <span className="text-[#4E9F3D]">+1.45%</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 p-1">
                            <div className="flex flex-row whitespace-pre basis-1/2">
                                <img src="Wow_Momos.jpg" alt="Wow Momos" className="w-6 h-8" />
                                <span>Wow Momos</span>
                            </div>
                            <div className="flex flex-col text-right basis-1/2">
                                <span className="text-[#4E9F3D]">672.27</span>
                                <span className="text-[#4E9F3D]">+1.45%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-2">
                <RestaurantCard />
            </div>
        </div>
    )
}
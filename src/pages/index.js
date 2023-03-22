// import Layout from "../components/Layout";

import Card from "../components/Card";

export default function Home() {
    return (
        <div className="flex-row gap-2 mt-4 overflow-x-hidden bg-white sm:flex">
            <div className="flex flex-col gap-2 md:ml-3 basis-1/2">
                <div className="border border-solid gap-2 border-[#D0D0D0] rounded-lg flex flex-row p-2">
                    <div className="flex flex-row w-full border-r border-solid border-[#969696]">
                        <img src="./Search.jpg" alt="" className="p-2"/>
                        <input type={"search"} placeholder="Search Restaurants,food or dish" className="w-full focus:outline-none border-[0px] max-sm:placeholder:text-xs"/>
                    </div>
                    <img src="Mic.jpg" className="p-2" alt="mic"/>
                </div>
                <div className="flex flex-row items-center gap-9">
                    <div className="flex flex-row items-center w-[96px] gap-2 p-4 bg-white rounded-lg shadow-filter">
                        <span className="text-base leading-[24px] font-normal font-nav">Sort</span>
                        <img src="Settings(1).jpg" alt="" className="h-3"/>
                    </div>                                       
                    <div className="p-4 bg-white rounded-lg shadow-filter w-[150px]">
                        <span className="text-base leading-[24px] font-normal font-nav">Fast Delivery</span>
                    </div>                    
                    <div className="p-4 bg-white rounded-lg shadow-filter w-[88px]">
                        <span className="text-base leading-[24px] font-normal font-nav">Offers</span>
                    </div>                    
                    <div className="p-4 bg-white rounded-lg shadow-filter w-[102px]">
                        <span className="text-base leading-[24px] font-normal font-nav">Cuisines</span>
                    </div>                    
                    <div className="p-4 bg-white rounded-lg shadow-filter w-[130px]">
                        <span className="text-base leading-[24px] font-normal font-nav">Rating 4.0+</span>
                    </div>
                </div>
                <Card />
            </div>
            <div className="p-3 h-[58px] border border-solid border-[#BEBEBE] rounded-lg max-sm:hidden">
                <img src="Setting.png" alt="settings"/>
            </div>
            <div className="p-3 ml-auto mr-3 sm:mt-7">
                <div className="flex flex-col">
                    <div className="bg-[#F59428] rounded-b-none rounded-2xl">
                        <div className="flex flex-row gap-10 p-3 text-center"> 
                            <span className="text-sm text-white">Top Gainer Cuisine</span>
                            <span className="ml-auto text-sm text-white">Change(%)</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 p-3"> 
                        <img src="Indian.jpg" alt="Indian"/>
                        <span>Indian</span>
                        <div className=""></div>
                    </div>                    
                    <div className="flex flex-row gap-1 p-3"> 
                        <img src="Thai.jpg" alt="Thai"/>
                        <span>Thai</span>
                        <div className=""></div>
                    </div>                    
                    <div className="flex flex-row gap-1 p-3"> 
                        <img src="French.jpg" alt="French"/>
                        <span>French</span>
                        <div className=""></div>
                    </div>                    
                    <div className="flex flex-row gap-1 p-3"> 
                        <img src="Chinese.jpg" alt="Chinese"/>
                        <span>Chinese</span>
                        <div className=""></div>
                    </div>                    
                </div>                
                <div className="flex flex-col mt-4">
                    <div className="bg-[#F59428] rounded-b-none rounded-2xl">
                        <div className="flex flex-row gap-4 p-3 text-center"> 
                            <span className="text-sm text-white">Top Gainer Restaurant </span>
                            <span className="ml-auto text-sm text-white">Change(%) </span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 p-3">
                        <img src="Burger_king.jpg" alt="Burger King"/>
                        <span>Burger King</span>
                        <div className=""></div>
                    </div>                    
                    <div className="flex flex-row gap-1 p-3"> 
                        <img src="Subway.jpg" alt="Subway"/>
                        <span>Subway</span>
                        <div className=""></div>
                    </div>                    
                    <div className="flex flex-row gap-1 p-3"> 
                        <img src="Pizza_Hut.jpg" alt="Pizza Hut"/>
                        <span>Pizza Hut</span>
                        <div className=""></div>
                    </div>                    
                    <div className="flex flex-row gap-1 p-3"> 
                        <img src="Wow_Momos.jpg" alt="Wow Momos"/>
                        <span>Wow Momos</span>
                        <div className=""></div>
                    </div>
                </div>                
            </div>
        </div>
    )
}
import Card from "../components/Card";
import RestaurantCard from "../components/RestaurantCard";
import Gainers from "../components/Gainers";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function Home() {
    const [sideDrawer, setSideDrawer] = useState(false)

    return (
        <div>
            <div id="main" className="flex flex-row gap-2 mt-4 overflow-x-hidden bg-white -z-[99999999] lg:ml-4 max-lg:flex max-lg:flex-col">
                <div className="flex flex-col gap-4 md:ml-3 xl:basis-3/4 basis-1/2">
                    <SearchBar sideDrawer={sideDrawer} setSideDrawer={setSideDrawer}/>
                    <Filters sideDrawer={sideDrawer} setSideDrawer={setSideDrawer} />
                    <Card />
                </div>
                <div className="flex flex-row items-center justify-center lg:hidden">
                    <img src="Exchange.png" alt="exchange" />
                    <span className="italic font-medium leading-[30px] text-xl uppercase">The Food Stock Exchange</span>
                </div>
                <Gainers />
                <div className="m-2">
                    <RestaurantCard />
                </div>
            </div>            
        </div>
    )
}

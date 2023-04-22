import { useState } from "react";
import SideDrawer from "../components/SideDrawer";

export default function Filters() {
    const [sideDrawer, setSideDrawer] = useState(false)

    function closeSideDrawer() {
        setSideDrawer(false)
    }

    document.querySelector("body").style.overflowY = sideDrawer ? "hidden" : "auto"

    return (
        <div className="flex flex-row items-center m-4 overflow-x-auto gap-9">
            <button onClick={() => { setSideDrawer(true) }} className="flex flex-row items-center w-[96px] gap-2 p-4 bg-white rounded-lg shadow-filter h-[70%]">
                <span className="text-base leading-[24px] font-normal font-nav">Sort</span>
                <img src="Settings(1).jpg" alt="" className="h-3" />
            </button>
            <div className="p-2 bg-white text-center h-[70%] rounded-lg shadow-filter w-[150px]">
                <span className="text-base whitespace-pre leading-[24px] font-normal font-nav">Fast Delivery</span>
            </div>
            <div className="p-2 bg-white text-center h-[70%] rounded-lg shadow-filter w-[88px]">
                <span className="text-base leading-[24px] font-normal font-nav">Offers</span>
            </div>
            <div className="p-2 bg-white h-[70%] text-center rounded-lg shadow-filter w-[102px]">
                <span className="text-base leading-[24px] font-normal font-nav">Cuisines</span>
            </div>
            <div className="p-2 bg-white h-[70%] text-center rounded-lg shadow-filter w-[130px]">
                <span className="text-base whitespace-pre leading-[24px] font-normal font-nav">Rating 4.0+</span>
            </div>
            <div className={`${sideDrawer ? "after:absolute after:h-screen after:z-[99] after:bottom-0 after:right-0 after:left-[50%] lg:after:left-[35%] after:top-0 after:bg-[#000000a9]" : ""}`}>
                <SideDrawer
                    open={sideDrawer}
                    close={closeSideDrawer}
                />
            </div>
        </div>
    )
}
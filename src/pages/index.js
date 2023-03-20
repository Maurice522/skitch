// import Layout from "../components/Layout";

export default function Home() {
    return (
        <div className="flex-row gap-2 mt-4 overflow-x-hidden bg-white sm:flex">
            <div className="gap-2 basis-1/2">
                <div className="border border-solid gap-2 border-[#D0D0D0] rounded-lg flex flex-row p-2">
                    <div className="flex flex-row w-full border-r border-solid border-[#969696]">
                        <img src="./Search.jpg" alt="" className="p-2"/>
                        <input type={"search"} placeholder="Search Restaurants,food or dish" className="w-full focus:outline-none border-[0px] max-sm:placeholder:text-xs"/>
                    </div>
                    <img src="Mic.jpg" className="p-2" alt="mic"/>
                </div>
            </div>
            <div className="p-3 h-[58px] border border-solid border-[#BEBEBE] rounded-lg max-sm:hidden">
                <img src="Setting.png" alt="settings"/>
            </div>
            <div className="p-3 ml-auto mr-3 sm:mt-7">
                <div className="flex flex-col">
                    <div className="bg-[#F59428] rounded-b-none rounded-2xl">
                        <div className="flex flex-row gap-10 p-3 text-center"> 
                            <span className="text-sm text-white">Top Gainer Cuisine</span>
                            <span className="ml-auto text-sm text-white">Change%</span>
                        </div>
                    </div>
                    <div className="flex flex-row p-3"> 
                        <span>Indian</span>
                        <span></span>
                    </div>                    
                    <div className="flex flex-row p-3"> 
                        <span>Indian</span>
                        <span></span>
                    </div>                    
                    <div className="flex flex-row p-3"> 
                        <span>Indian</span>
                        <span></span>
                    </div>                    
                    <div className="flex flex-row p-3"> 
                        <span>Indian</span>
                        <span></span>
                    </div>
                </div>                
                <div className="flex flex-col mt-4">
                    <div className="bg-[#F59428] rounded-b-none rounded-2xl">
                        <div className="flex flex-row gap-1 p-3 text-center"> 
                            <span className="text-sm text-white">Top Gainer Restaurant </span>
                            <span className="ml-auto text-sm text-white">Change%</span>
                        </div>
                    </div>
                    <div className="flex flex-row p-3"> 
                        <span>Indian</span>
                        <span></span>
                    </div>                    
                    <div className="flex flex-row p-3"> 
                        <span>Indian</span>
                        <span></span>
                    </div>                    
                    <div className="flex flex-row p-3"> 
                        <span>Indian</span>
                        <span></span>
                    </div>                    
                    <div className="flex flex-row p-3"> 
                        <span>Indian</span>
                        <span></span>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default function RestaurantCard() {
    return (
        <div className="flex flex-col gap-8 hover:cursor-pointer lg:hidden sm:items-center">          
            <div className="bg-pizzeria bg-no-repeat flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <div className="flex flex-col items-end w-full gap-2">
                    <div className="bg-[#F59428] rounded-md self-end p-2 relative left-5">
                        <span className="text-white">25% OFF up to 170</span>
                    </div>
                    <span className="text-right relative -left-[10%]">Italian Pizzeria</span>
                    <div className="flex flex-row relative -left-[27%] w-[43px] border-[#F59428] rounded-md border border-solid"><img src="Star.png" alt="Star"/><span>4.4</span></div>
                    <div className="flex flex-row gap-4 ml-3 sm:ml-24">
                        <span className="sm:whitespace-pre">Sector 71</span>
                        <span className="sm:whitespace-pre justify-self-end">32 mins</span>
                    </div>
                </div>
            </div>            
            <div className="bg-tandoori bg-no-repeat flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <div className="flex flex-col items-end w-full gap-2">
                    <div className="bg-[#F59428] rounded-md self-end p-2 relative left-5">
                        <span className="text-white">25% OFF up to 170</span>
                    </div>
                    <span className="text-right relative -left-[5%]">Tandoori Kitchen</span>
                    <div className="flex flex-row relative -left-[27%] w-[43px] border-[#F59428] rounded-md border border-solid"><img src="Star.png" alt="Star"/><span>4.4</span></div>
                    <div className="flex flex-row gap-4 ml-3 sm:ml-24">
                        <span className="sm:whitespace-pre">Sector 71</span>
                        <span className="sm:whitespace-pre justify-self-end">32 mins</span>
                    </div>
                </div>
            </div>            
            <div className="bg-momos bg-no-repeat flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <div className="flex flex-col items-end w-full gap-2">
                    <div className="bg-[#F59428] rounded-md self-end p-2 relative left-5">
                        <span className="text-white">25% OFF up to 170</span>
                    </div>
                    <span className="text-right relative -left-[13%]">Wow Momos</span>
                    <div className="flex flex-row relative -left-[27%] w-[43px] border-[#F59428] rounded-md border border-solid"><img src="Star.png" alt="Star"/><span>4.4</span></div>
                    <div className="flex flex-row gap-4 ml-3 sm:ml-24">
                        <span className="sm:whitespace-pre">Sector 71</span>
                        <span className="sm:whitespace-pre justify-self-end">32 mins</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <img src="Burg_King.jpg" className="p-0 rounded-2xl" alt="Burger King"/>
                <div className="flex flex-col items-center w-auto gap-2">
                    <div className="bg-[#F59428] rounded-md self-end p-2 relative left-5">
                        <span className="text-white">25% OFF up to 170</span>
                    </div>
                    <span className="ml-5">Burger King</span>
                    <div className="flex flex-row w-16"><img src="Star.png" alt="Star"/> 4.4</div>
                    <div className="flex flex-row gap-4 ml-3 sm:ml-24">
                        <span className="sm:whitespace-pre">32 mins</span>
                        <span className="sm:whitespace-pre">5km</span>
                        <span className="sm:whitespace-nowrap">100 for one</span>
                    </div>
                </div>
            </div>  
        </div>
    )
}
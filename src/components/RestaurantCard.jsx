export default function RestaurantCard() {
    return (
        <div className="flex flex-col gap-8 hover:cursor-pointer lg:hidden sm:items-center">          
            <div className="bg-pizzeria bg-no-repeat flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <div className="flex flex-col items-end justify-center w-full gap-2">
                    <span className="text-right relative -left-[10%]">Italian Pizzeria</span>
                    <div className="flex flex-row relative -left-[27%] w-[43px] border-[#F59428] rounded-md border border-solid"><img src="Star.png" alt="Star"/><span>4.4</span></div>
                    <div className="flex flex-row gap-4 ml-3 sm:ml-24">
                        <span className="sm:whitespace-pre">Sector 71</span>
                        <span className="sm:whitespace-pre justify-self-end">32 mins</span>
                    </div>
                </div>
            </div>            
            <div className="bg-tandoori bg-no-repeat flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <div className="flex flex-col items-end justify-center w-full gap-2">
                    <span className="text-right relative -left-[5%]">Tandoori Kitchen</span>
                    <div className="flex flex-row relative -left-[27%] w-[43px] border-[#F59428] rounded-md border border-solid"><img src="Star.png" alt="Star"/><span>4.4</span></div>
                    <div className="flex flex-row gap-4 ml-3 sm:ml-24">
                        <span className="whitespace-pre">Sector 71</span>
                        <span className="whitespace-pre justify-self-end">32 mins</span>
                    </div>
                </div>
            </div>            
            <div className="bg-momos bg-no-repeat flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <div className="flex flex-col items-end justify-center w-full gap-2">
                    <span className="text-right relative -left-[13%]">Wow Momos</span>
                    <div className="flex flex-row relative -left-[27%] w-[43px] border-[#F59428] rounded-md border border-solid"><img src="Star.png" alt="Star"/><span>4.4</span></div>
                    <div className="flex flex-row gap-4 ml-3 sm:ml-24">
                        <span className="sm:whitespace-pre">Sector 71</span>
                        <span className="sm:whitespace-pre justify-self-end">32 mins</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function RestaurantCard() {
    return (
        <div className="flex flex-col gap-8 hover:cursor-pointer lg:hidden sm:items-center">          
            <div className="bg-pizzeria bg-no-repeat flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <img src="Pizzeria.jpg" className="basis-1/2 w-[250px]"/>
                <div className="flex flex-col justify-center w-full gap-2 px-7 basis-1/2">
                    <span className="">Italian Pizzeria</span>
                    <div className="flex flex-row w-[43px] border-[#F59428] rounded-md border border-solid"><img src="Star.png" alt="Star"/><span>4.4</span></div>
                    <div className="flex flex-row gap-4">
                        <span className="sm:whitespace-pre">Sector 71</span>
                        <span className="sm:whitespace-pre justify-self-end">32 mins</span>
                    </div>
                </div>
            </div>            
            <div className="flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <img src="Tandoori.jpg" className="basis-1/2"/>
                <div className="flex flex-col justify-center w-full gap-2 px-7 basis-1/2">
                    <span className="">Tandoori Kitchen</span>
                    <div className="flex flex-row w-[43px] border-[#F59428] rounded-md border border-solid"><img src="Star.png" alt="Star"/><span>4.4</span></div>
                    <div className="flex flex-row gap-4">
                        <span className="sm:whitespace-pre">Sector 71</span>
                        <span className="sm:whitespace-pre justify-self-end">32 mins</span>
                    </div>
                </div>
            </div>            
            <div className="flex flex-row border border-solid sm:w-[550px] w-auto h-[154px] rounded-2xl border-[#CFCFCF]">
                <img src="Momos.jpg" className="basis-1/2"/>
                <div className="flex flex-col justify-center w-full gap-2 px-7 basis-1/2">
                    <span className="">Wow Momos</span>
                    <div className="flex flex-row w-[43px] border-[#F59428] rounded-md border border-solid"><img src="Star.png" alt="Star"/><span>4.4</span></div>
                    <div className="flex flex-row gap-4">
                        <span className="sm:whitespace-pre">Sector 71</span>
                        <span className="sm:whitespace-pre justify-self-end">32 mins</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
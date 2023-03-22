export default function Card() {
    return (
        <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
                <div className="bg-burger h-[170px] w-[200px] rounded-md bg-contain bg-no-repeat">
                    {/* <img src="Burger.jpg" alt="Burger"/> */}
                </div>
                <div className="flex flex-row">
                    <span>Burger</span>
                    <div className="flex flex-row items-center gap-1 w-12 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star" className="w-4"/>
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ 100 for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock"/>
                        <span className="font-medium leading-[21px] w-16 ml-auto text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div>            
            <div className="flex flex-col">
                <img src="Burger.jpg" alt="Burger"/>
                <div className="flex flex-row">
                    <span>Burger</span>
                    <div className="flex ml-auto flex-row rounded-[4px] border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star"/>
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ 100 for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock"/>
                        <span className="font-medium leading-[21px] text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div>            
            <div className="flex flex-col">
                <img src="Burger.jpg" alt="Burger"/>
                <div className="flex flex-row">
                    <span>Burger</span>
                    <div className="flex flex-row rounded-[4px] ml-auto border-[#F59428] border border-solid">
                        <img src="Star.png" alt="star"/>
                        <span>4.4</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <span>₹ 100 for one</span>
                    <div className="flex flex-row ml-auto">
                        <img src="Clock.png" alt="Clock"/>
                        <span className="font-medium leading-[21px] text-sm font-nav">32 mins</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Restaurant2() {
    return (
        <div className="flex flex-row gap-4">
            <div className="flex flex-col">
                <img src="image 18.png" alt="" />
                <div className="flex flex-row gap-2">
                    <img src="image 22.png" alt="" />
                    <div className="flex gap-2 flex-col">
                        <img src="image 22 (1).png" alt="" />
                        <img src="image 22 (1).png" alt="" />
                    </div>
                </div>
                <div className="flex flex-row mt-4 gap-4">
                    <button className="bg-[#F59428] text-white text-center rounded-md p-3">Book a Table</button>
                    <button className="bg-[#F59428] text-white text-center rounded-md p-3">Pay bill</button>
                </div>
            </div>
            <div className="flex flex-col basis-1/2 ">
                <div className="flex flex-row">
                    <span className="font-nav font-semibold text-3xl leading-[48px]">Italian Pizzeria Cafe<br></br><span className="font-nav font-medium text-lg leading-[27px]">North Indian, Chinese, Italian</span></span>
                    <div className="rounded-lg items-center gap-6 ml-auto flex border border-solid border-[#C0C0C0] flex-row p-2 max-h-[52px]">
                        <span className="text-[#4E9F3D] font-medium text-xl leading-[30px] font-nav">Open Now</span>
                        <span>12pm-11:30pm</span>
                        <img src="down-arrow.png" className="w-[13px] h-[10px]" alt="" />
                    </div>
                </div>
                <div className="flex items-center flex-row gap-2">
                    <div className="flex flex-row gap-1 bg-[#F59428] rounded-lg p-2">
                        <img src="white-star.png" alt="" />
                        <div className="text-white">4.6</div>
                    </div>
                    <span>9176 Reviews</span>
                </div>
                <div className="mt-9 flex flex-row gap-8">
                    <div className="rounded-lg flex flex-row gap-2 border border-solid border-[#717171] p-3">
                        <img src="call.png" alt="call" />
                        <span>Contact</span>
                    </div>
                    <div className="rounded-lg flex flex-row gap-2 border border-solid border-[#717171] p-3">
                        <img src="share.png" alt="call" />
                        <span>share</span>
                    </div>
                    <div className="rounded-lg flex flex-row gap-2 border border-solid border-[#717171] p-3">
                        <img src="directions.png" alt="call" />
                        <span>Direction</span>
                    </div>
                    <div className="rounded-lg flex flex-row gap-2 border border-solid border-[#717171] p-3">
                        <img src="save.png" alt="call" />
                        <span>Save</span>
                    </div>
                </div>
                <div className="border-solid border-b-[#9E9E9E] border-b-[1px] mt-4 h-0"></div>
                <div className="flex flex-row mt-8">
                    <div className="flex flex-col gap-4 basis-[39%]">
                        <span>Location</span>
                        <span>5 km away from your location</span>
                        <span>Lorem ipsum dolor sit amet consecte.Et ultrices tincidunt dolor semper sit. Lorem ipsum dolor sit amet consect.</span>
                        <div className="rounded-lg flex flex-row gap-2 border border-solid border-[#717171] p-3">
                            <img src="directions.png" alt="call" />
                            <span>Direction</span>
                        </div>
                    </div>
                    <div className="basis-3/4">
                        <img src="map.png" alt="map"/>
                    </div>
                </div>
                <div className="border-solid border-b-[#9E9E9E] border-b-[1px] mt-4 h-0"></div>
                <img src="menu.png" alt="menu" className="w-[209px]"/>
            </div>
        </div>
    )
}
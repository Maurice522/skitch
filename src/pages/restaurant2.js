import Reviews from "../components/Reviews";

export default function Restaurant2() {
    return (
        <div className="flex flex-row justify-center gap-4 m-4 max-lg:flex-col">
            <div className="flex flex-col">
                <img src="image 18.png" alt="" />
                <div className="absolute right-0 mt-2 bg-white md:hidden items-center gap-6 ml-auto flex border border-solid border-[#C0C0C0] flex-row p-2 rounded-2xl h-[30px]">
                    <span className="text-[#4E9F3D] font-medium text-xl leading-[30px] font-nav">Open Now</span>
                    <span>12pm-11:30pm</span>
                    <img src="down-arrow.png" className="w-[13px] h-[10px]" alt="" />
                </div>
                <div className="flex flex-row gap-2 max-lg:hidden">
                    <img src="image 22.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <img src="image 22 (1).png" alt="" />
                        <img src="image 22 (1).png" alt="" />
                    </div>
                </div>
                <div className="flex flex-row gap-4 mt-4 max-lg:hidden">
                    <button className="bg-[#F59428] text-white text-center rounded-md p-3">Book a Table</button>
                    <button className="bg-[#F59428] text-white text-center rounded-md p-3">Pay bill</button>
                </div>
            </div>
            <div className="flex flex-col max-lg:ml-3 max-lg:items-start basis-1/2 ">
                <div className="flex flex-row">
                    <span className="font-nav font-semibold text-3xl leading-[48px]">Italian Pizzeria Cafe<br></br><span className="font-nav font-medium text-lg leading-[27px]">North Indian, Chinese, Italian</span></span>
                    <div className="rounded-lg max-lg:hidden items-center gap-6 ml-auto flex border border-solid border-[#C0C0C0] flex-row p-2 max-h-[52px]">
                        <span className="text-[#4E9F3D] font-medium text-xl leading-[30px] font-nav">Open Now</span>
                        <span>12pm-11:30pm</span>
                        <img src="down-arrow.png" className="w-[13px] h-[10px]" alt="" />
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-row gap-1 bg-[#F59428] rounded-lg p-2">
                        <img src="white-star.png" alt="" />
                        <div className="text-white">4.6</div>
                    </div>
                    <span>9176 Reviews</span>
                </div>
                <div className="flex flex-row gap-8 max-lg:gap-2 mt-9">
                    <div className="rounded-lg flex flex-row gap-2 border border-solid border-[#717171] p-3">
                        <img src="call.png" alt="call" />
                        <span>Contact</span>
                    </div>
                    <div className="rounded-lg flex flex-row gap-2 border border-solid border-[#717171] p-3">
                        <img src="share.png" alt="call" />
                        <span>share</span>
                    </div>
                    <div className="rounded-lg max-lg:hidden flex flex-row gap-2 border border-solid border-[#717171] p-3">
                        <img src="directions.png" alt="call" />
                        <span>Direction</span>
                    </div>
                    <div className="rounded-lg flex flex-row gap-2 border border-solid border-[#717171] p-3">
                        <img src="save.png" alt="call" />
                        <span>Save</span>
                    </div>
                </div>
                <div className="border-solid border-b-[#9E9E9E] border-b-[1px] mt-4 h-0"></div>
                <div className="flex flex-row gap-4 mt-8 max-lg:flex-col">
                    <div className="flex flex-col gap-4 basis-[39%]">
                        <div className="flex flex-col gap-3 max-lg:flex-row">
                            <span>Location</span>
                            <span>5 km away from your location</span>
                        </div>
                        <span>Lorem ipsum dolor sit amet consecte.Et ultrices tincidunt dolor semper sit. Lorem ipsum dolor sit amet consect.</span>
                        <div className="rounded-lg max-lg:hidden flex flex-row gap-2 border border-solid border-[#717171] p-3">
                            <img src="directions.png" alt="call" />
                            <span>Direction</span>
                        </div>
                    </div>
                    <div className="relative basis-3/4">
                        <img src="map.png" className="max-lg:w-full" alt="map"/>
                        <div className="lg:hidden flex absolute bottom-2 right-5 bg-white shadow-direction rounded-[4px] flex-row gap-2 border border-solid border-white p-3">
                            <img src="directions.png" alt="call" />
                            <span>Direction</span>
                        </div>
                    </div>
                </div>
                <div className="border-solid border-b-[#9E9E9E] border-b-[1px] mt-4 h-0"></div>
                <img src="menu.png" alt="menu" className="w-[209px]"/>
            </div>
            <div className="ml-2 border lg:hidden"></div>
            <div className="flex flex-col gap-2 ml-2 lg:hidden">
                <span className="text-base font-normal leading-6 text-[#000000] font-nav">Average Cost</span>
                <span className="text-base font-light leading-6 font-nav">₹ 1,200 for two people</span>
                <span className="leading-[30px] text-sm font-light">Exclusive of application taxes and charges, if any</span>
                <span className="text-sm font-normal text-[#0C0C0A] font-nav leading-[30px]">Digital payments accepted</span>
            </div>
            <Reviews />
            <div className="flex flex-row gap-4 m-2 mt-4 lg:hidden">
                <button className="bg-[#F59428] text-white text-center rounded-md p-3">Book a Table</button>
                <button className="bg-[#F59428] text-white text-center rounded-md p-3">Pay bill</button>
            </div>
        </div>
    )
}
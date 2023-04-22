export default function OrderDetails() {
    return (
        <div className="border bg-white mt-4 max-md:w-full max-md:m-4 max-md:p-3 max-md:items-start gap-8 p-8 max-md:border-[0px] border-solid rounded-md border-[#C8C8C8] flex flex-col items-center">
            <div className="flex flex-col gap-4 border-solid rounded-lg max-md:border max-md:w-full max-md:p-4">
                <div className="flex flex-row gap-4">
                    <img src="Burger_king.jpg" alt="" />
                    <span>Burger King</span>
                </div>
                <div className="flex flex-row gap-4">
                    <img src="Veg.jpg" alt="veg" />
                    <span>Veg Whopper</span>
                    <div className="flex text-[#F59428] max-md:ml-auto flex-row border border-solid rounded-md border-[#F59428] gap-4 px-1">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <img src="Veg.jpg" alt="veg" />
                    <span>Veg Whopper</span>
                    <div className="flex max-md:ml-auto text-[#F59428] flex-row border border-solid rounded-md border-[#F59428] gap-4 px-1">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <img src="Veg.jpg" alt="veg" />
                    <span>Veg Whopper</span>
                    <div className="flex text-[#F59428] max-md:ml-auto flex-row border border-solid rounded-md border-[#F59428] gap-4 px-1">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
            </div>
            <button className="flex flex-row border border-solid border-[#B3B3B3] w-full rounded-lg gap-4 p-3">
                <span className="whitespace-pre basis-1/2">Apply Coupon</span>
                <img src="right-arrow.png" alt="" className="ml-auto w-[15px] h-[15px] self-center" />
            </button>
            <div className="border w-full border-solid border-[#B3B3B3] rounded-lg flex flex-col gap-4">
                <div className="flex flex-row gap-4 p-3">
                    <span className="basis-1/2">Item Total</span>
                    <span className="text-right basis-1/2">₹ 176.50</span>
                </div>
                <div className="flex flex-row gap-4 p-3">
                    <span className="basis-1/2">Delivery fee</span>
                    <span className="text-right basis-1/2">₹ 20</span>
                </div>
                <div className="flex flex-row gap-4 p-3">
                    <span className="basis-1/2">Delivery Tip</span>
                    <button className="text-right basis-1/2">₹ 40</button>
                </div>
                <div className="flex flex-row gap-4 p-3 text-white bg-[#4CB6E3]">
                    <span className="basis-1/2">To pay</span>
                    <span className="text-right basis-1/2">₹ 236.50</span>
                </div>
            </div>
        </div>
    )
}
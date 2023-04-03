export default function Cart() {
    return (
        <div className="flex flex-row bg-[#EDE7DB] items-start justify-center gap-4 max-md:flex-col-reverse max-md:items-center">
            <div className="flex flex-col gap-4 p-1 mt-4 max-md:p-4 max-md:w-full basis-1/2">
                <div className="flex flex-col border bg-white border-solid rounded-md border-[#C8C8C8] p-4 gap-4">
                    <div className="flex flex-row gap-4">
                        <span className="whitespace-pre basis-1/2">Your Details</span>
                        <button className="text-[#DC3535] text-right basis-1/2">Edit</button>
                    </div>
                    <span>Aman Gupta</span>
                    <span>7892561425</span>
                </div>
                <div className="flex flex-col bg-white border border-solid rounded-md border-[#C8C8C8] p-2 gap-4">
                    <div className="flex flex-row gap-4">
                        <span className="basis-1/2">Address</span>
                        <button className="text-right basis-1/2 text-[#DC3535]">Edit</button>
                    </div>                   
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col basis-1/2"><span>Home</span><span>Dasnac Jewel of noida, sector 126</span></div>
                        <div className="text-right basis-1/2">35-40 mins</div>
                    </div>
                    <span className="text-right">Add New Address +</span>
                </div>
                <button className="p-4 border w-[50%] border-solid rounded-md bg-[#4E9F3D] text-white">Proceed to pay</button>
            </div>
            <div className="border bg-white mt-4 max-md:w-full max-md:m-4 max-md:p-3 max-md:items-start gap-8 p-8 max-md:border-[0px] border-solid rounded-md border-[#C8C8C8] flex flex-col items-center"> 
                <div className="flex flex-col gap-4 border-solid rounded-lg max-md:border max-md:w-full max-md:p-4">
                <div className="flex flex-row gap-4">
                    <img src="Burger_king.jpg" alt=""/>
                    <span>Burger King</span>
                </div>
                <div className="flex flex-row gap-4">
                    <img src="Veg.jpg" alt="veg"/>
                    <span>Veg Whopper</span>
                    <div className="flex text-[#F59428] max-md:ml-auto flex-row border border-solid rounded-md border-[#F59428] gap-4 px-1">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>                
                <div className="flex flex-row gap-4">
                    <img src="Veg.jpg" alt="veg"/>
                    <span>Veg Whopper</span>
                    <div className="flex max-md:ml-auto text-[#F59428] flex-row border border-solid rounded-md border-[#F59428] gap-4 px-1">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>                
                <div className="flex flex-row gap-4">
                    <img src="Veg.jpg" alt="veg"/>
                    <span>Veg Whopper</span>
                    <div className="flex text-[#F59428] max-md:ml-auto flex-row border border-solid rounded-md border-[#F59428] gap-4 px-1">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                </div>
                <div className="flex flex-row border border-solid border-[#B3B3B3] w-full rounded-lg gap-4 p-3">
                    <span className="whitespace-pre basis-1/2">Apply Coupon</span>                    
                    <img src="right-arrow.png" alt="" className="ml-auto w-[15px] h-[8px] self-center"/>
                </div>
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
        </div>
    )
}
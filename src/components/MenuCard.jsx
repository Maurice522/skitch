export default function MenuCard({menu,setOrderCartArray,tempIdArr,setTempIdArr}) {

const addToCartClick=(menu)=>{
    if(tempIdArr.length===0){setOrderCartArray((p)=>{return[...p,{...menu,quantity:1}]});setTempIdArr((p)=>{return[...p,menu.id]});return}
if(!tempIdArr.includes(menu.id)){setOrderCartArray((p)=>{return[...p,{...menu,quantity:1}]});setTempIdArr((p)=>{return[...p,menu.id]})}


}

    return (
        <div className="flex flex-row gap-3 max-lg:-ml-4 max-lg:border max-lg:rounded-lg max-lg:gap-2 max-lg:flex-wrap">
            <div className="flex flex-col max-lg:m-1 max-lg:w-[40vw] md:w-[20vw] order-1 max-lg:order-1">
                <img src={menu?.image} className="max-lg:w-[200px] max-lg:h-[200px] w-[127px] h-[139px] rounded-2xl" />
                <div onClick={()=>addToCartClick(menu)} className="flex flex-row self-center items-center justify-center -top-4 bg-white w-[92px] gap-1 relative rounded-[4px] border-[#F59428] border border-solid">
                    <span className="text-[#F59428] text-center whitespace-pre"> ADD+</span>
                </div>
            </div>
            <div className="flex flex-col max-lg:mt-2 max-lg:w-[50vw] order-2 max-lg:order-2">
                <img src={menu.veg?"veg.png":"non-veg.png"} alt="veg" className="w-[17px] h-[17px]" />
                <span className="text-base font-medium font-nav">{menu?.name}</span>
                <img src="menu_star.png" className="w-[111px] h-[25px]" />
                <span>{menu?.desc}</span>
            </div>
            <div className="flex flex-row order-3 max-lg:border max-lg:rounded-lg max-lg:shadow-priceCard justify-evenly gap-6 max-lg:w-[100vw] max-lg:order-3">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-[58px] rounded-[6px] border-[#277BC0] border-2 border-solid">
                        <span className="text-[#277BC0] text-center whitespace-pre"> High</span>
                    </div>
                    <span className="text-[#277BC0]">+200</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-[58px] rounded-[6px] border-[#DC3535] border-2 border-solid">
                        <span className="text-[#DC3535] text-center whitespace-pre">Low</span>
                    </div>
                    <span className="text-[#DC3535]">-140.5</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center mt-7">
                    <div className="rounded-[6px] w-auto border-[#4E9F3D] bg-[#4E9F3D] border-2 border-solid">
                        <span className="text-[white] text-center whitespace-pre"> Current</span>
                    </div>
                    <span className="text-[#4E9F3D]">₹176.50</span>
                    <span className="text-[#4E9F3D]">+12.3(-20.5)</span>
                </div>
            </div>
        </div>
    )
}
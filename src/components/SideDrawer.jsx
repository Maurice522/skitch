export default function SideDrawer(props) {

    let id = document.getElementById("home");
    id?.addEventListener('click', props.close)
    console.log(document.getElementById("home"))

    return (
        <div id="sideDrawer" className={props.open ? "visible transition delay-300 ease-linear fixed top-0 left-0 bg-white p-4 h-screen w-[50%] lg:w-[35%] m-auto flex z-50 flex-col gap-4" : "hidden"}>
            <div className="border-b-2 border-solid w-[50%] border-black">
                <span>SORT BY</span>
            </div>
            <div className="flex flex-row z-[3784734]">
                <label htmlFor="low-high">Price-low to high</label>
                <input name="low-high" id="low-high" type={"radio"} className="ml-auto" />
            </div>
            <div className="flex flex-row z-[3784734]">
                <label htmlFor="low-high">Price-high to low</label>
                <input name="high-low" id="high-low" type={"radio"} className="ml-auto" />
            </div>
            <div className="flex flex-row  z-[3784734]">
                <label htmlFor="rating">Customer Rating</label>
                <input name="rating" id="rating" type={"radio"} className="ml-auto" />
            </div>
            <div className="flex flex-row  z-[3784734]">
                <label htmlFor="time">Delivery Time-low to high</label>
                <input name="time" id="time" type={"radio"} className="ml-auto" />
            </div>
            <div className="flex mt-6 flex-row  z-[3784734]">
                <button onClick={()=>{document.getElementById("time").checked = false;document.getElementById("rating").checked = false;document.getElementById("high-low").checked = false;document.getElementById("low-high").checked = false;}} className="text-[#DC3535]">Clear All</button>
                <button className="p-1 ml-auto text-gray-500 border border-gray-500 border-solid rounded-lg">Apply</button>
            </div>
        </div>
    )
}
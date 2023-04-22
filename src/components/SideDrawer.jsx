export default function SideDrawer(props) {

    let id1 = document.getElementById("home");
    let id2 = document.getElementById("dining");
    id1?.addEventListener('click', props.close)
    id2?.addEventListener('click', props.close)

    return (
        // <div className={props.open ? "w-[100%] z-[99999999]" : "hidden"}>
        <div id="sideDrawer" className={props.open ? "visible backdrop-blur-2xl transition delay-300 z-[99999] ease-linear fixed top-0 left-0 bg-white p-4 h-screen w-[50%] lg:w-[35%] m-auto flex flex-col gap-4" : "hidden"}>
            <div className="border-b-2 text-center border-solid w-[50%] border-black">
                <span>SORT BY</span>
            </div>
            <div className="flex flex-row z-[3784734]">
                <label htmlFor="low-high">Price-low to high</label>
                <input name="low-high" id="low-high" type={"radio"} className="ml-auto md:mr-9" />
            </div>
            <div className="flex flex-row z-[3784734]">
                <label htmlFor="low-high">Price-high to low</label>
                <input name="high-low" id="high-low" type={"radio"} className="ml-auto md:mr-9" />
            </div>
            <div className="flex flex-row  z-[3784734]">
                <label htmlFor="rating">Customer Rating</label>
                <input name="rating" id="rating" type={"radio"} className="ml-auto md:mr-9" />
            </div>
            <div className="flex flex-row  z-[3784734]">
                <label htmlFor="time">Delivery Time-low to high</label>
                <input name="time" id="time" type={"radio"} className="ml-auto md:mr-9" />
            </div>
            <div className="flex mt-6 flex-row  z-[3784734]">
                <button onClick={()=>{document.getElementById("time").checked = false;document.getElementById("rating").checked = false;document.getElementById("high-low").checked = false;document.getElementById("low-high").checked = false;}} className="text-[#DC3535]">Clear All</button>
                <button className="p-1 w-[30%] ml-auto text-gray-500 border border-gray-500 border-solid rounded-lg">Apply</button>
            </div>
        </div>
        // </div>
    )
}
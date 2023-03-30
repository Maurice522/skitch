export default function SideDrawer(props) {

    let id = document.getElementById("home");
    id?.addEventListener('click', props.close)
    console.log(document.getElementById("home"))

    return (
        <div id="sideDrawer" style={{ visibility: props.open ? "visible" : "hidden", }} className="fixed ml-2 top-0 left-0 bg-white p-4 h-screen w-[50%] lg:w-[45%] flex z-50 flex-col gap-4">
            <div className="border-b-2 border-solid w-[50%] border-black">
                <span>SORT BY</span>
            </div>
            <div className="flex flex-row lg:w-[75%] z-[3784734]">
                <label htmlFor="low-high">Price-low to high</label>
                <input name="low-high" id="low-high" type={"checkbox"} className="ml-auto" />
            </div>
            <div className="flex flex-row lg:w-[75%] z-[3784734]">
                <label htmlFor="low-high">Price-high to low</label>
                <input name="high-low" id="high-low" type={"checkbox"} className="ml-auto" />
            </div>
            <div className="flex flex-row lg:w-[75%] z-[3784734]">
                <label htmlFor="rating">Customer Rating</label>
                <input name="rating" id="rating" type={"checkbox"} className="ml-auto" />
            </div>
            <div className="flex flex-row lg:w-[75%] z-[3784734]">
                <label htmlFor="time">Delivery Time-low to high</label>
                <input name="time" id="time" type={"checkbox"} className="ml-auto" />
            </div>
            <div className="flex mt-6 flex-row lg:w-[75%] z-[3784734]">
                <button className="text-[#DC3535]">Clear All</button>
                <button className="ml-auto p-1 text-gray-500 border border-solid border-gray-500 rounded-lg">Apply</button>
            </div>
        </div>
    )
}
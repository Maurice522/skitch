import { useDispatch, useSelector } from "react-redux";
import { setSorter } from "../redux/SorterSlice";

export default function SideDrawer(props) {
const sorter=useSelector((state)=>state.sorter)
const dispatch=useDispatch()

    return (
        <div id="sideDrawer" className={props.open ? "visible  z-[99999999999] ease-linear fixed top-0 left-0 bg-white p-4 h-screen w-[70%] lg:w-[35%] m-auto flex flex-col gap-4" : "hidden"}>
            <div className="border-b-2 text-center border-solid w-[50%] border-black">
                <span>SORT BY</span>
            </div>
            <div className="flex flex-row z-[3784734]">
                <label htmlFor="low-high">Price-low to high</label>
                <div onClick={()=>dispatch(setSorter("lowToHigh"))} style={{width:"13px",height:"13px",border:"1px solid black",borderRadius:"50%",background:sorter==="lowToHigh"?"rgb(59 130 246)":""}} className="ml-auto md:mr-9"></div>
                {/* <input name="low-high" id="low-high" type={"radio"} className="ml-auto md:mr-9" /> */}
            </div>
            <div className="flex flex-row z-[3784734]">
                <label htmlFor="low-high">Price-high to low</label>
                <div onClick={()=>dispatch(setSorter("highToLow"))} style={{width:"13px",height:"13px",border:"1px solid black",borderRadius:"50%",background:sorter==="highToLow"?"rgb(59 130 246)":""}} className="ml-auto md:mr-9"></div>
                {/* <input value={false} name="high-low" id="high-low" type={"radio"} className="ml-auto md:mr-9" /> */}
            </div>
            {/* <div className="flex flex-row  z-[3784734]">
                <label htmlFor="rating">Customer Rating</label>
                <input name="rating" id="rating" type={"radio"} className="ml-auto md:mr-9" />
            </div> */}
            {/* <div className="flex flex-row  z-[3784734]">
                <label htmlFor="time">Delivery Time-low to high</label>
                <input name="time" id="time" type={"radio"} className="ml-auto md:mr-9" />
            </div> */}
            <div className="flex mt-6 flex-row  z-[3784734]">
                <button onClick={()=>{dispatch(setSorter(""))}} className="text-[#DC3535]">Clear All</button>
                <button onClick={()=>props.close()} className="p-1 w-[30%] ml-auto text-gray-500 border border-gray-500 border-solid rounded-lg">Apply</button>
            </div>
        </div>
    )
}
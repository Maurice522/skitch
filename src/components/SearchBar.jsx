export default function SearchBar({setSideDrawer}) {
    return (
        <div className="flex flex-row w-full gap-4">
            <div className="flex flex-row p-2 w-full border gap-2 rounded-lg border-r border-solid border-[#969696]">
                <img src="./Search.jpg" alt="" className="p-2" />
                <input type={"search"} placeholder="Search Restaurants,food or dish" className="w-full focus:outline-none border-[0px] max-sm:placeholder:text-xs" />
            </div>
            <div onClick={() => { setSideDrawer(true) }} className="p-3 h-[58px] border border-solid border-[#BEBEBE] rounded-lg max-lg:hidden">
                <img src="Setting.png" alt="settings" />
            </div>
        </div>
    )
}
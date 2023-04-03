export default function AccountModal(props) {
    return (
        <div className={props.open ? "visible overflow-auto transition delay-300 ease-linear fixed top-0 right-0 bg-white p-4 h-screen w-[50%] lg:w-[35%] m-auto flex z-50 flex-col gap-4" : "hidden"}>
            <button className="w-full p-6 text-black" onClick={() => { props.close() }}>
                <div className="flex flex-row gap-4"><img src="left_arrow.png" alt="left" /><span>Account</span></div>
            </button>
            <div className="flex flex-col gap-4 m-4 mt-5 text-black">
                <button className="flex flex-row  p-2 rounded-2xl shadow-editCard h-[52px]">
                    <span>Delete Account</span>
                    <span className="ml-auto"><img src="dropdown.png" alt="dropdown" /></span>
                </button>
            </div>
        </div>
    )
}
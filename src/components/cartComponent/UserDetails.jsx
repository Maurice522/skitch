import { useSelector } from "react-redux"

export default function UserDetails() {

    const userData=useSelector((state)=>state.user.userData)

    return (
        <div className="flex flex-col gap-4 p-1 mt-4 max-md:p-4 max-md:w-full basis-1/2">
        <div className="flex flex-col border bg-white border-solid rounded-md border-[#C8C8C8] p-4 gap-4">
            <div className="flex flex-row gap-4">
                <span className="whitespace-pre basis-1/2">Your Details</span>
                <button className="text-[#DC3535] text-right basis-1/2">Edit</button>
            </div>
            <span>{userData?.name}</span>
            <span>{userData?.phone}</span>
        </div>
        <div className="flex flex-col bg-white border border-solid rounded-md border-[#C8C8C8] p-2 gap-4">
            <div className="flex flex-row gap-4">
                <span className="basis-1/2">Address</span>
                <button className="text-right basis-1/2 text-[#DC3535]">Edit</button>
            </div>                   
            <div className="flex flex-row gap-4">
                <div className="flex flex-col basis-1/2"><span>Home</span><span>{userData?.address}</span></div>
                <div className="text-right basis-1/2">35-40 mins</div>
            </div>
            <span className="text-right">Add New Address +</span>
        </div>
        <button className="p-4 border w-[50%] border-solid rounded-md bg-[#4E9F3D] text-white">Proceed to pay</button>
    </div>
    )
}
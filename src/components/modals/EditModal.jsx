export default function EditModal(props) {

    let id = document.getElementById("profile");
    id?.addEventListener('click', props.close)

    return (
        <div className={props.open ? "visible overflow-auto transition delay-300 ease-linear fixed top-0 right-0 bg-white p-4 h-screen w-[50%] lg:w-[35%] m-auto flex z-50 flex-col gap-4" : "hidden"}>
            <button className="w-full p-6 text-black" onClick={() => { props.close() }}>
                <div className="flex flex-row gap-4"><img src="left_arrow.png" alt="left" /><span>Edit Your Profile</span></div>
            </button>
            <div className="flex flex-col items-center gap-2 text-black">
                <img src="profile.png" alt="profile" />
                <span>Change Profile</span>
            </div>
            <div className="flex flex-col gap-4 m-4 mt-5 text-black">
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                    <span>Name</span>
                    <div className="flex flex-row">
                        <input type="text" defaultValue={"Abc Xyz"} id="Name" autoFocus />
                        <button className="ml-auto text-[#DC3535]" onClick={() => { document.getElementById("Name").focus(); }}>edit</button>
                    </div>
                </div>
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                    <span>Email</span>
                    <div className="flex flex-row">
                        <input type="text" defaultValue={"abc@gmail.com"} id="mail" autoFocus />
                        <button className="ml-auto text-[#DC3535]" onClick={() => { document.getElementById("mail").focus(); }}>edit</button>
                    </div>
                </div>
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                    <span>Phone Number</span>
                    <div className="flex flex-row">
                        <input type="text" defaultValue={"938846365463"} id="num" autoFocus />
                        <button className="ml-auto text-[#DC3535]" onClick={() => { document.getElementById("num").focus(); }}>edit</button>
                    </div>
                </div>
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                    <span>Gender</span>
                    <select name="gender" id="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <button onClick={() => { props.close() }} className="self-center px-6 py-3 rounded-lg bg-[#F1F1F1] text-[#8D8D8D]">Save</button>
            </div>
        </div>
    )
}
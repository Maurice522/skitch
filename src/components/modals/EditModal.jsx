export default function EditModal(props) {

    let id = document.getElementById("profile");
    id?.addEventListener('click', props.close)

    return (
        <div
            style={{
                zIndex: "99",
                pointerEvents: "none",
                display: props.open ? "block" : "none",
            }}
            className="fixed top-0 left-0 w-screen min-h-screen backdrop-brightness-50"
        >
            <div
                className="fixed w-11/12 max-w-xl overflow-y-auto text-white bg-white rounded-3xl"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    pointerEvents: "all",
                    height: "90vh",
                }}
            >
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
                            <input type="text" defaultValue={"Abc Xyz"} id="Name" autoFocus/>
                            <button className="ml-auto text-[#DC3535]" onClick={()=> {document.getElementById("Name").focus();}}>edit</button>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                        <span>Email</span>
                        <div className="flex flex-row">
                            <input type="text" defaultValue={"abc@gmail.com"} id="mail" autoFocus/>
                            <button className="ml-auto text-[#DC3535]" onClick={()=> {document.getElementById("mail").focus();}}>edit</button>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                        <span>Phone Number</span>
                        <div className="flex flex-row">
                            <input type="text" defaultValue={"938846365463"} id="num" autoFocus/>
                            <button className="ml-auto text-[#DC3535]" onClick={()=> {document.getElementById("num").focus();}}>edit</button>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                        <span>Gender</span>
                        <select name="gender" id="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <button onClick={()=> {props.close()}} className="self-center px-6 py-3 rounded-lg bg-[#F1F1F1] text-[#8D8D8D]">Save</button>
                </div>
            </div>
        </div>
    )
}
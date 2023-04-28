import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {getUserFromDatabase, updateUserInDataBase} from "../../firebase/config"
import { setUserData } from "../../redux/userSlice";
import { useEffect } from "react";
import { uploadMedia } from "../../firebase/config";
import userImg from "../../assets/user_img.jpg"
export default function EditModal(props) {
    const dispatch=useDispatch()
    const chooseFileRef = useRef(null);
    const user=useSelector(state=>state.user)
    const userData = useSelector(state => state.user.userData);
    const [profileImage, setProfileImage] = useState(userData?.image);
    const[tempImgUrl,settempImgUrl]=useState(null)
    const[profileData,setProfileData]=useState({name:userData?.name,gender:userData?.gender,phone:userData?.phone,address:userData?.address})
    const[loading,setLoading]=useState(false)
    let id = document.getElementById("profile");
    id?.addEventListener('click', props.close)


    const chooseFile = () => {
        if (chooseFileRef.current) {
          chooseFileRef.current.click();
        }
      };

 //ON IMAGE CHANGE
 function onImageChange(e) {
    setProfileImage(e.target.files[0]);
    const fileURL = e.target.files[0];
    if (fileURL) {
        settempImgUrl(URL.createObjectURL(fileURL));
    }
  }



   //FETCH USERDATA FROM FIREBASE
  const fetchdata = async (email) => {
    const userDetaill = await getUserFromDatabase(email)
    dispatch(setUserData(userDetaill))
  }

useEffect(()=>{
    if(user.email){
    fetchdata(user.email)
    }
},[]) 

const handleInputChange=(e)=>{
    const{name,value}=e.target
    setProfileData((p)=>{return{...p,[name]:value}})
}

const handleEditProfile=async()=>{
    console.log("profileData",profileData)
    let imgLink=userData?.image
    // if(!profileData.name||!profileData.gender||!profileData.phone||!profileData.address){toast.error("Fill all fields");return}
    toast("Processing Your Request")
    if(tempImgUrl){
        setLoading(true)
        imgLink=await uploadMedia(profileImage,"User Profile")
        setLoading(false)
    }
    await updateUserInDataBase(userData?.email,{...profileData,image:imgLink},setLoading)
    props.close()
    props.setIsProfileUpdated((p)=>!p)
}

    return (
        <div className={props.open ? "visible overflow-auto transition delay-300 ease-linear fixed top-0 right-0 bg-white p-4 h-screen max-md:w-[100%] w-[50%] lg:w-[35%] m-auto flex z-50 flex-col gap-4" : "hidden"}>
        <input
            onChange={onImageChange}
            ref={chooseFileRef}
            type="file"
            hidden
            className="postImageUpload"
            accept="image/*"
          />
            <button className="w-full p-6 text-black" onClick={() => { props.close() }}>
                <div className="flex flex-row items-center gap-4"><img src="left_arrow.png" className="w-3 h-3" alt="left" /><span>Edit Your Profile</span></div>
            </button>
            <div className="flex flex-col items-center gap-2 text-black">
                <img style={{width:"60px",height:"60px",borderRadius:"50%"}} src={tempImgUrl?tempImgUrl:profileImage?profileImage:userImg} alt="profile" />
                <span style={{cursor:"pointer"}} onClick={chooseFile}>Change Profile</span>
            </div>
            <div className="flex flex-col gap-4 m-4 mt-5 text-black">
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                    <span>Name</span>
                    <div className="flex flex-row">
                        <input onChange={handleInputChange} name="name" value={profileData?.name} type="text" defaultValue={userData?.name} id="Name" autoFocus />
                        <button className="ml-auto text-[#DC3535]" onClick={() => { document.getElementById("Name").focus(); }}>edit</button>
                    </div>
                </div>
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                    <span>Email</span>
                    <div className="flex flex-row">
                        <input style={{width:"300px"}} disabled type="text" defaultValue={userData?.email} id="mail" autoFocus />
                        {/* <button className="ml-auto text-[#DC3535]" onClick={() => { document.getElementById("mail").focus(); }}>edit</button> */}
                    </div>
                </div>
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                    <span>Phone Number</span>
                    <div className="flex flex-row">
                        <input disabled={profileData?.phone} onChange={handleInputChange} name="phone" value={profileData?.phone} type="text" defaultValue={userData?.phone} id="num" autoFocus />
                        {!userData?.phone&&<button className="ml-auto text-[#DC3535]" onClick={() => { document.getElementById("num").focus(); }}>edit</button>}
                    </div>
                </div>
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[147px]">
                    <span>Address</span>
                    <div className="flex flex-row">
                        <textarea style={{height:"100px",width:"300px"}} onChange={handleInputChange} name="address" value={profileData?.address} type="text" defaultValue={userData?.address} id="address" autoFocus />
                        <button className="ml-auto text-[#DC3535]" onClick={() => { document.getElementById("address").focus(); }}>edit</button>
                    </div>
                </div>
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[87px]">
                    <span>Gender</span>
                    <select onChange={handleInputChange} defaultValue={"Select"} value={profileData?.gender} name="gender" id="gender">
                    <option disabled selected value="Select">Select...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <button disabled={loading} onClick={() => {handleEditProfile() }} className="self-center px-6 py-3 rounded-lg bg-[#F1F1F1] text-[#8D8D8D]">Save</button>
            </div>
        </div>
    )
}
import { useEffect, useState } from "react"
import EditModal from "../components/modals/EditModal"
import SettingModal from "../components/modals/SettingModal"
import Tabs from "../components/profileComponents/Tabs"
import { useDispatch, useSelector } from "react-redux";
import { getUserFromDatabase } from "../firebase/config";
import { setUserData } from "../redux/userSlice";
import userImg from "../assets/user_img.jpg"

export default function Profile() {
    const userData = useSelector(state => state.user.userData);
    const [editModal, setEditModal] = useState(false)
    const [settingsModal, setSettingsModal] = useState(false)
    const[isProfileUpdated,setIsProfileUpdated]=useState(false)
    const dispatch=useDispatch()
    console.log("isProfileUpdated",isProfileUpdated)
  //FETCH USERDATA FROM FIREBASE
  const fetchdata = async (email) => {
    const userDetaill = await getUserFromDatabase(email)
    dispatch(setUserData(userDetaill))
  }

useEffect(()=>{
    if(userData?.email){
    fetchdata(userData?.email)
    }
},[isProfileUpdated])

    function edModal() {
        setEditModal(true)
    }

    function closeEditModal() {
        setEditModal(false)
    }

    function settModal() {
        setSettingsModal(true)
    }

    function closeSettModal() {
        setSettingsModal(false)
    }

    return (
        <div className="mb-4">
            <div id="profile" className="flex flex-col gap-8 mt-8 max-md:m-4" style={{ opacity: editModal || settingsModal ? 0.3 : 1 }}>
                <div className="md:flex md:bg-[#DBEAED] md:flex-row md:gap-4 md:h-[120px] md:items-center md:mt-auto md:justify-center">
                    <div className="flex flex-row gap-4 max-md:shadow-profile max-md:rounded-t-none max-md:rounded-3xl max-md:justify-center max-md:flex max-md:flex-col max-md:items-center max-md:bg-white basis-1/2">
                        <img style={{width:"60px",height:"60px",borderRadius:"50%"}} src={userData?.image||userImg} alt="profile" />
                        <div className="md:flex md:flex-col md:text-white">
                            <div className="text-black max-md:text-center"><span>{userData?.name}</span></div>
                            <div className="flex flex-row gap-2 text-black">
                                <span>{userData?.phone}</span>
                                <span>{userData?.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8 max-md:hidden">
                        <button onClick={edModal} className="bg-white rounded-lg w-[161px] h-[50px]">
                            <div className="flex flex-row items-center justify-center gap-2">
                                <img src="edit.png" alt="edit" />
                                <span className="font-nav font-normal text-base leading-[24px] text-[#474747]">Edit Profile</span>
                            </div>
                        </button>
                        <button onClick={settModal} className="bg-white rounded-lg w-[161px] h-[50px]">
                            <div className="flex flex-row items-center justify-center gap-2">
                                <img src="setting-2.png" alt="setting" />
                                <span className="font-nav font-normal text-base leading-[24px] text-[#474747]">Settings</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="md:flex md:flex-row md:gap-6 md:justify-center">
                    <div className="flex flex-col max-md:rounded-2xl max-md:shadow-optionCard max-md:gap-2 max-md:justify-center max-md:items-center md:gap-6">
                        <div className="md:hidden flex w-[333px] max-md:justify-center max-md:gap-4  max-md:items-start max-md:p-4 max-md:border-b-2 flex-col  max-md:border-solid max-md-border-[#909090] justify-center md:gap-4 md:p-3 md:border md:border-solid md:border-[#E1E1E1] md:rounded-md">
                            <button onClick={edModal} className="flex flex-row gap-1"><img src="edit.png" alt="edit" />
                                <span className="font-nav font-normal text-base leading-[24px] text-[#474747]">Edit profile</span>
                            </button>
                            <button onClick={settModal} className="flex flex-row gap-1"><img src="setting-2.png" alt="setting" />
                                <span className="font-nav font-normal text-base leading-[24px] text-[#474747]">Settings</span>
                            </button>
                        </div>
                        <Tabs/>
                    </div>
                    <div className="border rounded-lg max-md:hidden basis-1/2">
                        <span>Your Orders</span>
                    </div>
                </div>
            </div>
            <EditModal
                open={editModal}
                close={closeEditModal}
                setIsProfileUpdated={setIsProfileUpdated}
            />
            <SettingModal
                open={settingsModal}
                close={closeSettModal}
            />
        </div>
    )
}
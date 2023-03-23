import { useState } from "react"
import EditModal from "../components/modals/EditModal"
import SettingModal from "../components/modals/SettingModal"

export default function Profile() {

    const [editModal,setEditModal] = useState(false)
    const [settingsModal,setSettingsModal] = useState(false)

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
        <div className="flex flex-col gap-8 mt-8 max-md:m-4">
            <div className="md:flex md:bg-[#F59428] md:flex-row md:gap-4 md:h-[120px] md:items-center md:mt-auto md:justify-center">
                <div className="flex flex-row gap-4 max-md:shadow-profile max-md:rounded-t-none max-md:rounded-3xl max-md:justify-center max-md:flex max-md:flex-col max-md:items-center max-md:bg-white basis-1/2"> 
                    <img src="Profile.png" alt="profile" />
                    <div className="md:flex md:flex-col md:text-white">
                        <div className="max-md:text-center"><span>Aman Gupta</span></div>
                        <div className="flex flex-row gap-2">
                            <span>7189456329</span>
                            <span>abcd12@gmail.com</span>
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
                    <div className="flex w-[333px] max-md:justify-center max-md:gap-4 max-md:items-start max-md:border-b-2 max-md:p-4 max-md:border-solid max-md-border-[#909090] flex-col justify-center md:gap-4 md:p-3 md:border md:border-solid md:border-[#E1E1E1] md:rounded-md">
                        <span className="max-md:font-semibold max-md:text-base">Food Orders</span>
                        <div className="flex flex-row gap-1"><img src="document-text.png" alt="your orders"/><span>Your orders</span></div>
                        <div className="flex flex-row gap-1"><img src="document-favorite.png" alt="your orders"/><span>Favorite Order</span></div>
                        <div className="flex flex-row gap-1"><img src="clipboard-text.png" alt="your orders"/><span>Address book</span></div>
                    </div>                    
                    <div className="flex w-[333px] max-md:justify-center max-md:gap-4  max-md:items-start max-md:border-b-2 max-md:p-4 max-md:border-solid max-md-border-[#909090] flex-col justify-center md:gap-4 md:p-3 md:border md:border-solid md:border-[#E1E1E1] md:rounded-md">
                        <span className="max-md:font-semibold max-md:text-base">Skitch Wallet</span>
                        <div className="flex flex-row gap-1"><img src="dollar-circle.png" alt="your orders"/><span>Your Coins</span></div>
                    </div>                    
                    <div className="flex w-[333px] max-md:justify-center max-md:gap-4 max-md:items-start max-md:border-b-2 max-md:p-4 max-md:border-solid max-md-border-[#909090] flex-col justify-center md:gap-4 md:p-3 md:border md:border-solid md:border-[#E1E1E1] md:rounded-md">
                        <span className="max-md:font-semibold max-md:text-base">More</span>
                        <div className="flex flex-row gap-1"><img src="About.png" alt="your orders"/><span>About</span></div>
                        <div className="flex flex-row gap-1"><img src="Feedback.png" alt="your orders"/><span>Send Feedback</span></div>
                        <div className="flex flex-row gap-1"><img src="report.png" alt="your orders"/><span>Report a safety emergency</span></div>
                    </div>
                    <div className="md:border max-md:border-b-2 max-md:p-2 max-md:border-solid max-md-border-[#909090] md:border-solid md:border-[#E1E1E1] md:rounded-lg md:w-[142px] md:h-[50px] md:text-center">
                        <div className="flex md:w-[142px] max-md:justify-start max-md:gap-4 max-md:items-start md:h-[50px] md:items-center md:justify-center flex-row gap-1"><img src="log_out.png" alt="your orders"/><span>Log out</span></div>
                    </div>
                </div>
                <div className="border rounded-lg max-md:hidden basis-1/2">
                    <span>Your Orders</span>
                </div>
            </div>
            <EditModal 
                open={editModal}
                close={closeEditModal}
            />
            <SettingModal 
                open={settingsModal}
                close={closeSettModal}
            />
        </div>
    )
}
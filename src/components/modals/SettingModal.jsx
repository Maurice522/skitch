import { useState } from "react"
import AccountModal from "./AccountModal"
import NotificationModal from "./Notifications"

export default function SettingModal(props) {

    const [notificationModal, setNotificationModal] = useState(false)
    const [accountModal, setAccountModal] = useState(false)

    function notification() {
        setNotificationModal(!notificationModal)
    }

    function account() {
        setAccountModal(!accountModal)
    }

    let id = document.getElementById("profile");
    id?.addEventListener('click', props.close)

    return (
        <div className={props.open ? "visible overflow-auto transition delay-300 ease-linear fixed top-0 right-0 bg-white p-4 h-screen w-[50%] lg:w-[35%] m-auto flex z-50 flex-col gap-4" : "hidden"}>
            <button className="w-full p-6 text-black" onClick={() => { props.close() }}>
                <div className="flex flex-row gap-4"><img src="left_arrow.png" alt="left" /><span>Settings</span></div>
            </button>
            <div className="flex flex-col gap-4 m-4 mt-5 text-black">
                <button onClick={notification} className="flex flex-row  p-2 rounded-2xl shadow-editCard h-[52px]">
                    <span>Notification</span>
                    <span className="m-auto mr-0"><img src="dropdown.png" alt="dropdown" /></span>
                </button>
                <button onClick={account} className="flex flex-row  p-2 rounded-2xl shadow-editCard h-[52px]">
                    <span>Account</span>
                    <button className="m-auto mr-0"><img src="dropdown.png" alt="dropdown" /></button>
                </button>
            </div>
            <NotificationModal
                open={notificationModal}
                close={notification}
            />
            <AccountModal
                open={accountModal}
                close={account}
            />
        </div>
    )
}
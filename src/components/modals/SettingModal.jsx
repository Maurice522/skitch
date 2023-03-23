import { useState } from "react"
import AccountModal from "./AccountModal"
import NotificationModal from "./Notifications"

export default function SettingModal(props) {

    const [notificationModal,setNotificationModal] = useState(false)
    const [accountModal,setAccountModal] = useState(false)

    function notification() {
        setNotificationModal(!notificationModal)
    }

    function account() {
        setAccountModal(!accountModal)
    }

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
                <div className="flex flex-row gap-4"><img src="left_arrow.png" alt="left" /><span>Settings</span></div>
            </button>
            <div className="flex flex-col gap-4 m-4 mt-5 text-black">
                <button onClick={notification} className="flex flex-row  p-2 rounded-2xl shadow-editCard h-[52px]">
                    <span>Notification</span>
                    <span className="ml-auto"><img src="dropdown.png" alt="dropdown" /></span>
                </button>                
                <button onClick={account} className="flex flex-row  p-2 rounded-2xl shadow-editCard h-[52px]">
                    <span>Account</span>
                    <button className="ml-auto"><img src="dropdown.png" alt="dropdown" /></button>
                </button>
            </div>
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
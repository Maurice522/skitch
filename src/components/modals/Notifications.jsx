import ReactSwitch from 'react-switch';

export default function NotificationModal(props) {
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
                    <div className="flex flex-row gap-4"><img src="left_arrow.png" alt="left" /><span>Notifications</span></div>
                </button>
                <div className="flex flex-col gap-4 m-4 text-black">
                    <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[80px]">
                        <span className='text-base font-normal font-nav'>Active All</span>
                        <div className="flex flex-row">
                            <span className='text-xs'>Enable all Notifications</span>
                            <ReactSwitch className='ml-auto'/>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-2xl shadow-editCard'>
                        <div className='flex flex-col'>
                            <span className='text-base font-normal font-nav'>Offers</span>
                            <span className='text-xs'>Get Offers and Sale related updates</span>
                        </div>
                        <div className='flex flex-row mt-8 text-center'>
                            <span className='text-sm'>Email</span>
                            <ReactSwitch className='ml-auto'/>
                        </div>                        
                        <div className='flex flex-row mt-8 text-center'>
                            <span className='text-sm'>Whatsapp</span>
                            <ReactSwitch className='ml-auto'/>
                        </div>
                    </div>                    
                    <div className='flex flex-col p-2 rounded-2xl shadow-editCard'>
                        <div className='flex flex-col'>
                            <span className='text-base font-normal font-nav'>Orders</span>
                            <span className='text-xs'>Get Orders related updates</span>
                        </div>
                        <div className='flex flex-row mt-8 text-center'>
                            <span className='text-sm'>Email</span>
                            <ReactSwitch className='ml-auto'/>
                        </div>                        
                        <div className='flex flex-row mt-8 text-center'>
                            <span className='text-sm'>Whatsapp</span>
                            <ReactSwitch className='ml-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
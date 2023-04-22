import Toggle from 'react-toggle';

export default function NotificationModal(props) {
    return (
        <div className={props.open ? "visible max-md:w-[100%] overflow-auto transition delay-300 ease-linear fixed top-0 right-0 bg-white p-4 h-screen w-[50%] lg:w-[35%] m-auto flex z-50 flex-col gap-4" : "hidden"}>
            <button className="w-full p-6 text-black" onClick={() => { props.close() }}>
                <div className="flex flex-row items-center gap-4"><img src="left_arrow.png" className='w-3 h-3' alt="left" /><span>Notifications</span></div>
            </button>
            <div className="flex flex-col gap-4 m-4 text-black">
                <div className="flex flex-col p-2 rounded-2xl shadow-editCard h-[80px]">
                    <span className='text-base font-normal font-nav'>Active All</span>
                    <div className="flex flex-row">
                        <span className='text-xs'>Enable all Notifications</span>
                        <Toggle className='ml-auto' />
                    </div>
                </div>
                <div className='flex flex-col p-2 rounded-2xl shadow-editCard'>
                    <div className='flex flex-col'>
                        <span className='text-base font-normal font-nav'>Offers</span>
                        <span className='text-xs'>Get Offers and Sale related updates</span>
                    </div>
                    <div className='flex flex-row mt-8 text-center'>
                        <span className='text-sm'>Email</span>
                        <Toggle className='ml-auto' />
                    </div>
                    <div className='flex flex-row mt-8 text-center'>
                        <span className='text-sm'>Whatsapp</span>
                        <Toggle className='ml-auto' />
                    </div>
                </div>
                <div className='flex flex-col p-2 rounded-2xl shadow-editCard'>
                    <div className='flex flex-col'>
                        <span className='text-base font-normal font-nav'>Orders</span>
                        <span className='text-xs'>Get Orders related updates</span>
                    </div>
                    <div className='flex flex-row mt-8 text-center'>
                        <span className='text-sm'>Email</span>
                        <Toggle className='ml-auto' />
                    </div>
                    <div className='flex flex-row mt-8 text-center'>
                        <span className='text-sm'>Whatsapp</span>
                        <Toggle className='ml-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}
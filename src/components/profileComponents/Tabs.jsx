export default function Tabs() {
    return (
        <>
            <div className="flex w-[333px] max-md:justify-center max-md:gap-4 max-md:items-start max-md:border-b-2 max-md:p-4 max-md:border-solid max-md-border-[#909090] flex-col justify-center md:gap-4 md:p-3 md:border md:border-solid md:border-[#E1E1E1] md:rounded-md">
                <span className="max-md:font-semibold max-md:text-base">Food Orders</span>
                <div className="flex flex-row gap-1"><img src="document-text.png" alt="your orders" /><span>Your orders</span></div>
                <div className="flex flex-row gap-1"><img src="document-favorite.png" alt="your orders" /><span>Favorite Order</span></div>
                <div className="flex flex-row gap-1"><img src="clipboard-text.png" alt="your orders" /><span>Address book</span></div>
            </div>
            <div className="flex w-[333px] max-md:justify-center max-md:gap-4  max-md:items-start max-md:border-b-2 max-md:p-4 max-md:border-solid max-md-border-[#909090] flex-col justify-center md:gap-4 md:p-3 md:border md:border-solid md:border-[#E1E1E1] md:rounded-md">
                <span className="max-md:font-semibold max-md:text-base">Skitch Wallet</span>
                <div className="flex flex-row gap-1"><img src="dollar-circle.png" alt="your orders" /><span>Your Coins</span></div>
            </div>
            <div className="flex w-[333px] max-md:justify-center max-md:gap-4 max-md:items-start max-md:border-b-2 max-md:p-4 max-md:border-solid max-md-border-[#909090] flex-col justify-center md:gap-4 md:p-3 md:border md:border-solid md:border-[#E1E1E1] md:rounded-md">
                <span className="max-md:font-semibold max-md:text-base">More</span>
                <div className="flex flex-row gap-1"><img src="About.png" alt="your orders" /><span>About</span></div>
                <div className="flex flex-row gap-1"><img src="Feedback.png" alt="your orders" /><span>Send Feedback</span></div>
                <div className="flex flex-row gap-1"><img src="report.png" alt="your orders" /><span>Report a safety emergency</span></div>
            </div>
            <div className="md:border max-md:border-b-2 max-md:p-2 max-md:border-solid max-md-border-[#909090] md:border-solid md:border-[#E1E1E1] md:rounded-lg md:w-[142px] md:h-[50px] md:text-center">
                <div className="flex md:w-[142px] max-md:justify-start max-md:gap-4 max-md:items-start md:h-[50px] md:items-center md:justify-center flex-row gap-1"><img src="log_out.png" alt="your orders" /><span>Log out</span></div>
            </div>
        </>
    )
}
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 py-4 mt-4 bg-black lg:absolute hover:cursor-default">                        
            <div className="relative flex flex-col self-start gap-4 top-4">
                <img src="favicon.ico" className="self-center px-16"/>
                <span className="font-nav px-16 w-fit italic text-transparent text-white font-bold max-md:leading-[22px] leading-[24px] text-2xl max-md:text-xl">SKITCH</span>            
            </div>
            <div className="flex flex-col gap-8 max-md:px-16 max-md:self-start md:gap-40 md:flex-row">
                <div className="flex flex-col gap-4">
                    <span className="text-[#fdb602] text-xl font-normal">Company</span>
                    <Link to={"/about"} className="text-lg font-normal text-[#999]">About Us</Link>                    
                    <span className="text-lg font-normal text-[#999]">Blog</span>                    
                    <a href="mailto:Connect@skitch.in" className="text-lg font-normal text-[#999]">Contact Us</a>                    
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-[#fdb602] text-xl font-normal">For You</span>
                    <Link to={"/privacypolicy"} className="text-lg font-normal text-[#999]">Privacy</Link>                    
                    <Link to={"/termsandcondition"} className="text-lg font-normal text-[#999]">Terms</Link>                    
                    <Link to={"/refundpolicy"} className="text-lg font-normal text-[#999]">Refund</Link>                    
                </div>
                <div className="flex flex-col gap-4">
                    <Link to={"/contactus"} className="text-[#fdb602] text-xl font-normal" style={{cursor:"pointer"}}>Contact Us</Link>  
                    <span className="text-lg font-normal text-[#999]">📍 Sector-13 rohini Delhi-110085</span>                                                      
                    <span className="text-lg font-normal text-[#999]">📱 +91 7042517208</span>                                                      
                    <a href="mailto:Connect@skitch.in" className="text-lg font-normal text-[#999]">✉️ connect@skitch.in</a>                    
                </div>
            </div>
            <span className="text-[#999] px-16 text-lg font-normal">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.</span>
            <span className="text-[#999] text-lg font-normal">SKITCH Technology. All rights reserved.</span>
        </div>
    )
}
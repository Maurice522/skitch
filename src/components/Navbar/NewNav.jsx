import { useState } from "react"
import LogInModal from "../modals/LogInModal"
import SignUpModal from "../modals/SignUpModal"
import { Route, Link } from "react-router-dom"

export default function NewNav() {

    const [logIn, openLogIn] = useState(false)
    const [signUp, openSignUp] = useState(false)


    function login() {
        openLogIn(true)
    }

    function loginClose() {
        openLogIn(false)
    }

    function signup() {
        openSignUp(true)
    }    
    
    function signupClose() {
        openSignUp(false)
    }

    function openSignup() {
        openLogIn(false)
        openSignUp(true)
    }


    return (
        <div id="nav" className="overflow-x-hidden border border-solid shadow-new-nav">
            <nav className="w-screen">
                <div className="flex max-lg:hidden flex-row bg-white max-md:h-[47px] h-[80px] shadow-nav items-center text-center">
                    <div className="flex flex-row items-center">
                        <Link to={"/"} className="font-nav italic text-transparent max-md:w-[80px] max-md:h-[20px] w-[156px] h-[28px] bg-clip-text font-bold max-md:leading-[22px] leading-[24px] bg-gradient-to-b from-[#DC3535] to-[#F59428] text-2xl max-md:text-xl"><span>SKITCH</span>                    </Link>
                        <div className="flex flex-col text-left">
                        <span>Address</span>
                        <span>Sector 126, Noida</span>
                    </div>
                    </div>
                    <div className="flex flex-row items-center ml-auto mr-6 sm:gap-6">
                        {/* <button onClick={login} className="border border-solid sm:ml-auto border-[#F59428] font-nav font-medium text-base leading-5 rounded-md sm:p-2 w-[122px]">Log In</button>
                        <button onClick={signup} className="border border-solid border-[#F59428] sm:mr-5  font-nav font-medium text-base leading-5 rounded-md sm:p-2 w-[122px]">Sign Up</button> */}
                        <Link to={"/"}>
                            <button className="flex gap-2 flex-row text-base leading-[22px]"><img src="delivery.png" alt="delivery"/>Delivery</button>
                        </Link>
                        <Link to={"/restaurant"}>
                            <button className="flex flex-row gap-2 text-base leading-[22px]"><img src="dining.png" alt="delivery"/>Dining</button>
                        </Link>
                        <button className="flex flex-row text-base gap-2 leading-[22px]"><img src="wallet.png" alt="delivery"/>Wallet</button>
                        <Link to={"/cart"}>
                            <button className="flex flex-row text-base gap-2 leading-[22px]"><img src="cart.png" alt="delivery"/>Cart</button>                        
                        </Link>
                        <Link to={"/profile"}>
                            <img src="profile.png" alt="profile" className=""/>
                        </Link>
                    </div>
                </div>
                <div className="flex p-2 flex-row gap-4 lg:hidden bg-white max-md:h-[47px] h-[103px] shadow-nav items-center text-center">
                    <img src="location.png" alt="location" />
                    <div className="flex flex-col text-left">
                        <span>Home</span>
                        <span>Sector 126, Noida</span>
                    </div>
                    <img src="dropdown.png" alt="dropdown" />
                    <div className="float-right ml-auto">
                        <img src="profile.png" alt="profile" />
                    </div>
                </div>
            </nav>
            <LogInModal
                open={logIn}
                close={loginClose}
                closenopenSignUp={openSignup}
            />
            <SignUpModal
                open={signUp}
                close={signupClose}
            />
        </div>
    )
}
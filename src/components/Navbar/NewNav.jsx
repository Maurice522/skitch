import { useState } from "react"
import LogInModal from "../modals/LogInModal"
import SignUpModal from "../modals/SignUpModal"

export default function NewNav() {

    const [logIn, openLogIn] = useState(false)
    const [signUp, openSignUp] = useState(false)


    function login() {
        openLogIn(!logIn)
    }

    function signup() {
        openSignUp(!signUp)
    }

    function openSignup() {
        openLogIn(!logIn)
        openSignUp(true)
    }


    return (
        <div className="overflow-x-hidden border border-solid shadow-new-nav">
            <nav className="w-screen">
                <div className="flex max-lg:hidden flex-row bg-white max-md:h-[47px] h-[80px] shadow-nav items-center text-center">
                    <span className="font-nav italic text-transparent max-md:w-[80px] max-md:h-[20px] w-[156px] h-[28px] bg-clip-text font-bold max-md:leading-[22px] leading-[24px] bg-gradient-to-b from-[#DC3535] to-[#F59428] text-2xl max-md:text-xl">SKITCH</span>
                    <div className="flex flex-row ml-auto mr-12 sm:gap-3 basis-1/2">
                        <button onClick={login} className="border border-solid sm:ml-auto border-[#F59428] font-nav font-medium text-base leading-5 rounded-md sm:p-2 w-[122px]">Log In</button>
                        <button onClick={signup} className="border border-solid border-[#F59428] sm:mr-5  font-nav font-medium text-base leading-5 rounded-md sm:p-2 w-[122px]">Sign Up</button>
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
                close={login}
                closenopenSignUp={openSignup}
            />
            <SignUpModal
                open={signUp}
                close={signup}
            />
        </div>
    )
}
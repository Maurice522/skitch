import {useState } from "react"
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






    return (
        <div className="overflow-x-hidden">
            <nav className="w-screen">
                <div className="flex flex-row bg-white max-md:h-[47px] h-[103px] shadow-nav items-center text-center">
                    <span className="font-nav italic text-transparent max-md:w-[80px] max-md:h-[20px] w-[156px] h-[28px] bg-clip-text font-bold max-md:leading-[22px] leading-[24px] bg-gradient-to-b from-[#DC3535] to-[#F59428] text-4xl max-md:text-xl">SKITCH</span>
                    <div className="flex flex-row sm:gap-3 sm:ml-auto basis-1/2">
                        <button onClick={login} className="border border-solid justify-self-end sm:ml-auto border-[#F59428] font-nav font-medium text-base leading-5 rounded-md sm:p-4 w-[122px]">Log In</button>
                        <button onClick={signup} className="border border-solid border-[#F59428] sm:mr-5 justify-self-end font-nav font-medium text-base leading-5 rounded-md sm:p-4 w-[122px]">Sign Up</button>
                    </div>
                </div>
            </nav>
            <LogInModal
                open={logIn}
                close={login}
            />
            <SignUpModal 
                open={signUp}
                close={signup}
            />
        </div>
    )
}
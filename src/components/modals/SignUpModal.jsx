// import PhoneInput from 'react-phone-input-2';

export default function SignUpModal(props) {

    // const phoneInputField = document.getElementById('phone')
    // const phoneInput = window.intlTelInput(phoneInputField, {
    //     utilsScript:
    //         "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    // });

    return (
        <div style={{
            visibility: props.open ? "visible" : "hidden",
            pointerEvents: "none",
            zIndex: "99"
        }}
            className="fixed top-0 left-0 w-[100%] min-h-screen backdrop-brightness-50">
            <div
                className="fixed flex flex-col w-11/12 max-w-xl overflow-y-auto bg-white"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    pointerEvents: "all",
                    height: "90vh",
                }}
            >
                <div className="relative w-[70%] max-sm:left-0 left-[5%] flex flex-row px-5 py-4 md:px-8 rounded-t-3xl">
                    <div className="relative text-left text-black basis-1/2">
                        Sign Up
                    </div>
                    <div
                        className="relative hover:cursor-pointer left-[80%]"
                        onClick={props.close}
                    >
                        <img src="./+.png" alt="close" />
                    </div>
                </div>
                <div>
                    <form>
                        <input
                            className="relative h-[50px] top-[10px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:leading-6 placeholder:text-[#808080] bg-[#F3F3F3] max-sm:left-0 left-[10%] max-sm:w-[100%] w-[80%] placeholder:relative placeholder:left-[26px]"
                            id="full_name"
                            name="full_name"
                            type="text"
                            onChange={onchange}
                            placeholder='Full Name'
                        /><br></br>
                        <input
                            className="relative h-[50px] top-[20px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-[#808080] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                            id="phone"
                            name="phone"
                            type="tel"
                            onChange={onchange}
                            placeholder='Phone Number'
                        />
                        <br></br>
                        <input
                            className="relative h-[50px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-[#808080] top-[30px] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                            id="email"
                            name="email"
                            type="email"
                            onChange={onchange}
                            placeholder='Email'
                        />
                        <br></br>
                        <div className="relative max-sm:left-1 overflow-hidden w-[80%] flex flex-row gap-4 leading-5 font-nav font-normal left-[10%] top-[50px]">
                            <input
                                className="h-[24px] placeholder:font-normal placeholder:font-nav placeholder:text-base top-[55px] bg-[#F3F3F3] text-black"
                                id="terms"
                                type={"checkbox"}
                                value={"By creating an account, I accept the Terms & Conditions & Privacy Policy"}
                            />
                            <label className="" for={"terms"}>By creating an account, I accept the Terms & Conditions & Privacy Policy</label>
                        </div>
                        <button className="relative top-[65px] max-sm:left-[60%] text-[#808080] w-[109px] h-[46px] left-[70%] bg-[#F3F3F3] border font-nav font-normal text-base border-solid border-[#E1E1E1]">Next</button>
                    </form>
                </div>
                <div className="flex flex-row gap-2 h-11 overflow-x-hidden overflow-y-hidden w-[80%] max-sm:left-1 relative left-[10%] top-20">
                    <div className="h-0 border w-[210px]"></div>
                    <span className="relative h-2 text-base -top-[6px]">or</span>
                    <div className="h-0 border w-[210px]"></div>
                </div>
                <button className="relative p-3 max-sm:top-24 max-sm:left-1 top-20 left-[22%] w-[280px] border border-solid rounded-md border-[#E1E1E1]">
                    <div className="flex flex-row justify-center gap-2">
                        <img alt="" src="./google.jpg"/>
                        <span>Continue with Google</span>
                    </div>                    
                </button>
                <div className="relative overflow-hidden max-sm:w-[85%] max-sm:top-28 w-[70%] max-sm:left-1 top-24 left-[22%]">
                    <span>Already have an account? </span>
                    <a href="/" className="text-[#DC3535]">Log in</a>
                </div>
            </div>
        </div>
    )
}
export default function OtpModal(props) {
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
                        Enter OTP
                    </div>
                    <div
                        className="relative hover:cursor-pointer left-[80%]"
                    // onClick={props.close}
                    >
                        <img src="./+.png" alt="close" />
                    </div>
                </div>
                <div>
                    <form>
                        <input
                            className="relative h-[50px] top-[20px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-[#808080] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                            id="phone"
                            name="phone"
                            type="tel"
                            onChange={onchange}
                            defaultValue={props.num}
                        // placeholder='Phone Number'
                        />
                        <input
                            className="relative h-[50px] top-[30px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-center placeholder:text-[#808080] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                            id="phone"
                            name="phone"
                            type="tel"
                            onChange={onchange}
                            placeholder='One Time Password'
                        />
                        <br></br>
                        <button className="relative text-white top-[65px] max-sm:left-1 w-[80%] h-[46px] left-[10%] bg-[#F59428] border font-nav font-normal text-base border-solid border-[#E1E1E1]">Verify OTP</button>
                    </form>
                </div>
                <div className="flex flex-col relative top-[25%]">
                    <div className="flex flex-row gap-2 w-[80%] max-sm:left-1 relative left-[10%] top-[90px]">
                        <div className="h-0 border w-[210px]"></div>
                        <span className="relative h-2 -top-3">or</span>
                        <div className="h-0 border w-[210px]"></div>
                    </div>
                    <button className="relative p-3 max-sm:top-24 max-sm:left-1 top-24 left-[10%] w-[80%] border border-solid rounded-md border-[#E1E1E1]">
                        <div className="flex flex-row justify-center gap-2">
                            <img alt="" src="./google.jpg" />
                            <span>Continue with Google</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
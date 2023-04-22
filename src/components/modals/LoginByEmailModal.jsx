
export default function LoginByEmail(props) {

   const handleInputChange=(e)=>{
const{name,value}=e.target
props.setData((prev)=>{
    return {...prev,[name]:value}
})
   } 
    return (
        <>
         
        
        <div style={{
            pointerEvents: "none",
            zIndex: "100000",
            display: props.open ? "block" : "none",
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
                <div className="relative m-4 max-md:left-0 w-[70%] max-sm:left-0 left-[5%] flex flex-row px-5 py-4 md:px-8 rounded-t-3xl">
                    <div className="relative text-left text-black basis-1/2">
                        Log in
                    </div>
                    <div
                        className="relative hover:cursor-pointer left-[80%]"
                        onClick={props.close}
                    >
                        <img src="./+.png" alt="close" />
                    </div>
                </div>
                <div className='max-md:px-4'>
                    <form onSubmit={props.handleLogin}>
                        <input
                            className="relative h-[50px] top-[20px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-[#808080] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                            id="email"
                            name="email"
                            type="email"
                            onChange={handleInputChange}
                            placeholder='Email'
                            value={props.data.email}
                            required
                        />                        
                        <input
                            className="relative h-[50px] top-[35px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-[#808080] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                            id="password"
                            name="pass"
                            type="password"
                            onChange={handleInputChange}
                            placeholder='Password'
                            value={props.data.pass}
                            required
                        />
                        <br></br>
                        <button disabled={props.loading} type="submit" className="relative max-md:w-[100%] text-white top-[65px] max-sm:left-1 w-[80%] h-[46px] left-[10%] bg-[#F59428] border font-nav font-normal text-base border-solid border-[#E1E1E1]">Submit</button>
                    </form>
                </div>
                <div className="relative max-md:p-4 overflow-x-hidden max-sm:w-[85%] max-sm:top-28 w-[70%] max-sm:left-1 top-[35%] left-[10%]">
                    <span>New to Skitch? </span>
                    <a href="/" className="text-[#DC3535]">Create Account</a>
                </div>
            </div>
        </div>
        </>
    )
}
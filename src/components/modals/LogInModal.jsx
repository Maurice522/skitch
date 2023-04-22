import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebase/config';
import { login, logout } from '../../redux/userSlice'; 
import OtpModal from '../modals/OtpModal'
import LoginByEmail from './LoginByEmailModal';


export default function LogInModal(props) {
    const provider = new GoogleAuthProvider();
    const[loading,setLoading]=useState(false)
    const[data,setData]=useState({email:"",pass:""})
    const dispatch=useDispatch()
    const [phone,setPhone] = useState("")
    const [otpModal,setOtpModal] = useState(false)
    const [emailModal,setEmailModal] = useState(false)

 //HANDLE LOGIN
 const handleLogin=async(e)=>{
    e.preventDefault();
    setLoading(true)
    signInWithEmailAndPassword(auth, data.email, data.pass)

      .then(() => {
        toast.success("Sucessfully logged in");
        setLoading(false)
        setEmailModal(false)
        // navigate("/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setEmailModal(false)
        setLoading(false)
      });
    }

//CHECK IF USER IS ALREADY LOGGED IN
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            login({
              email: auth.currentUser.email,
              uid: auth.currentUser.uid,
              displayName: auth.currentUser.displayName,
              photoURL: auth.currentUser.photoURL,
            })
          )
        //   navigate("/dashboard")
        } else {
          dispatch(logout());
        }
      });
    }, []);

    function onchange(e) {
      setPhone(e.target.value)
    }

    let id = document.getElementById("main");
    props.open ? id?.addEventListener("click",props.close) : id?.removeEventListener("click",props.close)

//SIGIN USING GOOGLE AUTH
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then(async (userCredential) => {
            dispatch(
              login({
                email: auth.currentUser.email,
                uid: auth.currentUser.uid,
                displayName: auth.currentUser.displayName,
                profilePic: auth.currentUser.photoURL,
              })
            );
          })
          .catch((error) => {
            alert(error);
          });
      };

      function signInWithEmail(e) {
        e.preventDefault();
        setEmailModal(!emailModal)
      }

    return (
        <>
        <OtpModal 
          open={otpModal}
          num={phone}
        />
        <LoginByEmail 
          open={emailModal}
          setData={setData}
          data={data}
          close={signInWithEmail}
          handleLogin={handleLogin}
          loading={loading}
        />
        <div style={{
            pointerEvents: "none",
            zIndex: "99",
            display: props.open ? "block" : "none",
        }}
            className="fixed top-0 left-0 w-[100%] min-h-screen backdrop-brightness-50">
            
            <div
                className="fixed flex flex-col w-11/12 max-w-xl overflow-x-hidden overflow-y-auto bg-white"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    pointerEvents: "all",
                    height: "90vh",
                }}
            >
                <div className="relative m-4 max-md:left-0 w-[70%] max-sm:left-0 left-[2%] flex flex-row px-5 py-4 md:px-8 rounded-t-3xl">
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
                    <form>
                        <input
                            className="relative h-[50px] top-[20px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-[#808080] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                            id="phone"
                            name="phone"
                            type="tel"
                            onChange={onchange}
                            placeholder='Phone Number'
                        />
                        <br></br>
                        <button onClick={()=> {setOtpModal(true)}} className="relative max-md:w-[100%] text-white top-[65px] max-sm:left-1 w-[80%] h-[46px] left-[10%] bg-[#F59428] border font-nav font-normal text-base border-solid border-[#E1E1E1]">Send one time password</button>
                    </form>
                </div>
                <div className="flex max-md:w-[100%] flex-row gap-2 w-[80%] max-sm:left-1 relative left-[10%] top-[90px]">
                    <div className="h-0 border w-[210px]"></div>
                    <span className="relative h-2 -top-3">or</span>
                    <div className="h-0 border w-[210px]"></div>
                </div>
                <button onClick={signInWithEmail} className="relative p-3 max-md:w-[90%] max-md:m-2 max-sm:top-24 max-sm:left-1 top-24 left-[10%] w-[80%] border border-solid rounded-md border-[#E1E1E1]">
                    <div className="flex flex-row justify-center gap-2">
                        <img alt="" src="./Email.jpg" />
                        <span>Continue with Email</span>
                    </div>
                </button>  
                <br></br>        
                <button className="relative max-md:w-[90%] max-md:m-2 p-3 max-sm:top-24 max-sm:left-1 top-24 left-[10%] w-[80%] border border-solid rounded-md border-[#E1E1E1]">
                    <div className="flex flex-row justify-center gap-2">
                        <img alt="" src="./google.jpg" />
                        <span onClick={signInWithGoogle}>Continue with Google</span>
                    </div>
                </button>
                <div className="relative max-md:p-4 overflow-x-hidden max-sm:w-[85%] max-sm:top-28 w-[70%] max-sm:left-1 top-[35%] left-[10%]">
                    <span>New to Skitch? </span>
                    <button onClick={props.closenopenSignUp} className="text-[#DC3535]">Create Account</button>
                </div>
            </div>
        </div>
        </>
    )
}
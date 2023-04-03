// import PhoneInput from 'react-phone-input-2';

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, createUserInDataBase } from "../../firebase/config";
import OtpModal from "../modals/OtpModal"
import { create } from '../../redux/newUserSlice';
import emailjs from "@emailjs/browser";
export default function SignUpModal(props) {
    const provider = new GoogleAuthProvider();
    const [formData, setFormdata] = useState({ full_name: "", phone: "", email: "", pass: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [openOtpModal,setOtpModal] = useState(false)
    const [generatedOtp,setGeneratedOtp]=useState("")
    const onchange = (e) => {
        const { name, value } = e.target
        setFormdata((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        if (formData.pass.length < 6) { toast.error("Password should be min 6 letters"); setLoading(false); return }
        setLoading(true)
        const otp=generateOtp(6)
        setGeneratedOtp(otp)

        var templateParams = {
            from_name: "Skitch",
            to_name: formData.full_name,
            to_email: formData.email,
            otp,
          };
          emailjs
          .send(
            "service_mj50638",
            "template_flszx49",
            templateParams,
            "sDjbCwaKw0ak8J9gO"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              setLoading(false)
            },
            function (error) {
              console.log("FAILED...", error);
              setLoading(false)
            }
          )
          .then(() => {
            setOtpModal(true);
          })
          .then(() => {
            toast.success("An OTP has been sent to your e-mail");
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
            setLoading(false)
          });

       
 
    }


    const signupUsingEmailNPass=async(e)=>{
        setLoading(true)
        toast("Sigining you up")
        let newUser
        
        newUser = {
        name:formData.full_name,
        email:formData.email,
        phone:formData.phone,
        password:formData.pass,
    }
    try {
            await createUserInDataBase(formData.email, newUser)
            await createUserWithEmailAndPassword(auth, formData.email, formData.pass)
            dispatch(create({ newUser }));
            setLoading(false)
            setFormdata({ full_name: "", phone: "", email: "", pass: "" })
            // navigate("/dashboard");
            toast.success("Successfully Registered")
        } catch (error) {
            setLoading(false)
            console.log(error);
            toast.error(error.message);
        }
    }
    function generateOtp(n) {
        var add = 1,
          max = 12 - add;
        if (n > max) {
          return generateOtp(max) + generateOtp(n - max);
        }
        max = Math.pow(10, n + add);
        var min = max / 10;
        var number = Math.floor(Math.random() * (max - min + 1)) + min;

        return ("" + number).substring(add);
      }

    function closeOtpModal() {
        setOtpModal(false)
    } 

    let id = document.getElementById("home");
    id?.addEventListener('click', props.close)
    console.log(document.getElementById("home"))

    const signInWithGoogle = async () => {
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                dispatch(
                    create({
                        email: auth.currentUser.email,
                        uid: auth.currentUser.uid,
                        displayName: auth.currentUser.displayName,
                        profilePic: auth.currentUser.photoURL,
                        loginType: "google",
                    })
                );
            }).then(() => {
                createUserInDataBase(auth.currentUser.email, {
                    name: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                    phone: "",
                    password: ""
                })
            }).then(() => {
                toast.success("Successfully Registered")
                // navigate("/dashboard")
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <>
            <ToastContainer />
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
                        <form onSubmit={handleSignup}>
                            <input
                                className="relative h-[50px] top-[10px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:leading-6 placeholder:text-[#808080] bg-[#F3F3F3] max-sm:left-0 left-[10%] max-sm:w-[100%] w-[80%] placeholder:relative placeholder:left-[26px]"
                                id="full_name"
                                name="full_name"
                                type="text"
                                onChange={onchange}
                                placeholder='Full Name'
                                value={formData.full_name}
                                required
                            /><br></br>
                            <input
                                className="relative h-[50px] top-[20px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-[#808080] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                                id="phone"
                                name="phone"
                                type="tel"
                                onChange={onchange}
                                placeholder='Phone Number'
                                value={formData.phone}
                                required
                            />
                            <br></br>
                            <input
                                className="relative h-[50px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-[#808080] top-[30px] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                                id="email"
                                name="email"
                                type="email"
                                onChange={onchange}
                                placeholder='Email'
                                value={formData.email}
                                required
                            />

                            <br></br>
                            <input style={{ marginTop: "1rem" }}
                                className="relative h-[50px] placeholder:font-normal placeholder:font-nav placeholder:text-base placeholder:text-[#808080] top-[30px] bg-[#F3F3F3] left-[10%] w-[80%] max-sm:w-[100%] max-sm:left-0 placeholder:relative placeholder:left-[26px]"
                                id="pass"
                                name="pass"
                                type="password"
                                onChange={onchange}
                                placeholder='Password'
                                value={formData.pass}
                                required
                            />


                            <br></br>
                            <div className="relative max-sm:left-1 overflow-hidden w-[80%] flex flex-row gap-4 leading-5 font-nav font-normal left-[10%] top-[50px]">
                                <input
                                    className="h-[24px] placeholder:font-normal placeholder:font-nav placeholder:text-base top-[55px] bg-[#F3F3F3] text-black"
                                    id="terms"
                                    type={"checkbox"}
                                    value={"By creating an account, I accept the Terms & Conditions & Privacy Policy"}
                                    required
                                />
                                <label className="" for={"terms"}>By creating an account, I accept the Terms & Conditions & Privacy Policy</label>
                            </div>
                            <button disabled={loading} type="submit" className="relative top-[65px] max-sm:left-[60%] text-[#808080] w-[109px] h-[46px] left-[70%] bg-[#F3F3F3] border font-nav font-normal text-base border-solid border-[#E1E1E1]">Next</button>
                            <OtpModal 
                                open={openOtpModal}
                                close={closeOtpModal}
                                generatedOtp={generatedOtp}
                                num={formData.email}
                                startSigningUp={signupUsingEmailNPass}
                                signinWithGoogle={signInWithGoogle}
                            />
                        </form>
                    </div>
                    <div className="flex flex-row gap-2 h-11 overflow-x-hidden overflow-y-hidden w-[80%] max-sm:left-1 relative left-[10%] top-20">
                        <div className="h-0 border w-[210px]"></div>
                        <span className="relative h-2 text-base -top-[6px]">or</span>
                        <div className="h-0 border w-[210px]"></div>
                    </div>
                    <button className="relative p-3 max-sm:top-24 max-sm:left-1 top-20 left-[22%] w-[280px] border border-solid rounded-md border-[#E1E1E1]">
                        <div className="flex flex-row justify-center gap-2">
                            <img alt="" src="./google.jpg" />
                            <span onClick={signInWithGoogle}>Continue with Google</span>
                        </div>
                    </button>
                    <div className="relative overflow-hidden max-sm:w-[85%] max-sm:top-28 w-[70%] max-sm:left-1 top-24 left-[22%]">
                        <span>Already have an account? </span>
                        <a href="/" className="text-[#DC3535]">Log in</a>
                    </div>
                </div>
            </div>
        </>
    )
}


import { useState,useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import styles from "./PaymentForCart.module.css"
import CashfreeDropInCont from "../Cashfree Dropin Container/CashfreeDropInCont"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PaymentForCart = ({userDocc,setPaymentModeOn,setPaymentMade,cart}) => {
    const[cartPrice,setCartPrice]=useState()
    const[sessionIdTokken,setSessionIdTokken]=useState(null)
 

    useEffect(()=>{
        let amt=0
        cart.map((item)=>{
            if(item.askedForHalf){amt=amt+(Number(item.half.price)*item.quantity)}
            else{amt=amt+(Number(item.price)*item.quantity)}
        })
        setCartPrice(amt+20+40)
    },[cart])

//GENERATE RANDOM UNIQUE ID
const uuid=()=>{
    const val1=Date.now().toString(36)
    const val2=Math.random().toString(36).substring(2)

    return val1+val2
}


const handlePaymentClick=async()=>{

if(userDocc?.phone===""||userDocc?.phone===undefined||userDocc?.phone===null){
    toast.error("Kindly Fill your Mobile Number Info in your Profile");return
}
if(userDocc?.phone.length!==10){toast.error("Invalid Number");return}

toast("Processing Your Request")
const bodyData={
 
    id:`order_${uuid()}`,
    amount:`${cartPrice}`,
    // amount:"1",
    currency:"INR",
    customer_id:uuid(),
    customer_phone:userDocc?.phone,
    
}

axios.post("http://localhost:8000/webcftoken",bodyData)
.then((res)=>{setSessionIdTokken(res.data.token)})
.catch((err)=>{toast.error(err.message)})
}




  return (
    <>
    <section className={styles.outerContainer}>
        <div className={styles.innerContainer}>
        <ToastContainer/>
       {sessionIdTokken!==null?<CashfreeDropInCont sessionIdTokken={sessionIdTokken} setSessionIdTokken={setSessionIdTokken} userDoc={userDocc} setPaymentModeOn={setPaymentModeOn} setPaymentMade={setPaymentMade}/>:null} 
{sessionIdTokken===null?<div className={styles.makePaymentContainer}>
<h1 className={styles.makePaymentContainerHeading}>Make Payment</h1>
<p className={styles.makePaymentContainerSubText}>User Name : <span className={styles.makePaymentContainerAmount}>{userDocc?.name}</span></p>
<p className={styles.makePaymentContainerSubText}>User Email : <span className={styles.makePaymentContainerAmount}>{userDocc?.email}</span></p>
<p className={styles.makePaymentContainerSubText}>User Mobile Number : <span className={styles.makePaymentContainerAmount}>{userDocc?.phone}</span></p>
<p className={styles.makePaymentContainerSubText}>Amount To Be Paid : <span className={styles.makePaymentContainerAmount}>₹ {cartPrice}</span></p>
<button className={styles.makePaymentContainerPayButton} onClick={handlePaymentClick}>Pay</button>
</div>:null}

        </div>
    </section>

    </>
    
  )
}

export default PaymentForCart
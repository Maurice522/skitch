
import { cashfreeSandbox, cashfreeProd } from 'cashfree-dropjs';
import { useState } from 'react';
import { dropinComponents } from './DropInComments';
import styles from "./CashfreeDropInCont.module.css"
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import axios from 'axios';
import { db } from '../../firebase/config';
import { useSelector } from 'react-redux';

function CashfreeDropInCont({sessionIdTokken,setSessionIdTokken,userDoc,setPaymentModeOn,setPaymentMade}) {
  const navigate=useNavigate()
  const [orderToken, setOrderToken] = useState(sessionIdTokken);
  const [orderDetails,setOrderDetails]=useState(null)
  const orderCartArray=useSelector((state)=>state.cart.menuCart)
  const restaurant=useSelector((state)=>state.cart.restraunt)
  // const user=useSelector((state)=>state.user)

  const [checkedState, setCheckedState] = useState(
    new Array(dropinComponents.length).fill(true)
  );
  const [style, setStyle] = useState({});
  const [isProd, setIsProd] = useState(false);
  const [components, setComponents] = useState(['order-details','card','upi','netbanking']);
  const cbs = (data) => {
    console.log(data,"sucess")
    setOrderDetails(data)
    // if (data.order && data.order.status === 'PAID') {
    //   alert('order is paid. Call api to verify');
    // }
  };
  const cbf = (data) => {
    // alert(data.order.errorText || 'ERROR');
    console.log(data,"errro data")
    setOrderDetails(data)
  };
  
  const renderDropin = () => {
    if (orderToken === '') {
      toast.error('Order Token is empty');
      return;
    }
    if (!components.length) {
      toast.error('No drop in specified');
      return;
    }
    let parent = document.getElementById('drop_in_container');
    parent.innerHTML = '';
    let cashfree;
    if (isProd) {
      cashfree = new cashfreeProd.Cashfree();
    } else {
      cashfree = new cashfreeSandbox.Cashfree();
    }
    
    cashfree.initialiseDropin(parent, {
      orderToken,
      onSuccess: cbs,
      onFailure: cbf,
      components,
      style
    });
 
  };

//GENERATE RANDOM UNIQUE ID
const uuid=()=>{
  const val1=Date.now().toString(36)
  const val2=Math.random().toString(36).substring(2)

  return val1+val2
}


//MAKE PAYMENT DROP DOWN 
useEffect(()=>{
  renderDropin()
},[])

//ACTION AFTER PAYMENT IS DONE OR FAILED
useEffect(()=>{
if(orderDetails===null){return}
const{order,transaction}=orderDetails
if(transaction===null){toast.error(order.errorText);return}
if(transaction.txStatus==="FAILED"){
  onFailedPayment(order,transaction)
  return;
}
if(transaction.txStatus==="SUCCESS"){
  onSuccessfulPayment(order,transaction)
}
},[orderDetails])


//ACTION PERFORM ON SUCESSFUL PAYMENT

const onSuccessfulPayment=async(order,transaction)=>{
  const newId=uuid()
  await setDoc(
    doc(db, "Payments", newId),{
orderAmount:transaction.transactionAmount,
orderId:order.orderId,
paymentMode:order.activePaymentMethod,
transactionId:transaction.transactionId,
txStatus:transaction.txStatus,
user:userDoc?.email,
referenceId:"",
signature:"",
txTime:""
    }).then(()=>{updateUserDatabase(newId,transaction)})
    .catch((err)=>{toast(err.message)})
}

//ACTION PERFORM ON FAILED PAYMENT

const onFailedPayment=async(order,transaction)=>{
  setSessionIdTokken(null)
  const newId=uuid()
  await setDoc(
    doc(db, "Payments", newId),{
orderAmount:transaction.transactionAmount,
orderId:order.orderId,
paymentMode:order.activePaymentMethod,
transactionId:transaction.transactionId,
txStatus:transaction.txStatus,
user:userDoc?.email,
referenceId:"",
signature:"",
txTime:""
    }).then(()=>{updateUserDatabase(newId,transaction)})
    .catch((err)=>{toast(err.message)})
}

//UPDATE DATA IN USER DATABASE
const updateUserDatabase=async(newId,transaction)=>{
  // let userPaymentArray
  // let userOldOrder
  // if(!userDoc.Payments){userPaymentArray=[]}
  // else{userPaymentArray=userDoc.Payments}
  // const newUserPaymentArray=[...userPaymentArray,newId]
  // if(!userDoc.Orders){userOldOrder=[]}
  // else{userPaymentArray=userDoc.Orders}
  // const newOrderArray=[...userOldOrder,{restraunt:restaurant,cart:orderCartArray}]
const userDocumentRef=doc(db,"Users",userDoc?.email)
await updateDoc(userDocumentRef,{Payments:arrayUnion(newId)}).then(()=>{
  if(transaction.txStatus==="FAILED"){
  toast.error(transaction.txMsg);
  setTimeout(()=>{
    navigate("/")
        },1500)
        return;
      }
    if(transaction.txStatus==="SUCCESS"){
    updateDoc(userDocumentRef,{Orders:arrayUnion({restraunt:restaurant,cart:orderCartArray})}).then(()=>{
      toast.success(transaction.txMsg); 
      setPaymentModeOn(false) 
      setPaymentMade(true)
      return
    })
    }
}).catch((err)=>{toast(err.message)})
}


  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    let comp = [];
    updatedCheckedState.forEach((item, index) => {
      if (item) {
        comp.push(dropinComponents[index].id);
      }
    });
    setComponents(comp);
  };

  const handleStyleChange = () => (e) => {
    setStyle({
      ...style,
      [e.target.id]: e.target.value
    });
  };
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <p
          className={styles.App_link}
        >
          REVERR PAYMENT GATEWAY
          <p className={styles.warningMessage}>Note: Do Not Refresh This Page!!</p>
        </p>
       
      </header>
      {/* <div className={`${styles.mt_1} ${styles.mb_1}`}>
        <span className={`${styles.order_token} ${styles.mr_8}`}>Order Token :</span>
        <input
          type="text"
          placeholder="order_token"
          id="orderToken"
          value={orderToken}
          className={styles.inputText}
          readonly
        />
      </div> */}
      {/* <p className={styles.order_token}>Choose components</p>
      <ul className={styles.toppings_list}>
        {dropinComponents.map(({ name, id }, index) => {
          return (
            <>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={name}
                value={id}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                key={id}
              />
              <label className={styles.mr_8} htmlFor={`custom-checkbox-${index}`}>
                {name}
              </label>
            </>
          );
        })}
      </ul> */}
      {/* <div style={{display:"none"}}>
        <p className={styles.order_token}>Style your Dropin</p>
        <input
          className={`${styles.style_dropin} ${styles.mr_1}`}
          type="text"
          id="backgroundColor"
          key="backgroundColor"
          placeholder="Background Color"
          onChange={handleStyleChange()}
        />
        <input
          className={`${styles.style_dropin} ${styles.mr_1}`}
          type="text"
          id="theme"
          key="theme"
          placeholder="Theme"
          onChange={handleStyleChange()}
        />
        <input
          className={`${styles.style_dropin} ${styles.mr_1}`}
          type="text"
          id="color"
          key="color"
          placeholder="Color"
          onChange={handleStyleChange()}
        />
        <input
          className={`${styles.style_dropin} ${styles.mr_1}`}
          type="text"
          id="errorColor"
          key="errorColor"
          placeholder="Error Color"
          onChange={handleStyleChange()}
        />
        <input
          className={`${styles.style_dropin} ${styles.mr_1}`}
          type="text"
          id="fontSize"
          key="fontSize"
          placeholder="Font Size"
          onChange={handleStyleChange()}
        />
        <input
          className={`${styles.style_dropin} ${styles.mr_1}`}
          type="text"
          id="fontFamily"
          key="fontFamily"
          placeholder="Font Family"
          onChange={handleStyleChange()}
        />
      </div> */}
      {/* <div style={{display:"none"}} className={styles.mt_2}>
        <input
          type="checkbox"
          name="prod"
          id="prod-check"
          checked={isProd}
          onChange={() => setIsProd(!isProd)}
        />
        <label className={styles.mr_8} htmlFor="prod-check">
          Production Mode
        </label>
      </div> */}
      {/* <button className={`${styles.btn_render} ${styles.mt_2}`} onClick={renderDropin}>
        Pay
      </button> */}
      <div
        className={styles.dropin_parent}
        id="drop_in_container"
      >
        {/* Your component will come here */}
      </div>
    </div>
  );
}

export default CashfreeDropInCont;

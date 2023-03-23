import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./AdminPage.module.css"
import AvailableRestaurant from './Available Restaurant/AvailableRestaurant'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
    const navigate=useNavigate()
  return (
    <>

<section className={styles.outerCont}>
<ToastContainer/>
   <div className={styles.leftCont}>
    <button onClick={()=>navigate("/createrestaurant")} className={styles.createResturantBtn}>Create Resturant</button>
   </div> 
   <div className={styles.rightCont}>
    <AvailableRestaurant/>
    <AvailableRestaurant/>
   </div>
</section>
  </>
  )
}

export default AdminPage
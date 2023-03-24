import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./AdminPage.module.css"
import AvailableRestaurant from './Available Restaurant/AvailableRestaurant'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getRestaurantFromDatabase } from '../../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurantList } from '../../redux/restaurantSlice';

const AdminPage = () => {
    const navigate=useNavigate()
    const[loading,setIsloading]=useState(true)
    const dispatch=useDispatch()
    const restaurantList=useSelector((state)=>state.restaurantList.restaurantList)

console.log("restaurantList",restaurantList)

    const getRestaurants = async () => {
      const results = await getRestaurantFromDatabase();
      if (results.length) {
        dispatch(setRestaurantList([...results]));
      }
      setIsloading(false);
    };
  
    useEffect(() => {
     
      getRestaurants();
    }, []);

  return (
    <>
<section className={styles.outerCont}>
<ToastContainer/>
   <div className={styles.leftCont}>
    <button onClick={()=>navigate("/createrestaurant")} className={styles.createResturantBtn}>Create Resturant</button>
   </div> 
   <div className={styles.rightCont}>
    {!restaurantList&&<h1 style={{fontSize:"2rem"}}>Loading....</h1>}
   {restaurantList?.map((restaurant)=>{
    return <>
    <AvailableRestaurant key={restaurant.id} restaurant={restaurant}/>
    </>
   })}

   </div>
</section>
  </>
  )
}

export default AdminPage
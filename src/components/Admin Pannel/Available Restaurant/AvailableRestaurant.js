import React, { useState } from 'react'
import styles from "./AvailableRestaurant.module.css"
import { deleteRestaurantFromFirebase } from '../../../firebase/config'
import { useDispatch } from 'react-redux'
import { deleteRestaurant } from '../../../redux/restaurantSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const AvailableRestaurant = ({restaurant,setIndividualResMenuData,setIndividualResComboMenuData}) => {

const dispatch=useDispatch()
const navigate=useNavigate()
const[loading,setLoading]=useState(false)
// const[individualResMenuData,setIndividualResMenuData]=useState([])
// const[individualResComboMenuData,setIndividualResComboMenuData]=useState([])


const handleDeleteRestaurant=async(id)=>{
  setLoading(true)
await deleteRestaurantFromFirebase(id)
dispatch(deleteRestaurant(id))
setLoading(false)
toast.success("Successfully Deleted")
}

  return (
    <>
    
    <section className={styles.outerCont}>
       <div className={styles.menuIndItemCont}>
       <h1 className={styles.titlee}>RESTAURANT
       </h1>
            <div  className={styles.inputCont}>
            <p className={styles.label}>Name </p>
            <p className={styles.menuItemValue}>{restaurant.name}</p>
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Description </p>
            <p className={styles.menuItemValue}>{restaurant.desc}</p>
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Location </p>
            <p className={styles.menuItemValue}>{restaurant.location}</p>
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Category </p>
            {restaurant?.category?.length===0&&<p style={{width:"70%"}}>No Category To display</p>}
           {restaurant?.category?.length!==0&&<div className={styles.listDisplayCont}>
           {restaurant?.category?.map((item,idx)=>{return <p className={styles.listItem} key={idx}>{item}</p> })}
           </div>}
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Cuisine </p>
            {restaurant?.cusine?.length===0&&<p style={{width:"70%"}}>No Cuisine To display</p>}
            {restaurant?.cusine?.length!==0&&<div className={styles.listDisplayCont}>
            {restaurant?.cusine?.map((item,idx)=>{return <p className={styles.listItem} key={idx}>{item}</p> })}
            </div>}
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Image </p>
            <img className={styles.menuItemImage} src={restaurant.image} alt="menuImage" />
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Price For One </p>
            <p className={styles.menuItemValue}>₹ {restaurant.price}</p>
            </div>

            <div className={styles.buttonContainer}>
              {restaurant?.menu.length>0&&<button onClick={()=>setIndividualResMenuData(restaurant?.menu)} className={styles.button}>View Menu</button>}
              {(restaurant?.comboMenu&&restaurant?.comboMenu.length>0)&&<button onClick={()=>setIndividualResComboMenuData(restaurant?.comboMenu)} className={styles.button}>View Combo Menu</button>}
              <button onClick={()=>navigate("/editRestaurant",{state:restaurant})} className={styles.button}>Edit</button>
              <button onClick={()=>handleDeleteRestaurant(restaurant.id)} className={styles.button}>Delete</button>
            </div>
            </div>
    </section>
    </>
  )
}

export default AvailableRestaurant
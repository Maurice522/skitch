import React, { useState } from 'react'
import styles from "./AvailableRestaurant.module.css"
import {MdModeEditOutline} from "react-icons/md"
import {AiFillDelete} from "react-icons/ai"
import { deleteRestaurantFromFirebase } from '../../../firebase/config'
import { useDispatch } from 'react-redux'
import { deleteRestaurant } from '../../../redux/restaurantSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const AvailableRestaurant = ({restaurant}) => {

const dispatch=useDispatch()
const navigate=useNavigate()
const[loading,setLoading]=useState(false)

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
       <span className={styles.iconSpan}>
       <MdModeEditOutline onClick={()=>navigate("/editRestaurant",{state:restaurant})} className={styles.editCon}/>
       {!loading&&<AiFillDelete onClick={()=>handleDeleteRestaurant(restaurant.id)} className={styles.deleteIcon}/>}
       </span>
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


            <div style={{border:"none"}} className={styles.form}>
{restaurant.menu.map((item,idx)=>{
    return  <div className={styles.menuIndItemCont} key={idx}>
    <h1 className={styles.titlee}>MENU
    {/* <span className={styles.iconSpan}>
       <MdModeEditOutline onClick={()=>setEditMenu(item)} className={styles.editCon}/>
       </span> */}
    </h1>
            <div  className={styles.inputCont}>
            <p className={styles.label}>Name </p>
            <p className={styles.menuItemValue}>{item.name}</p>
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Category </p>
            {item.category.length===0&&<p style={{width:"70%"}}>No Category To display</p>}
           {item.category.length!==0&&<div className={styles.listDisplayCont}>
           {item.category.map((item,idx)=>{return <p className={styles.listItem} key={idx}>{item}</p> })}
           </div>}
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Cuisine </p>
            {item.cuisine.length===0&&<p style={{width:"70%"}}>No Cuisine To display</p>}
            {item.cuisine.length!==0&&<div className={styles.listDisplayCont}>
            {item.cuisine.map((item,idx)=>{return <p className={styles.listItem} key={idx}>{item}</p> })}
            </div>}
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Tags </p>
            {item.tags.length===0&&<p style={{width:"70%"}}>No Tags To Display</p>}
            {item.tags.length!==0&&<div className={styles.listDisplayCont}>
            {item.tags.map((item,idx)=>{return <p className={styles.listItem} key={idx}>{item}</p> })}
            </div>}
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Image </p>
            <img className={styles.menuItemImage} src={item.image} alt="menuImage" />
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Price </p>
            <p className={styles.menuItemValue}>₹ {item.price}</p>
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Veg </p>
            <p className={styles.menuItemValue}>{item.veg?"Yes":"No"}</p>
            </div>

            <div  className={styles.inputCont}>
            <p className={styles.label}>Half Available </p>
            <p className={styles.menuItemValue}>{item.half.available?"Yes":"No"}</p>
            </div>

            {item.half.available&&<div  className={styles.inputCont}>
            <p className={styles.label}>Half Price </p>
            <p className={styles.menuItemValue}>₹ {item.half.price}</p>
            </div>}
    </div>
    
   
})}
 </div>

            </div>

            


    </section>
    </>
  )
}

export default AvailableRestaurant
import React from 'react'
import styles from "./ShowComboMenuCont.module.css"
import {AiFillCloseCircle} from "react-icons/ai"

const ShowMenuCont = ({individualResComboMenuData,setIndividualResComboMenuData}) => {
  console.log("individualResComboMenuData",individualResComboMenuData)
  return (
   <section className={styles.outerCont}>
    <div className={styles.innerCont}>
    <AiFillCloseCircle onClick={()=>setIndividualResComboMenuData([])} className={styles.closeIcon}/>
        <h1 className={styles.title}>Combo Menu</h1>

        <div style={{border:"none"}} className={styles.form}>
{individualResComboMenuData.map((item,idx)=>{
    return  <div className={styles.menuIndItemCont} key={idx}>

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
            <p className={styles.label}>Addons </p>
            {item.addOns.length===0&&<p style={{width:"70%"}}>No Addons To display</p>}
            {item.addOns.length!==0&&<div className={styles.listDisplayCont}>
            {item.addOns.map((item,idx)=>{return <p className={styles.listItem} key={idx}>{item.text},Rs{item.price}</p> })}
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
  )
}

export default ShowMenuCont

import React, { useEffect } from 'react'
import styles from "./Dropdown.module.css"
import {RxTriangleDown} from "react-icons/rx"
import { useState } from 'react'
import { Fragment } from 'react'

const Dropdown = ({cusineArray,cusineList,handleCusinineOptionClick}) => {
    
    const[isClicked,setIsClicked]=useState(false)

  
  return (
    <>

    <section onClick={()=>setIsClicked(e=>!e)} className={styles.outerCont}>
<p className={styles.value}>{cusineArray.length} Selected</p>
<RxTriangleDown className={styles.arrowIcon}/>

{isClicked?<div className={styles.valueCont}>
    {cusineList.sort().map((item,idx)=>{
        return <>
        <Fragment key={idx}>
        <p style={{backgroundColor:cusineArray.includes(item)?"#3c4ed6":""}} onClick={(e)=>{e.stopPropagation();handleCusinineOptionClick(item)}} className={styles.options}>{item}</p>
        </Fragment>
        </>
    })}
</div>:null}
    </section>
    </>
  )
}

export default Dropdown
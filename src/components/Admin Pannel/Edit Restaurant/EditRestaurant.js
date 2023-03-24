import React, { useEffect, useRef, useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'
import EditMenuItem from '../Edit Menu Item/EditMenuItem'
import styles from "./EditRestaurant.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRestaurantInDataBase, uploadMedia } from '../../../firebase/config'

const cusineList=["Indian","Global","American","Chinese","German","Italian","French","Caribbean","Indonesian","European","Japanese","African","Oceanic","Arab","Spanish","Greek","Mexican","Chifa","Canadian","Thai","Korean","Russian","Regional","Turkish","Brazilian","Mediterranean","Cuban","Irish","Scottish","Egyptian","Belgian","Swedish","British","Tibetian","Lebanese"]

const EditRestaurant = () => {
    const[loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const restaurant=useLocation().state
    const chooseFileRef = useRef(null);

    const[editMenu,setEditMenu]=useState(null)
    const[tempRestaurantImg,settempRestaurantImg]=useState(null)
    const[newRestaurantImg,setnewRestaurantImg]=useState(null)
    const[restaurantCategoryArray,setRestaurantCategoryArray]=useState(restaurant.category)
    const[newRestCategoryItem,setNewRestCategoryItem]=useState("")
    const[restaurantCuisineArray,setRestaurantCuisineArray]=useState(restaurant.cusine)
    const[menuList,setMenuList]=useState(restaurant.menu)

    const[restaurantData,setRestaurantData]=useState({id:restaurant.id,name:restaurant.name,price:restaurant.price,desc:restaurant.desc,coupons:restaurant.coupons,location:restaurant.location,ratings:[],discount:{},foodList:{},type:"delivery"})


useEffect(()=>{
if(!restaurant){navigate("/admin")}
},[])


const chooseFile = () => {
    if (chooseFileRef.current) {
      chooseFileRef.current.click();
    }
  };

//ON IMAGE CHANGE
function onImageChange(e) {
    setnewRestaurantImg(e.target.files[0]);
const fileURL = e.target.files[0];
if (fileURL) {
    settempRestaurantImg(URL.createObjectURL(fileURL));
}
}

const onRestaurantInputChange=(e)=>{
    const{name,value}=e.target
    setRestaurantData((prev)=>{return {...prev,[name]:value}})
}

const addCategoryToList=()=>{
    if(newRestCategoryItem===""){return}
    setRestaurantCategoryArray((prev)=>{return [...prev,newRestCategoryItem]})
    setNewRestCategoryItem("")
}

const removeRestCategoryItem=(e)=>{
    const newRestCatagoryList=restaurantCategoryArray.filter((item)=>{return item!==e})
    setRestaurantCategoryArray(newRestCatagoryList)
}


const handleCusinineOptionClick=(e)=>{
    let cuisine=e

if(restaurantCuisineArray.includes(cuisine)){
    let newCusineList=restaurantCuisineArray.filter((item)=>{return item!==cuisine})
    setRestaurantCuisineArray(newCusineList)
    return
}
setRestaurantCuisineArray((prev)=>{
    return [...prev,cuisine]
})
}


const makeChangesTorestaurantdata=async()=>{
    setLoading(true)
    if(restaurantData.name===""||restaurantData.price===""||restaurantData.desc===""||restaurantData.location===""){toast.error("Fill Compulsory fields");setLoading(false);return}

if(restaurantCategoryArray.length===0&&restaurantCuisineArray.length===0){toast.error("Fill one Field out of Category or Cuisine");setLoading(false);return}

let newImgUrl=null
if(newRestaurantImg){
    newImgUrl=await uploadMedia(newRestaurantImg,"Restaurant") 
}

let newEditedRestaurant={...restaurantData,image:newImgUrl?newImgUrl:restaurant.image,category:restaurantCategoryArray,cusine:restaurantCuisineArray,menu:menuList}

await createRestaurantInDataBase(restaurant.id,newEditedRestaurant)
setLoading(false)
toast.success("Successfully Edited")
setTimeout(()=>{
navigate("/admin")
},1000)
}
  return (
   <>
   <ToastContainer/>
   {editMenu&& <EditMenuItem setEditMenuItem={setEditMenu} editMenuItem={editMenu} restaurantCategory={restaurantCategoryArray} restaurantCuisine={restaurantCuisineArray} menuList={menuList} setMenuList={setMenuList}/>}
   <section className={styles.outerCont}>
    <h1 className={styles.title}>Edit Restaurant Details</h1>

    <div className={styles.inputCont}>
        <p className={styles.label}>Name*</p>
        <input onChange={onRestaurantInputChange} className={styles.input} name="name" type="text" placeholder='Name' value={restaurantData.name}/>
    </div>

    <div className={styles.inputCont}>
        <p className={styles.label}>Description*</p>
        <input onChange={onRestaurantInputChange} className={styles.input} name="desc" type="text" placeholder='Description' value={restaurantData.desc}/>
    </div>

    <div className={styles.inputCont}>
        <p className={styles.label}>Price*</p>
        <input onChange={onRestaurantInputChange} className={styles.input} name="price" type="text" placeholder='Price' value={restaurantData.price}/>
    </div>

    <div className={styles.inputCont}>
        <p className={styles.label}>Location*</p>
        <input onChange={onRestaurantInputChange} className={styles.input} name="location" type="text" placeholder='Location' value={restaurantData.location}/>
    </div>

    <div className={styles.inputCont}>
        <p className={styles.label}>Image*</p>
        <img className={styles.menuItemImage} src={tempRestaurantImg?tempRestaurantImg:restaurant.image} alt="menuImage" />
            <MdModeEditOutline onClick={chooseFile} className={styles.editiCon}/>
            <input
            onChange={onImageChange}
            ref={chooseFileRef}
            type="file"
            hidden
            className="postImageUpload"
          />
    </div>

    <div className={styles.inputCont}>
            <p className={styles.label}>Cuisine* </p>
            <Dropdown cusineArray={restaurantCuisineArray} cusineList={cusineList} handleCusinineOptionClick={handleCusinineOptionClick}/>
            </div>

    <div className={styles.inpCont}>
            <p className={styles.tagName}>Category* </p>
            <div className={styles.categoryCont}>
            <div className={styles.categoryContInputCont}>
            <input onChange={(e)=>{setNewRestCategoryItem(e.target.value)}} className={styles.categoryContInput} type="text" placeholder='Tags' value={newRestCategoryItem}/>
            <button onClick={addCategoryToList} className={styles.AddbtnCont}>Add</button>
            </div>
            <div className={styles.categoryListCont}>
            {restaurantCategoryArray.map((item,idx)=>{
                return <p onClick={()=>{removeRestCategoryItem(item)}} key={idx} className={styles.categoryItem}>{item} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
    </div>
    
    <section className={styles.menuItemOuterC}>
                <h1 className={styles.menuText}>Menu Items</h1>

                <div style={{border:"none"}} className={styles.form}>
{menuList.map((item,idx)=>{
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
            <div className={styles.btnCont}>
            <button onClick={()=>setEditMenu(item)} className={styles.editBtn}>Edit</button>
            </div>
    </div>
    
   
})}</div>
        <div className={styles.btnCont}>
            <button onClick={()=>navigate("/admin")} className={styles.editBtn}>Cancel</button>
            <button style={{cursor:loading?"default":""}} disabled={loading} onClick={makeChangesTorestaurantdata} className={styles.editBtn}>Save</button>
        </div>
    </section>
  
                
   </section>
   </>
  )
}

export default EditRestaurant
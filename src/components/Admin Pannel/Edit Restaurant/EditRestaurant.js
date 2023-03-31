import React, { useEffect, useRef, useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'
import EditMenuItem from '../Edit Menu Item/EditMenuItem'
import styles from "./EditRestaurant.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createRestaurantInDataBase, uploadMedia } from '../../../firebase/config'
import Toggle from 'react-toggle'
import { SmalluidGenerator } from '../UID GENERATOR/SmallUidGenerator'

const cusineList=["Indian","Global","American","Chinese","German","Italian","French","Caribbean","Indonesian","European","Japanese","African","Oceanic","Arab","Spanish","Greek","Mexican","Chifa","Canadian","Thai","Korean","Russian","Regional","Turkish","Brazilian","Mediterranean","Cuban","Irish","Scottish","Egyptian","Belgian","Swedish","British","Tibetian","Lebanese"]

const EditRestaurant = () => {
    const[loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const restaurant=useLocation().state
    console.log(restaurant)
    const chooseFileRef = useRef(null);
    const[menuAddOnArray,setMenuAddonArray]=useState([])
    const [addOnObj,setAddonObj]=useState({text:"",price:""})
    const[newMenuTagItem,setNewMenuTagItem]=useState("")
    const[newTagMenuItemArray,setNewMenuTagItemArray]=useState([])
    const[newMenuCuisineArray,setNewMenuCuisineArray]=useState([])
    const[newMenuCategoryArray,setNewMenuCategoryArray]=useState([])
    const[newMenuImage,setNewMenuImage]=useState(null)
    const[editMenu,setEditMenu]=useState(null)
    const[editComboMenu,setEditComboMenu]=useState(null)
    const[tempRestaurantImg,settempRestaurantImg]=useState(null)
    const[newRestaurantImg,setnewRestaurantImg]=useState(null)
    const[restaurantCategoryArray,setRestaurantCategoryArray]=useState(restaurant.category)
    const[newRestCategoryItem,setNewRestCategoryItem]=useState("")
    const[restaurantCuisineArray,setRestaurantCuisineArray]=useState(restaurant.cusine)
    const[menuList,setMenuList]=useState(restaurant.menu)
    const[comboMenuList,setComboMenuList]=useState(restaurant.comboMenu)

    const[restaurantData,setRestaurantData]=useState({id:restaurant.id,name:restaurant.name,price:restaurant.price,desc:restaurant.desc,coupons:restaurant.coupons,location:restaurant.location,ratings:[],discount:{},foodList:{},type:"delivery"})
    
    const[menuData,setMenuData]=useState({id:"",name:"",price:"",veg:false,addOns:"",half:{available:false,price:""}})

useEffect(()=>{
if(!restaurant){navigate("/admin")}
},[])


const addMenuTagToList=()=>{
    if(newMenuTagItem===""){return}
    setNewMenuTagItemArray((prev)=>{return [...prev,newMenuTagItem]})
    setNewMenuTagItem("")
}

const removeMenuTagItem=(e)=>{
    const newMenuTagList=newTagMenuItemArray.filter((item)=>{return item!==e})
    setNewMenuTagItemArray(newMenuTagList)
}


const handleMenuCategoryClick=(e)=>{
    let text=e.target.innerHTML
  
    if(e.target.className===styles.menuCategoryContainer){return}
    if(newMenuCategoryArray.includes(text)){
      let newTagArr=newMenuCategoryArray.filter((item)=>{return item!==text})
      setNewMenuCategoryArray(newTagArr)

      
    }
    else{setNewMenuCategoryArray((prev)=>{return [...prev,text]})
 
    }
  }

  const handleMenuCuisineClick=(e)=>{
    let text=e.target.innerHTML
  
    if(e.target.className===styles.menuCusineContainer){return}
    if(newMenuCuisineArray.includes(text)){
      let newTagArr=newMenuCuisineArray.filter((item)=>{return item!==text})
      setNewMenuCuisineArray(newTagArr)
      
    }
    else{setNewMenuCuisineArray((prev)=>{return [...prev,text]})
  
    }
  }

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

const handleMenuCardInput=(e)=>{
    const{name,value}=e.target
    setMenuData((prev)=>{return {...prev,[name]:value}})
}


const createNewMenuList=async()=>{
    if(menuData.name===""||menuData.price===""||newMenuImage===null){toast.error("Fill Compulsory Fields");return}
    if(newMenuCategoryArray.length===0&&newMenuCuisineArray.length===0){toast.error("Fill one Field out of Category or Cuisine");return}
    setLoading(true)
    let menuUid=restaurant.id+SmalluidGenerator()
    let imgUrl=null
    if(newMenuImage){imgUrl=await uploadMedia(newMenuImage,"Restaurant/Menu")}
    let newMenuData={...menuData,image:imgUrl,id:menuUid,category:newMenuCategoryArray,cuisine:newMenuCuisineArray,tags:newTagMenuItemArray}
    setMenuList((prev)=>{return [...prev,newMenuData]})
    setMenuData({id:"",name:"",price:"",veg:false,addOns:"",half:{available:false,price:""}})
    setNewMenuTagItemArray([])
    setNewMenuImage(null)
    setNewMenuCategoryArray([])
    setNewMenuCuisineArray([])
    setLoading(false)
    toast.success("Menu Created")
    }

    const handleMenuItemDel=(id)=>{
        const newMenuList=menuList.filter((item)=>{return item.id!==id})
        setMenuList(newMenuList)
    }

    const handleComboMenuItemDel=(id)=>{
        const newComboMenuList=comboMenuList.filter((item)=>{return item.id!==id})
        setMenuList(newComboMenuList)
    }

const makeChangesTorestaurantdata=async()=>{
    setLoading(true)
    if(restaurantData.name===""||restaurantData.price===""||restaurantData.desc===""||restaurantData.location===""){toast.error("Fill Compulsory fields");setLoading(false);return}

if(restaurantCategoryArray.length===0&&restaurantCuisineArray.length===0){toast.error("Fill one Field out of Category or Cuisine");setLoading(false);return}
if(menuList.length===0&&comboMenuList.length===0){toast.error("Must have atleast One Menu or combo Menu");return}

let newImgUrl=null
if(newRestaurantImg){
    newImgUrl=await uploadMedia(newRestaurantImg,"Restaurant") 
}

let newEditedRestaurant={...restaurantData,image:newImgUrl?newImgUrl:restaurant.image,category:restaurantCategoryArray,cusine:restaurantCuisineArray,menu:menuList,comboMenu:comboMenuList}

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
   {editComboMenu&&<EditMenuItem setEditMenuItem={setEditComboMenu} editMenuItem={editComboMenu} restaurantCategory={restaurantCategoryArray} restaurantCuisine={restaurantCuisineArray} menuList={comboMenuList} setMenuList={setComboMenuList}/>}
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

    <div className={styles.inputContCuisine}>
            <div className={styles.inputCont}>
            <p className={styles.label}>Cuisine* </p>
            <div className={styles.cuisineDropdownNOpt}>
            <Dropdown cusineArray={restaurantCuisineArray} cusineList={cusineList} handleCusinineOptionClick={handleCusinineOptionClick}/>

            <div className={styles.categoryListCont}>
            {restaurantCuisineArray.map((item,idx)=>{
                return <p onClick={()=>{handleCusinineOptionClick(item)}} key={idx} className={styles.categoryItem}>{item} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
            </div>
            
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
    

    {/* MENU CARD MAKING */}
    {/* {(restaurantCategoryArray.length!==0||restaurantCuisineArray.length!==0)&&
            <section className={styles.menuItemCont}>
            <h1 className={styles.menuText}>Create Menu</h1>
            <div className={styles.menuForm}>

            <div className={styles.inputCont}>
            <p className={styles.label}>Menu Name* </p>
            <input onChange={handleMenuCardInput} name='name' className={styles.input} type="text" placeholder='Menu Name' value={menuData.name}/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Tags </p>
            <div className={styles.categoryCont}>
            <div className={styles.categoryContInputCont}>
            <input onChange={(e)=>{setNewMenuTagItem(e.target.value)}} className={styles.categoryContInput} type="text" placeholder='Tags' value={newMenuTagItem}/>
            <button onClick={addMenuTagToList} className={styles.AddbtnCont}>Add</button>
            </div>
            <div className={styles.categoryListCont}>
            {newTagMenuItemArray.map((item,idx)=>{
                return <p onClick={()=>{removeMenuTagItem(item)}} key={idx} className={styles.categoryItem}>{item} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Price* </p>
            <input onChange={handleMenuCardInput} name='price' className={styles.input} type="number" placeholder='Price' value={menuData.price}/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Veg* </p>
            <Toggle
  defaultChecked={menuData.veg}
  aria-label='No label tag'
  onChange={()=>{setMenuData((prev)=>{return{...prev,veg:!menuData.veg}})}} />
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Image*: </p>
            <input onChange={(e)=>{setNewMenuImage(e.target.files[0])}} className={styles.input} type="file" accept="image/png, image/gif, image/jpeg"/>
            </div>
            

            <div className={styles.inputCont}>
            <p className={styles.label}>Category* </p>
            {restaurantCategoryArray.length===0&&<p>No Category Choosen Above</p>}
            <div onClick={handleMenuCategoryClick} className={styles.menuCategoryContainer}>
            {restaurantCategoryArray.map((item,idx)=>{
                return <p style={{backgroundColor:newMenuCategoryArray.includes(item)?"#2a72de":"",color:newMenuCategoryArray.includes(item)?"white":""}} key={idx} value={item} className={styles.menuCategory}>{item}</p>
            })}
              
            </div>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Cuisine* </p>
            {restaurantCuisineArray.length===0&&<p>No Cuisine Choosen Above</p>}
            <div onClick={handleMenuCuisineClick} className={styles.menuCusineContainer}>
            {restaurantCuisineArray.map((item,idx)=>{
                return <p style={{backgroundColor:newMenuCuisineArray.includes(item)?"#2a72de":"",color:newMenuCuisineArray.includes(item)?"white":""}} key={idx} value={item} className={styles.menuCuisine}>{item}</p>
            })}
            </div>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Addons </p>
            <input onChange={handleMenuCardInput} name='addOns' className={styles.input} type="text" placeholder='Addons' value={menuData.addOns}/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Half Available* </p>
            <Toggle
  defaultChecked={menuData.half.available}
  aria-label='No label tag'
  onChange={()=>{setMenuData((prev)=>{return{...prev,half:{available:!menuData.half.available,price:""}}})}} />
            </div>

            {menuData.half.available&&<div className={styles.inputCont}>
            <p className={styles.label}>Half Price* </p>
            <input onChange={(e)=>{setMenuData((prev)=>{return{...prev,half:{available:true,price:e.target.value}}})}} className={styles.input} type="number" placeholder='Half Price' value={menuData.half.price}/>
            </div>}

            {newMenuCategoryArray.length===0&&newMenuCuisineArray.length===0?null:<button style={{cursor:loading?"default":""}} disabled={loading} onClick={createNewMenuList} className={styles.createMenuBtn}>Create Menu</button>}
            </div>
            </section>
            } */}


                {/* SHOWING MENU ITEMS */}
    {menuList.length>0&&<section className={styles.menuItemOuterC}>
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
            <div className={styles.btnCont}>
            <button onClick={()=>setEditMenu(item)} className={styles.editBtn}>Edit</button>
            <button onClick={()=>handleMenuItemDel(item.id)} className={styles.deleteBtn}>Delete</button>
            </div>
    </div>
    
   
})}</div>
       
    </section>}

               {/* SHOWING COMBO MENU ITEMS */}
               {comboMenuList.length>0&&<section className={styles.menuItemOuterC}>
                <h1 className={styles.menuText}>Combo Menu Items</h1>

                <div style={{border:"none"}} className={styles.form}>
{comboMenuList.map((item,idx)=>{
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
            <div className={styles.btnCont}>
            <button onClick={()=>setEditComboMenu(item)} className={styles.editBtn}>Edit</button>
            <button onClick={()=>handleComboMenuItemDel(item.id)} className={styles.deleteBtn}>Delete</button>
            </div>
    </div>
    
   
})}</div>
       
    </section>}
  
    <div className={styles.btnCont}>
            <button onClick={()=>navigate("/admin")} className={styles.cancelOrSaveBtn}>Cancel</button>
            {menuList.length>0&&<button style={{cursor:loading?"default":""}} disabled={loading} onClick={makeChangesTorestaurantdata} className={styles.cancelOrSaveBtn}>Save</button>}
        </div>        
   </section>
   </>
  )
}

export default EditRestaurant
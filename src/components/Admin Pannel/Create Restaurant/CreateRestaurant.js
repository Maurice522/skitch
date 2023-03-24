import React, { useEffect, useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import styles from "./CreateRestaurant.module.css"
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import { BiguidGenerator } from '../UID GENERATOR/BigUidGenerator'
import { SmalluidGenerator } from '../UID GENERATOR/SmallUidGenerator'
import { createRestaurantInDataBase, uploadMedia } from '../../../firebase/config'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditMenuItem from '../Edit Menu Item/EditMenuItem'

const cusineList=["Indian","Global","American","Chinese","German","Italian","French","Caribbean","Indonesian","European","Japanese","African","Oceanic","Arab","Spanish","Greek","Mexican","Chifa","Canadian","Thai","Korean","Russian","Regional","Turkish","Brazilian","Mediterranean","Cuban","Irish","Scottish","Egyptian","Belgian","Swedish","British","Tibetian","Lebanese"]

const CreateRestaurant = () => {
    const[loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const[restaurantId,setRestaurantId]=useState(null)
    const[cusineArray,setCusineArray]=useState([])
    const[categoryList,setCategoryList]=useState([])
    const[categoryItem,setCategoryItem]=useState("")
    const[tagItem,setTagItem]=useState("")
    const[menuTagsList,setMenuTagList]=useState([])
    
    const[restaurantImage,setrestaurantImage]=useState(null)
    const[menuImage,setMenuImage]=useState(null)
    const[menuCategory,setMenuCategory]=useState([])
    const[menuCuisine,setMenuCuisine]=useState([])
    const[menuList,setMenuList]=useState([])

    const[restaurantData,setRestaurantData]=useState({id:"",name:"",price:"",desc:"",coupons:"",location:"",ratings:[],discount:{},foodList:{},type:"delivery"})

    const[menuData,setMenuData]=useState({id:"",name:"",price:"",veg:false,addOns:"",half:{available:false,price:""}})

    const[editMenuItem,setEditMenuItem]=useState(null)

useEffect(()=>{
    setRestaurantId(BiguidGenerator())
},[])


const handleMenuCategoryClick=(e)=>{
  let text=e.target.innerHTML

  if(e.target.className===styles.menuCategoryContainer){return}
  if(menuCategory.includes(text)){
    let newTagArr=menuCategory.filter((item)=>{return item!==text})
    setMenuCategory(newTagArr)
    // let p=e.target
    // p.className=styles.menuCategory
    
  }
  else{setMenuCategory((prev)=>{return [...prev,text]})
//   let p=e.target
//   p.className=styles.menuCategorySelected
  }
}

const handleMenuCuisineClick=(e)=>{
    let text=e.target.innerHTML
  
    if(e.target.className===styles.menuCusineContainer){return}
    if(menuCuisine.includes(text)){
      let newTagArr=menuCuisine.filter((item)=>{return item!==text})
      setMenuCuisine(newTagArr)
    //   let p=e.target
    //   p.className=styles.menuCuisine
      
    }
    else{setMenuCuisine((prev)=>{return [...prev,text]})
    // let p=e.target
    // p.className=styles.menuCuisineSelected
    }
  }

const handleResturantDataInput=(e)=>{
    const{name,value}=e.target
    setRestaurantData((prev)=>{return {...prev,[name]:value}})
}

const handleMenuCardInput=(e)=>{
    const{name,value}=e.target
    setMenuData((prev)=>{return {...prev,[name]:value}})
}

const handleCusinineOptionClick=(e)=>{
    let cuisine=e

if(cusineArray.includes(cuisine)){
    let newCusineList=cusineArray.filter((item)=>{return item!==cuisine})
    setCusineArray(newCusineList)
    return
}
setCusineArray((prev)=>{
    return [...prev,cuisine]
})
}

const addCategoryToList=()=>{
if(categoryItem===""){return}
setCategoryList((prev)=>{return [...prev,categoryItem]})
setCategoryItem("")
}

const removeCategoryItem=(e)=>{
    const newCategoryList=categoryList.filter((item)=>{return item!==e})
    setCategoryList(newCategoryList)
}

const addMenuTagToList=()=>{
    if(tagItem===""){return}
    setMenuTagList((prev)=>{return [...prev,tagItem]})
    setTagItem("")
}

const removeMenuTagItem=(e)=>{
    const newMenuTagList=menuTagsList.filter((item)=>{return item!==e})
    setMenuTagList(newMenuTagList)
}


const handleMenuItemDel=(id)=>{
    const newMenuList=menuList.filter((item)=>{return item.id!==id})
    setMenuList(newMenuList)
}

const createMenuList=async()=>{
    if(menuData.name===""||menuData.price===""||menuImage===null){toast.error("Fill Compulsory Fields");return}
    if(menuCategory.length===0&&menuCuisine.length===0){toast.error("Fill one Field out of Category or Cuisine");return}
    setLoading(true)
    let menuUid=restaurantId+SmalluidGenerator()
    let imgUrl=null
    if(menuImage){imgUrl=await uploadMedia(menuImage,"Restaurant/Menu")}
    let newMenuData={...menuData,image:imgUrl,id:menuUid,category:menuCategory,cuisine:menuCuisine,tags:menuTagsList}
    setMenuList((prev)=>{return [...prev,newMenuData]})
    setMenuData({id:"",name:"",price:"",veg:false,addOns:"",half:{available:false,price:""}})
    setMenuTagList([])
    setMenuImage(null)
    setMenuCategory([])
    setMenuCuisine([])
    setLoading(false)
    toast.success("Menu Created")
    }
    
    
const createRestaurant=async()=>{
    if(restaurantData.name===""||restaurantData.price===""||restaurantData.desc===""||restaurantData.location===""||restaurantImage===null){toast.error("Fill Compulsory fields");return}
    if(categoryList.length===0&&cusineArray.length===0){toast.error("Fill one Field out of Category or Cuisine");return}
    setLoading(true)
    let imgUrl=null
    if(restaurantImage){
        imgUrl=await uploadMedia(restaurantImage,"Restaurant") 
    }
   
    let newRestaurant={...restaurantData,image:imgUrl,id:restaurantId,category:categoryList,cusine:cusineArray,menu:menuList}
    await createRestaurantInDataBase(restaurantId,newRestaurant)
    setLoading(false)
    toast.success("Successfully Cretated")
    setTimeout(()=>{
    navigate("/admin")
    },1000)
    
}

  return (
    <>
    {editMenuItem&&<EditMenuItem setEditMenuItem={setEditMenuItem} editMenuItem={editMenuItem} restaurantCategory={categoryList} restaurantCuisine={cusineArray} menuList={menuList} setMenuList={setMenuList}
/>}
    <ToastContainer/>
        <section className={styles.outerCont}>
            <h1 className={styles.title}>Create restaurant</h1>

            <div className={styles.form}>
            <div className={styles.inputCont}>
            <p className={styles.label}>Name of Restaurant*  </p>
            <input onChange={handleResturantDataInput} name='name' className={styles.input} type="text" placeholder='Name of restaurant' value={restaurantData.name}/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Short Description* </p>
            <input onChange={handleResturantDataInput} name='desc' className={styles.input} type="text" placeholder='About restaurant' value={restaurantData.desc}/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Price For One* </p>
            <input onChange={handleResturantDataInput} name='price' className={styles.input} type="number" placeholder='Price For One' value={restaurantData.price}/>
            </div>
            
            <div className={styles.inputCont}>
            <p className={styles.label}>Image Of Restaurant* </p>
            <input onChange={(e)=>setrestaurantImage(e.target.files[0])} name='image' className={styles.input} type="file" accept="image/png, image/gif, image/jpeg" />
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Cuisine* </p>
            <Dropdown cusineArray={cusineArray} cusineList={cusineList} handleCusinineOptionClick={handleCusinineOptionClick}/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Category* </p>
            <div className={styles.categoryCont}>
            <div className={styles.categoryContInputCont}>
            <input onChange={(e)=>{setCategoryItem(e.target.value)}} className={styles.categoryContInput} type="text" placeholder='Write Category' value={categoryItem}/>
            <button onClick={addCategoryToList} className={styles.AddbtnCont}>Add</button>
            </div>
            <div className={styles.categoryListCont}>
            {categoryList.map((item,idx)=>{
                return <p onClick={()=>{removeCategoryItem(item)}} key={idx} className={styles.categoryItem}>{item} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
            </div>
            
            <div className={styles.inputCont}>
            <p className={styles.label}>Location*  </p>
            <input onChange={handleResturantDataInput} name='location' className={styles.input} type="text" placeholder='Location' value={restaurantData.location}/>
            </div>
            </div>


            {/* MENU CARD MAKING */}
            {(cusineArray.length!==0||categoryList.length!==0)&&
            <section className={styles.menuItemCont}>
            <h1 className={styles.menuText}>Menu</h1>
            <div className={styles.menuForm}>

            <div className={styles.inputCont}>
            <p className={styles.label}>Menu Name* </p>
            <input onChange={handleMenuCardInput} name='name' className={styles.input} type="text" placeholder='Menu Name' value={menuData.name}/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Tags </p>
            <div className={styles.categoryCont}>
            <div className={styles.categoryContInputCont}>
            <input onChange={(e)=>{setTagItem(e.target.value)}} className={styles.categoryContInput} type="text" placeholder='Tags' value={tagItem}/>
            <button onClick={addMenuTagToList} className={styles.AddbtnCont}>Add</button>
            </div>
            <div className={styles.categoryListCont}>
            {menuTagsList.map((item,idx)=>{
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
            <input onChange={(e)=>{setMenuImage(e.target.files[0])}} className={styles.input} type="file" accept="image/png, image/gif, image/jpeg"/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Category* </p>
            {categoryList.length===0&&<p>No Category Choosen Above</p>}
            <div onClick={handleMenuCategoryClick} className={styles.menuCategoryContainer}>
            {categoryList.map((item,idx)=>{
                return <p style={{backgroundColor:menuCategory.includes(item)?"#2a72de":"",color:menuCategory.includes(item)?"white":""}} key={idx} value={item} className={styles.menuCategory}>{item}</p>
            })}
              
            </div>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Cuisine* </p>
            {cusineArray.length===0&&<p>No Cuisine Choosen Above</p>}
            <div onClick={handleMenuCuisineClick} className={styles.menuCusineContainer}>
            {cusineArray.map((item,idx)=>{
                return <p style={{backgroundColor:menuCuisine.includes(item)?"#2a72de":"",color:menuCuisine.includes(item)?"white":""}} key={idx} value={item} className={styles.menuCuisine}>{item}</p>
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

            {menuCategory.length===0&&menuCuisine.length===0?null:<button style={{cursor:loading?"default":""}} disabled={loading} onClick={createMenuList} className={styles.createMenuBtn}>Create Menu</button>}
            </div>
            </section>
            }


{/* MENU ITEMS */}
            {
                menuList.length!==0&&
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
            <button onClick={()=>setEditMenuItem(item)} className={styles.editBtn}>Edit</button>
            <button onClick={()=>handleMenuItemDel(item.id)} className={styles.deleteBtn}>Delete</button>
            </div>
    </div>
    
   
})}
                

                </div>
                </section>
            }

            {menuList.length!==0&&<button style={{cursor:loading?"default":""}} disabled={loading} onClick={createRestaurant} className={styles.createRestarauntBtn}>Create Restaraunt</button>}
        </section>
    </>
  )
}

export default CreateRestaurant
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
    const[comboTagItem,setComboTagItem]=useState("")
    const[menuTagsList,setMenuTagList]=useState([])
    const[comboMenuTagsList,setComboMenuTagList]=useState([])
    
    const[restaurantImage,setrestaurantImage]=useState(null)
    const[menuImage,setMenuImage]=useState(null)
    const[comboMenuImage,setComboMenuImage]=useState(null)
    const[menuCategory,setMenuCategory]=useState([])
    const[comboMenuCategory,setComboMenuCategory]=useState([])
    const[menuCuisine,setMenuCuisine]=useState([])
    const[comboMenuCuisine,setComboMenuCuisine]=useState([])
    const[menuList,setMenuList]=useState([])
    const[comboMenuList,setComboMenuList]=useState([])
    const[menuAddOnArray,setMenuAddonArray]=useState([])
    const[ComboMenuAddOnArray,setComboMenuAddonArray]=useState([])
    const [addOnObj,setAddonObj]=useState({text:"",price:""})
    const [ComboAddOnObj,setComboAddonObj]=useState({text:"",price:""})

    const[isComboAvailable,setIsComboAvailable]=useState(false)
    const[restaurantData,setRestaurantData]=useState({id:"",name:"",price:"",desc:"",coupons:"",location:"",ratings:[],discount:{},foodList:{},type:"delivery"})

    const[menuData,setMenuData]=useState({id:"",name:"",price:"",veg:false,half:{available:false,price:""}})

    const[comboMenuData,setComboMenuData]=useState({id:"",name:"",desc:"",price:"",veg:false,half:{available:false,price:""}})

    const[editMenuItem,setEditMenuItem]=useState(null)
    const [editComboMenuItem,setEditComboMenuItem]=useState(null)
useEffect(()=>{
    setRestaurantId(BiguidGenerator())
},[])

const handleAddonInpChange=(e)=>{
    const{name,value}=e.target
    setAddonObj((p)=>{
        return {...p,[name]:value}
    })
}

const handleComboAddonInpChange=(e)=>{
    const{name,value}=e.target
    setComboAddonObj((p)=>{
        return {...p,[name]:value}
    })
}

const addAddonToArray=()=>{
    if(addOnObj.text===""||addOnObj.price===""){toast.error('Fill Req Field');return}
    setMenuAddonArray((prev)=>{
        return [...prev,{...addOnObj,id:new Date().getTime()}]
    })
    setAddonObj({text:"",price:""})
}

const addComboAddonToArray=()=>{
    if(ComboAddOnObj.text===""||ComboAddOnObj.price===""){toast.error('Fill Req Field');return}
    setComboMenuAddonArray((prev)=>{
        return [...prev,{...ComboAddOnObj,id:new Date().getTime()}]
    })
    setComboAddonObj({text:"",price:""})
}

const removeAddOnItem=(id)=>{
const newAddONlist=menuAddOnArray.filter((item)=>{return item.id!==id})
setMenuAddonArray(newAddONlist)
}

const removeComboAddOnItem=(id)=>{
    const newComboAddONlist=ComboMenuAddOnArray.filter((item)=>{return item.id!==id})
    setComboMenuAddonArray(newComboAddONlist)
    }

const handleMenuCategoryClick=(e)=>{
  let text=e.target.innerHTML

  if(e.target.className===styles.menuCategoryContainer){return}
  if(menuCategory.includes(text)){
    let newTagArr=menuCategory.filter((item)=>{return item!==text})
    setMenuCategory(newTagArr)
    
  }
  else{setMenuCategory((prev)=>{return [...prev,text]})

  }
}

const handleComboMenuCategoryClick=(e)=>{
    let text=e.target.innerHTML

    if(e.target.className===styles.menuCategoryContainer){return}
    if(comboMenuCategory.includes(text)){
      let newComboTagArr=comboMenuCategory.filter((item)=>{return item!==text})
      setComboMenuCategory(newComboTagArr)
      
    }
    else{setComboMenuCategory((prev)=>{return [...prev,text]})
  
    }
}
const handleMenuCuisineClick=(e)=>{
  
    let text=e.target.innerHTML
  
    if(e.target.className===styles.menuCusineContainer){return}
    if(menuCuisine.includes(text)){
      let newTagArr=menuCuisine.filter((item)=>{return item!==text})
      setMenuCuisine(newTagArr)
  
      
    }
    else{setMenuCuisine((prev)=>{return [...prev,text]})
    
    }
  }
  const handleComboMenuCuisineClick=(e)=>{
  
    let text=e.target.innerHTML
  
    if(e.target.className===styles.menuCusineContainer){return}
    if(comboMenuCuisine.includes(text)){
      let newComboCuisineArr=comboMenuCuisine.filter((item)=>{return item!==text})
      setComboMenuCuisine(newComboCuisineArr)
  
      
    }
    else{setComboMenuCuisine((prev)=>{return [...prev,text]})
    
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

const handleComboMenuCardInput=(e)=>{
    const{name,value}=e.target
    setComboMenuData((prev)=>{return {...prev,[name]:value}})
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
const addComboMenuTagToList=()=>{
    if(comboTagItem===""){return}
    setComboMenuTagList((prev)=>{return [...prev,comboTagItem]})
    setComboTagItem("")
}

const removeMenuTagItem=(e)=>{
    const newMenuTagList=menuTagsList.filter((item)=>{return item!==e})
    setMenuTagList(newMenuTagList)
}
const removeComboMenuTagItem=(e)=>{
    const newComboMenuTagList=comboMenuTagsList.filter((item)=>{return item!==e})
    setComboMenuTagList(newComboMenuTagList)
}


const handleMenuItemDel=(id)=>{
    const newMenuList=menuList.filter((item)=>{return item.id!==id})
    setMenuList(newMenuList)
}

const handleComboMenuItemDel=(id)=>{
    const newComboMenuList=comboMenuList.filter((item)=>{return item.id!==id})
    setComboMenuList(newComboMenuList) 
}

const handleComboAvailableToggle=()=>{
if(isComboAvailable){
    const newCategoryList=categoryList.filter((item)=>{return item!=="Combo"})
    const newcomboMenuCategory=comboMenuCategory.filter((item)=>{return item!=="Combo"})
    setCategoryList(newCategoryList)
    setComboMenuCategory(newcomboMenuCategory)
    setIsComboAvailable(false)
    return
}
setCategoryList((prev)=>{return [...prev,"Combo"]})
setComboMenuCategory((prev)=>{return [...prev,"Combo"]})
setIsComboAvailable(true)
}


const createMenuList=async()=>{
    if(menuData.name===""||menuData.price===""||menuImage===null){toast.error("Fill Compulsory Fields");return}
    if(menuCategory.length===0&&menuCuisine.length===0){toast.error("Fill one Field out of Category or Cuisine");return}
    setLoading(true)
    let menuUid=restaurantId+SmalluidGenerator()
    let imgUrl=null
    if(menuImage){imgUrl=await uploadMedia(menuImage,"Restaurant/Menu")}
    let newMenuData={...menuData,image:imgUrl,id:menuUid,category:menuCategory,cuisine:menuCuisine,tags:menuTagsList,addOns:menuAddOnArray}
    setMenuList((prev)=>{return [...prev,newMenuData]})
    setMenuData({id:"",name:"",price:"",veg:false,half:{available:false,price:""}})
    setMenuTagList([])
    setMenuImage(null)
    setMenuCategory([])
    setMenuCuisine([])
    setMenuAddonArray([])
    setLoading(false)
    toast.success("Menu Created")
    }
  
    const createComboMenuList=async()=>{
        if(comboMenuData.name===""||comboMenuData.desc===""||comboMenuData.price===""||comboMenuImage===null){toast.error("Fill Compulsory Fields");return}
        if(comboMenuCategory.length===0&&comboMenuCuisine.length===0){toast.error("Fill one Field out of Category or Cuisine");return}
        setLoading(true)
        let comboMenuUid=restaurantId+SmalluidGenerator()
        let imgUrl=null
        if(comboMenuImage){imgUrl=await uploadMedia(comboMenuImage,"Restaurant/Menu")}
        let newComboMenuData={...comboMenuData,image:imgUrl,id:comboMenuUid,category:comboMenuCategory,cuisine:comboMenuCuisine,tags:comboMenuTagsList,addOns:ComboMenuAddOnArray}
        setComboMenuList((prev)=>{return [...prev,newComboMenuData]})
        setComboMenuData({id:"",name:"",desc:"",price:"",veg:false,half:{available:false,price:""}})
        setComboMenuTagList([])
        setComboMenuImage(null)
        setComboMenuCategory(["Combo"])
        setComboMenuCuisine([])
        setComboMenuAddonArray([])
        setLoading(false)
        toast.success("Combo Menu Created")
        }  

    
const createRestaurant=async()=>{
    if(restaurantData.name===""||restaurantData.price===""||restaurantData.desc===""||restaurantData.location===""||restaurantImage===null){toast.error("Fill Compulsory fields");return}
    if(categoryList.length===0&&cusineArray.length===0){toast.error("Fill one Field out of Category or Cuisine");return}
    setLoading(true)
    let imgUrl=null
    if(restaurantImage){
        imgUrl=await uploadMedia(restaurantImage,"Restaurant") 
    }
   
    let newRestaurant={...restaurantData,image:imgUrl,id:restaurantId,category:categoryList,cusine:cusineArray,menu:menuList,isComboMenuAvailable:isComboAvailable,comboMenu:comboMenuList}
    await createRestaurantInDataBase(restaurantId,newRestaurant)
    setLoading(false)
    toast.success("Successfully Cretated")
    setTimeout(()=>{
    navigate("/admin")
    },1000)
    
}

  return (
    <>
    {editMenuItem&&<EditMenuItem setEditMenuItem={setEditMenuItem} editMenuItem={editMenuItem} restaurantCategory={categoryList} restaurantCuisine={cusineArray} menuList={menuList} setMenuList={setMenuList}/>}
    {editComboMenuItem&&<EditMenuItem setEditMenuItem={setEditComboMenuItem} editMenuItem={editComboMenuItem} restaurantCategory={categoryList} restaurantCuisine={cusineArray} menuList={comboMenuList} setMenuList={setComboMenuList}/>}
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

            <div className={styles.inputContCuisine}>
            <div className={styles.inputCont}>
            <p className={styles.label}>Cuisine* </p>
            <div className={styles.cuisineDropdownNOpt}>
            <Dropdown cusineArray={cusineArray} cusineList={cusineList} handleCusinineOptionClick={handleCusinineOptionClick}/>

            <div className={styles.categoryListCont}>
            {cusineArray.map((item,idx)=>{
                return <p onClick={()=>{handleCusinineOptionClick(item)}} key={idx} className={styles.categoryItem}>{item} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
            </div>
            
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
            <p className={styles.label}>Food Name* </p>
            <input onChange={handleMenuCardInput} name='name' className={styles.input} type="text" placeholder='Food Name' value={menuData.name}/>
            </div>
            <div className={styles.inputCont}>
            <p className={styles.label}>Food Description* </p>
            <input onChange={handleMenuCardInput} name='desc' className={styles.input} type="text" placeholder='Food Description' value={menuData.desc}/>
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
            <p className={styles.label}>Addons* </p>
            <div className={styles.categoryCont}>
            <div className={styles.categoryContInputCont}>
            <input name='text' onChange={handleAddonInpChange} className={styles.categoryContInput} type="text" placeholder='Write Text' value={addOnObj.text}/>
            <input name='price' onChange={handleAddonInpChange} className={styles.categoryContInput} type="number" placeholder='Write Price' value={addOnObj.price}/>
            <button onClick={addAddonToArray} className={styles.AddbtnCont}>Add</button>
            </div>
            <div className={styles.categoryListCont}>
            {menuAddOnArray.map((item,idx)=>{
                return <p onClick={()=>{removeAddOnItem(item.id)}} key={idx} className={styles.categoryItem}>{item.text},Rs{item.price} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
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

            <div className={styles.inputCont}>
            <p className={styles.label}>Combo </p>
            <Toggle
  defaultChecked={isComboAvailable}
  aria-label='No label tag'
  onChange={()=>{handleComboAvailableToggle()}} />
            </div>

            {/* COMBO MENU */}

            {(isComboAvailable)&&
            <section className={styles.menuItemCont}>
            <h1 className={styles.menuText}>Combo Menu</h1>
            <div className={styles.menuForm}>

            <div className={styles.inputCont}>
            <p className={styles.label}>Food Name* </p>
            <input onChange={handleComboMenuCardInput} name='name' className={styles.input} type="text" placeholder='Food Name' value={comboMenuData.name}/>
            </div>
            <div className={styles.inputCont}>
            <p className={styles.label}>Food Description* </p>
            <input onChange={handleComboMenuCardInput} name='desc' className={styles.input} type="text" placeholder='Food Description' value={comboMenuData.desc}/>
            </div>    
            <div className={styles.inputCont}>
            <p className={styles.label}>Tags </p>
            <div className={styles.categoryCont}>
            <div className={styles.categoryContInputCont}>
            <input onChange={(e)=>{setComboTagItem(e.target.value)}} className={styles.categoryContInput} type="text" placeholder='Tags' value={comboTagItem}/>
            <button onClick={addComboMenuTagToList} className={styles.AddbtnCont}>Add</button>
            </div>
            <div className={styles.categoryListCont}>
            {comboMenuTagsList.map((item,idx)=>{
                return <p onClick={()=>{removeComboMenuTagItem(item)}} key={idx} className={styles.categoryItem}>{item} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Price* </p>
            <input onChange={handleComboMenuCardInput} name='price' className={styles.input} type="number" placeholder='Price' value={comboMenuData.price}/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Veg* </p>
            <Toggle
  defaultChecked={comboMenuData.veg}
  aria-label='No label tag'
  onChange={()=>{setComboMenuData((prev)=>{return{...prev,veg:!comboMenuData.veg}})}} />
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Image*: </p>
            <input onChange={(e)=>{setComboMenuImage(e.target.files[0])}} className={styles.input} type="file" accept="image/png, image/gif, image/jpeg"/>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Category* </p>
            {categoryList.length===0&&<p>No Category Choosen Above</p>}
            <div onClick={handleComboMenuCategoryClick} className={styles.menuCategoryContainer}>
            {categoryList.map((item,idx)=>{
                return <p style={{backgroundColor:comboMenuCategory.includes(item)?"#2a72de":"",color:comboMenuCategory.includes(item)?"white":""}} key={idx} value={item} className={styles.menuCategory}>{item}</p>
            })}
              
            </div>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Cuisine* </p>
            {cusineArray.length===0&&<p>No Cuisine Choosen Above</p>}
            <div onClick={handleComboMenuCuisineClick} className={styles.menuCusineContainer}>
            {cusineArray.map((item,idx)=>{
                return <p style={{backgroundColor:comboMenuCuisine.includes(item)?"#2a72de":"",color:comboMenuCuisine.includes(item)?"white":""}} key={idx} value={item} className={styles.menuCuisine}>{item}</p>
            })}
            </div>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Addons* </p>
            <div className={styles.categoryCont}>
            <div className={styles.categoryContInputCont}>
            <input name='text' onChange={handleComboAddonInpChange} className={styles.categoryContInput} type="text" placeholder='Write Text' value={ComboAddOnObj.text}/>
            <input name='price' onChange={handleComboAddonInpChange} className={styles.categoryContInput} type="number" placeholder='Write Price' value={ComboAddOnObj.price}/>
            <button onClick={addComboAddonToArray} className={styles.AddbtnCont}>Add</button>
            </div>
            <div className={styles.categoryListCont}>
            {ComboMenuAddOnArray.map((item,idx)=>{
                return <p onClick={()=>{removeComboAddOnItem(item.id)}} key={idx} className={styles.categoryItem}>{item.text},Rs{item.price} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
            </div>

            <div className={styles.inputCont}>
            <p className={styles.label}>Half Available* </p>
            <Toggle
  defaultChecked={comboMenuData.half.available}
  aria-label='No label tag'
  onChange={()=>{setComboMenuData((prev)=>{return{...prev,half:{available:!comboMenuData.half.available,price:""}}})}} />
            </div>

            {comboMenuData.half.available&&<div className={styles.inputCont}>
            <p className={styles.label}>Half Price* </p>
            <input onChange={(e)=>{setComboMenuData((prev)=>{return{...prev,half:{available:true,price:e.target.value}}})}} className={styles.input} type="number" placeholder='Half Price' value={comboMenuData.half.price}/>
            </div>}

            {comboMenuCategory.length===0&&comboMenuCuisine.length===0?null:<button style={{cursor:loading?"default":""}} disabled={loading} onClick={createComboMenuList} className={styles.createMenuBtn}>Create Combo</button>}
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
            <p className={styles.label}>Addons </p>
            {item.addOns.length===0&&<p style={{width:"70%"}}>No Addons To display</p>}
            {item.addOns.length!==0&&<div className={styles.listDisplayCont}>
            {item.addOns.map((item,idx)=>{return <p className={styles.listItem} key={idx}>{item.text},Rs{item.price}</p> })}
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

{/* COMBO MENU ITEMS */}
            {
                comboMenuList.length!==0&&
                <section className={styles.menuItemOuterC}>
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
            <button onClick={()=>setEditComboMenuItem(item)} className={styles.editBtn}>Edit</button>
            <button onClick={()=>handleComboMenuItemDel(item.id)} className={styles.deleteBtn}>Delete</button>
            </div>
    </div>
    
   
})}
                

                </div>
                </section>
            }


            {(menuList.length!==0||comboMenuList.length!==0)&&<button style={{cursor:loading?"default":""}} disabled={loading} onClick={createRestaurant} className={styles.createRestarauntBtn}>Create Restaraunt</button>}
        </section>
    </>
  )
}

export default CreateRestaurant
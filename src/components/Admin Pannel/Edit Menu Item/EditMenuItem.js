import React, { useRef, useState } from 'react'
import Toggle from 'react-toggle'
import styles from "./EditMenuItem.module.css"
import "react-toggle/style.css"
import {MdModeEditOutline} from "react-icons/md"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadMedia } from '../../../firebase/config'

const EditMenuItem = ({setEditMenuItem,editMenuItem,restaurantCategory,restaurantCuisine,menuList,setMenuList}) => {
//  console.log("editMenuItem",editMenuItem)
    const[loading,setLoading]=useState(false)
    const[newTagItem,setNewTagItem]=useState("")
    const chooseFileRef = useRef(null);
    const [newAddOnObj,setNewAddonObj]=useState({text:"",price:""})
    const[newAddOnArray,setNewAddOnArray]=useState(editMenuItem.addOns)
    const[tempImgUrl,setTempImgUrl]=useState(null)
    const[newImageFile,setNewImageFile]=useState(null)
    const[newImage,setNewImage]=useState(editMenuItem.image)
    const[newCusineArray,setNewCusineArray]=useState(editMenuItem.cuisine)
    const[newCategoryArray,setNewCategoryArray]=useState(editMenuItem.category)
    const[newMenuTagList,setNewMenuTagList]=useState(editMenuItem.tags)
    const[newMenuData,setNewMenuData]=useState({id:editMenuItem?.id,name:editMenuItem?.name,price:editMenuItem?.price,veg:editMenuItem?.veg,addOns:editMenuItem?.addOns,half:{available:editMenuItem?.half.available,price:editMenuItem?.half.price}})

    const chooseFile = () => {
        if (chooseFileRef.current) {
          chooseFileRef.current.click();
        }
      };

 //ON IMAGE CHANGE
 function onImageChange(e) {
    setNewImageFile(e.target.files[0]);
    const fileURL = e.target.files[0];
    if (fileURL) {
        setTempImgUrl(URL.createObjectURL(fileURL));
    }
  }

    const addMenuTagToList=()=>{
        if(newTagItem===""){return}
        setNewMenuTagList((prev)=>{return [...prev,newTagItem]})
        setNewTagItem("")
    }
    
    const removeMenuTagItem=(e)=>{
        const newTagList=newMenuTagList.filter((item)=>{return item!==e})
        setNewMenuTagList(newTagList)
    }


    const handleMenuCategoryClick=(e)=>{
        let text=e.target.innerHTML
      
        if(e.target.className===styles.menuCategoryContainer){return}
        if(newCategoryArray.includes(text)){
          let newTagArr=newCategoryArray.filter((item)=>{return item!==text})
          setNewCategoryArray(newTagArr)
          let p=e.target
          p.className=styles.menuCategory
          
        }
        else{setNewCategoryArray((prev)=>{return [...prev,text]})
        let p=e.target
        p.className=styles.menuCategorySelected
        }
      }
      
      const handleMenuCuisineClick=(e)=>{
          let text=e.target.innerHTML
        
          if(e.target.className===styles.menuCusineContainer){return}
          if(newCusineArray.includes(text)){
            let newTagArr=newCusineArray.filter((item)=>{return item!==text})
            setNewCusineArray(newTagArr)
            let p=e.target
            p.className=styles.menuCuisine
            
          }
          else{setNewCusineArray((prev)=>{return [...prev,text]})
          let p=e.target
          p.className=styles.menuCuisineSelected
          }
        }

const handleSaveChange=async()=>{
    if(newMenuData.name===""||newMenuData.price===""){toast.error("Fill Compulsory Fields");return}
    if(newCusineArray.length===0&&newCategoryArray.length===0){toast.error("Fill one Field out of Category or Cuisine");return}
    if(newAddOnArray.length===0){toast.error("Have atleast one addon");return}
    setLoading(true)
    let newImgUrl=null
    if(newImageFile){
        newImgUrl=await uploadMedia(newImageFile,"Restaurant/Menu") 
    }
    let EditedNewData={...newMenuData,image:newImgUrl?newImgUrl:editMenuItem.image,category:newCategoryArray,cuisine:newCusineArray,tags:newMenuTagList,addOns:newAddOnArray}
    
    let latestMenulist=menuList.map((menu)=>{
        if(menu.id===editMenuItem.id){return EditedNewData}
    else return menu
    })
    setMenuList(latestMenulist)
    setLoading(false)
    toast.success("Successfully Edited")
    setEditMenuItem(null)
    // console.log("latestMenulist",latestMenulist)
}

const handleMenuCardInput=(e)=>{
    const{name,value}=e.target
    setNewMenuData((prev)=>{return {...prev,[name]:value}})
}

const handleNewAddonInpChange=(e)=>{
  const{name,value}=e.target
  setNewAddonObj((p)=>{
    return {...p,[name]:value}
  })
}

const addNewAddonToArray=()=>{
  if(newAddOnObj.text===""||newAddOnObj.price===""){toast.error('Fill Req Field');return}
    setNewAddOnArray((prev)=>{
        return [...prev,{...newAddOnObj,id:new Date().getTime()}]
    })
    setNewAddonObj({text:"",price:""})
}

const removeNewAddOnItem=(id)=>{
  const newAddONlist=newAddOnArray.filter((item)=>{return item.id!==id})
  setNewAddOnArray(newAddONlist)
  }

  return (
   <section className={styles.outerCont}>
    <div className={styles.innerCont}>
    <ToastContainer/>
    <h1 className={styles.title}>Edit Menu Item</h1>

    <div className={styles.inpCont}>
        <p className={styles.tagName}>Name*</p>
        <input onChange={handleMenuCardInput} name='name' className={styles.input} type="text" placeholder='Name' value={newMenuData.name}/>
    </div>

    <div className={styles.inpCont}>
        <p className={styles.tagName}>Price*</p>
        <input onChange={handleMenuCardInput} name='price' className={styles.input} type="number" placeholder='Name' value={newMenuData.price}/>
    </div>

    <div  className={styles.inpCont}>
            <p className={styles.tagName}>Image* </p>
            <img className={styles.menuItemImage} src={tempImgUrl?tempImgUrl:newImage} alt="menuImage" />
            <MdModeEditOutline onClick={chooseFile} className={styles.editiCon}/>
            <input
            onChange={onImageChange}
            ref={chooseFileRef}
            type="file"
            hidden
            className="postImageUpload"
          />
    </div>


    <div className={styles.inpCont}>
            <p className={styles.tagName}>Tags </p>
            <div className={styles.categoryCont}>
            <div className={styles.categoryContInputCont}>
            <input onChange={(e)=>{setNewTagItem(e.target.value)}} className={styles.categoryContInput} type="text" placeholder='Tags' value={newTagItem}/>
            <button onClick={addMenuTagToList} className={styles.AddbtnCont}>Add</button>
            </div>
            <div className={styles.categoryListCont}>
            {newMenuTagList.map((item,idx)=>{
                return <p onClick={()=>{removeMenuTagItem(item)}} key={idx} className={styles.categoryItem}>{item} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
    </div>

    <div className={styles.inpCont}>
            <p className={styles.tagName}>Category* </p>
            {restaurantCategory.length===0&&<p>No Category Choosen</p>}
            <div onClick={handleMenuCategoryClick} className={styles.menuCategoryContainer}>
            {restaurantCategory.map((item,idx)=>{
                return <p style={{backgroundColor:newCategoryArray.includes(item)?"#2a72de":"",color:newCategoryArray.includes(item)?"white":""}} key={idx} value={item} className={styles.menuCategory}>{item}</p>
            })}
              
            </div>
    </div>
    
    <div className={styles.inpCont}>
            <p className={styles.tagName}>Cuisine* </p>
            {restaurantCuisine.length===0&&<p>No Cuisine Choosen</p>}
            <div onClick={handleMenuCuisineClick} className={styles.menuCusineContainer}>
            {restaurantCuisine.map((item,idx)=>{
                return <p style={{backgroundColor:newCusineArray.includes(item)?"#2a72de":"",color:newCusineArray.includes(item)?"white":""}} key={idx} value={item} className={styles.menuCuisine}>{item}</p>
            })}
            </div>
    </div>
        

    <div className={styles.inpCont}>
            <p className={styles.tagName}>Veg* </p>
            <Toggle
            defaultChecked={newMenuData.veg}
            aria-label='No label tag'
            onChange={()=>{setNewMenuData((prev)=>{return{...prev,veg:!newMenuData.veg}})}} />
    </div>

    <div className={styles.inpCont}>
            <p className={styles.tagName}>Addons* </p>
            <div className={styles.categoryCont}>
            <div className={styles.categoryContInputCont}>
            <input name='text' onChange={handleNewAddonInpChange} className={styles.categoryContInput} type="text" placeholder='Write Text' value={newAddOnObj.text}/>
            <input name='price' onChange={handleNewAddonInpChange} className={styles.categoryContInput} type="number" placeholder='Write Price' value={newAddOnObj.price}/>
            <button onClick={addNewAddonToArray} className={styles.AddbtnCont}>Add</button>
            </div>
            <div className={styles.categoryListCont}>
            {newAddOnArray.map((item,idx)=>{
                return <p onClick={()=>{removeNewAddOnItem(item.id)}} key={idx} className={styles.categoryItem}>{item.text},Rs{item.price} <span className={styles.remove}>X</span></p>
            })}
            </div>
            </div>
            </div>

    <div className={styles.inpCont}>
            <p className={styles.tagName}>Half Available* </p>
            <Toggle
  defaultChecked={newMenuData.half.available}
  aria-label='No label tag'
  onChange={()=>{setNewMenuData((prev)=>{return{...prev,half:{available:!newMenuData.half.available,price:""}}})}} />
    </div>

    {newMenuData.half.available&&<div className={styles.inpCont}>
            <p className={styles.tagName}>Half Price* </p>
            <input onChange={(e)=>{setNewMenuData((prev)=>{return{...prev,half:{available:true,price:e.target.value}}})}} className={styles.input} type="number" placeholder='Half Price' value={newMenuData.half.price}/>
            </div>}


            <div className={styles.btnCont}>
            <button onClick={()=>setEditMenuItem(null)} className={styles.editBtn}>Cancel</button>
            <button style={{cursor:loading?"default":""}} disabled={loading} onClick={handleSaveChange} className={styles.editBtn}>Save Changes</button>
            </div>

    </div>
   </section>
  )
}

export default EditMenuItem
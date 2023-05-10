import { useEffect } from "react";
import NewNav from "./Navbar/NewNav";
import { useState } from "react";

export default function Layout({children}) {
    const[showNavbar,setShowNavbar]=useState(false)
    useEffect(()=>{
if(window.location.pathname==="/createrestaurant"||window.location.pathname==="/admin"){
    setShowNavbar(false)
}
else{setShowNavbar(true)}
    },[window.location.pathnamew])
    return(
        <div>
            {showNavbar&&<NewNav />}
            <div>{children}</div>            
        </div>
    )
}
import { Routes, Route } from "react-router-dom";
// // import routes from "./Route";
// import SignUpModal from "./components/modals/SignUpModal";
// import LogInModal from "./components/modals/LogInModal";
// import OtpModal from "./components/modals/OtpModal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout";
import Home from "./pages";
import { onAuthStateChanged } from 'firebase/auth'
import { auth, getUserFromDatabase } from "./firebase/config";
import { login, logout, setUserData } from './redux/userSlice'
import AdminPage from "./components/Admin Pannel/AdminPage";
import CreateRestaurant from "./components/Admin Pannel/Create Restaurant/CreateRestaurant";
function App() {
  const user = useSelector(state=>state.user);
  const dispatch=useDispatch()

  console.log("user",user)

  //CHECK FOR LOGIN/LOGOUT/ALREADY LOGED IN
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
          })
        );
        //   navigate("/dashboard")
      } else {
        dispatch(logout());
      }
    });
  }, []);


//FETCH USERDATA FROM FIREBASE
const fetchdata=async(email)=>{
  const userDetaill=await getUserFromDatabase(email)
  dispatch(setUserData(userDetaill))
}

//CHECK FOR USER
useEffect(()=>{
if(user.user&&!user.userData){fetchdata(user.user.email)}
},[user])

useEffect(()=>{
if(user.user){fetchdata(user.user.email)}
},[])

  return (
 
    // <Routes>
    //   {routes.map((route) => (
    //     <Route key={route.name} path={route.path} element={route.component} />
    //   ))}
    // </Routes>

    <>
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>}></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
        <Route path="/createrestaurant" element={<CreateRestaurant/>}></Route>
      </Routes>

    </>
   
  );
}

export default App;


import AdminPage from "./components/Admin Pannel/AdminPage";
import Landing from "./pages/Landingpage/Landing";
import Home from "./pages";
import Profile from "./pages/profile";
import Restaurant from "./pages/restaurant";
import Restaurant2 from "./pages/restaurant2";
import CreateRestaurant from "./components/Admin Pannel/Create Restaurant/CreateRestaurant";
import EditRestaurant from "./components/Admin Pannel/Edit Restaurant/EditRestaurant";


const routes = [
  {
    path: "/",
    name: "home",
    component: <Home />,
  },
  {

    path: "/admin",
    name: "admin",
    component: <AdminPage />,
  },
  {

    path: "/createrestaurant",
    name: "createrestaurant",
    component: <CreateRestaurant/>,
  },
  {

    path: "/editRestaurant",
    name: "editRestaurant",
    component: <EditRestaurant/>,
  },
  {
    path: "/profile",
    name: "profile",
    component: <Profile />
  }
];

export default routes;

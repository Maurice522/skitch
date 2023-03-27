
import AdminPage from "./components/Admin Pannel/AdminPage";
import Landing from "./pages/Landingpage/Landing";
import Home from "./pages";
import Profile from "./pages/profile";
import Restaurant from "./pages/restaurant";
import Restaurant2 from "./pages/restaurant2";
import CreateRestaurant from "./components/Admin Pannel/Create Restaurant/CreateRestaurant";
import EditRestaurant from "./components/Admin Pannel/Edit Restaurant/EditRestaurant";
import Cart from "./pages/cart";


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
    path: "/restaurant",
    name: "restaurant",
    component: <Restaurant />
  },
  {
    path: "/restaurant2",
    name: "restaurant2",
    component: <Restaurant2 />
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
  },
  {
    path: "/cart",
    name: "cart",
    component: <Cart />
  }
];

export default routes;

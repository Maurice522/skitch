import Home from "./pages";
import Profile from "./pages/profile";
import Restaurant from "./pages/restaurant";
import Restaurant2 from "./pages/restaurant2";

const routes = [
  {
    path: "/",
    name: "home",
    component: <Home />,
  },
  {
    path: "/profile",
    name: "profile",
    component: <Profile />
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component : <Restaurant />
  },
  {
    path: "/restaurant2",
    name: "restaurant2",
    component: <Restaurant2 />
  }
];

export default routes;

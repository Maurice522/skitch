import Home from "./pages";
import Profile from "./pages/profile";

const routes = [
  {
    path: "/",
    name: "home",
    component: <Home />,
  },
  {
    path: "/profile",
    name: "/profile",
    component: <Profile />
  }
];

export default routes;

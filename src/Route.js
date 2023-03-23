import AdminPage from "./components/Admin Pannel/AdminPage";
import Landing from "./pages/Landingpage/Landing";

const routes = [
  {
    path: "/",
    name: "landing",
    component: <Landing />,
  },
  {
    path: "/admin",
    name: "admin",
    component: <AdminPage />,
  }
];

export default routes;

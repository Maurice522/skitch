// // import { Routes, Route } from "react-router-dom";
// // import routes from "./Route";
// import SignUpModal from "./components/modals/SignUpModal";
// import LogInModal from "./components/modals/LogInModal";
// import OtpModal from "./components/modals/OtpModal";
import Layout from "./components/Layout";
import Home from "./pages";

function App() {
  return (
    // <Routes>
    //   {routes.map((route) => (
    //     <Route key={route.name} path={route.path} element={route.component} />
    //   ))}
    // </Routes>
    <div>
      {/* <SignUpModal
        open={true}
      />
      <LogInModal
        open={true}
      />
      <OtpModal
        open={true}
        num={4574578}
      /> */}
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;

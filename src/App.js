// import { Routes, Route } from "react-router-dom";
// import routes from "./Route";
import SignUpModal from "./components/SignUpModal";
import LogInModal from "./components/LogInModal";
import OtpModal from "./components/OtpModal";

function App() {
  return (
    // <Routes>
    //   {routes.map((route) => (
    //     <Route key={route.name} path={route.path} element={route.component} />
    //   ))}
    // </Routes>
    <div>
          <SignUpModal 
      open={true}
    /> 
     <LogInModal 
      open={true}
    />
    <OtpModal 
      open={true}
      num={4574578}
    />
    </div>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Signin/Login";

// HomePage
// SidebarComponent
function RoutesComponent() {
  const isAuthenticated = localStorage.getItem("autentication");
  console.log(localStorage.getItem("autentication"));

  function loginRedirect(component) {
    if (isAuthenticated) {
      return <Navigate to="/Home" replace />;
    }

    return component;
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={loginRedirect(<Login />)} />
        {/* <Route path="/cadastro" element={loginRedirect(<Signup />)} /> */}
        <Route path="/" Component={Home} />
        {/* {condicao ? seVerdade : falso} */}
        {isAuthenticated ? (
          <>
            <Route path="/" Component={Home} />
            <Route path="/home" Component={Home} />
            {/* <Route path="/bicicletas" Component={Bicicletas} /> */}
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate replace to="/Login" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default RoutesComponent;

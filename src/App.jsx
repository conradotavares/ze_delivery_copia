import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ComponenteModal from "./components/Modal/Modal";
import Home from "./pages/Home/Home";
import RoutesComponent from "./Routes/Routes";

function App() {

  const isAuthenticated = JSON.parse(localStorage.getItem("autentication"));

  return (
    <>
      <BrowserRouter>
      <ComponenteModal/>
      {isAuthenticated ? (<div>
      <Header />
      <Home />
      </div>) : (<RoutesComponent/>)}
      </BrowserRouter>
    </>
  );
}

export default App;

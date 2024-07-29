import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {

  const navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();
    console.log("Clicou no botão");    
    navigate("/Login");
}
  return (
    <>
      <div>
        <header className="header">
          <img
            className="logo-header"
            src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwhite-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D121%26h%3D40%26dpr%3D2%26fm%3Dpng&w=128&q=75"
          ></img>
          <button className="header-button" onClick={handleSignin}>
            ENTRAR
          </button>
        </header>
      </div>
    </>
  );
}

export default Header;

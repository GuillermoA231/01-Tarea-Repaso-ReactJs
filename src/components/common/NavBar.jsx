import "../../styles/index.css";
import MenuBar from "./MenuBar";
import Busqueda from "./Busqueda";
import ResponsiveButton from "./ResponsiveButton";
import dataMenu from "../../data/Menu.json";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <ResponsiveButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MenuBar data={dataMenu}/>
          <Busqueda />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

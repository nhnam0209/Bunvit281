import AboutUs from "./component/AboutUs/AboutUs";
import Order from "./component/Order/Order";
import Gallery from "./component/Gallery/Gallery";
import Intro from "./component/Intro/Intro";
import "./app.scss"
import Location from "./component/Location/Location";
// import Scrollbutton from "./function/Scrollbutton";
import Navigation from "./component/Navigation/Navigation";
import Menu from "./component/Menu/Menu";
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <div className="app">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className="sections">

        <Intro/>
        <AboutUs/>
        <Gallery/>
        <Location/>
        <Order/>
        {/* <Scrollbutton/> */}
      </div>
    </div>

  );
}

export default App;

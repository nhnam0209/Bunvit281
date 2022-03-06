import AboutUs from "./component/AboutUs/AboutUs";
import Order from "./component/Order/Order";
import Gallery from "./component/Gallery/Gallery";
import Intro from "./component/Intro/Intro";
import Navbar from "./component/Navbar/Navbar";
import "./app.scss"
import Location from "./component/Location/Location";
// import Scrollbutton from "./function/Scrollbutton";

function App() {
  return (
    <div className="app">
      <Navbar/>
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

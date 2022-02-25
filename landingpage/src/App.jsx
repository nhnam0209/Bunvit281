import AboutUs from "./component/AboutUs/AboutUs";
import Contact from "./component/Contact/Contact";
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
        <Contact/>
        {/* <Scrollbutton/> */}
      </div>
    </div>
  );
}

export default App;

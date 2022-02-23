import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import Intro from "./Intro/Intro";
import Navbar from "./Navbar/Navbar";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <AboutUs/>
        <Gallery/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

import Navbar from "./Components/Navbar.js"; 
import Home from "./Components/Home.js"; 
import About from "./Components/About.js"; 
import People from "./Components/People.js"; 
import Footer from "./Components/Footer.js"; 
import Gallery from "./Components/Gallery.js"; 

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <People></People>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;

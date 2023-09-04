import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Navbar from './header/page_navigator/NavBar';
import About from './page/About';
import Brands from './page/Brands';
import Shop from './page/Shop';
import Footer from './footer/Footer';
import Home from './page/Home.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/shop' element={<Shop/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

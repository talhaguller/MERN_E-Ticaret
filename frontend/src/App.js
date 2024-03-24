import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/product/:id" element={<Detail/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;   

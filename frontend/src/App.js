import "./App.css";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import Signup from "./Screens/Signup";
import { CartProvider } from "./Components/ContextReducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyOrders from "./Screens/MyOrders";



function App() {
  return (
<CartProvider>



    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/> 
          <Route exact path="/signup" element={<Signup/>}/>      
          <Route exact path="/myOrder" element={<MyOrders/>}/>      
     
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;

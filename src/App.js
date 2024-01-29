import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/shop' ;
import ShopCategory from './pages/shopCategory' ;
import Product from './pages/product';
import Cart from './pages/cart' ;
import LoginSignup from './pages/loginSignup' ;
import Footer from './components/Footer/footer';
import men_banner from'./components/assets/banner_mens.png'
import women_banner from'./components/assets/banner_women.png'
import kids_banner from'./components/assets/banner_kids.png'
console.log("jenciec",window.location.pathname);
function App() {
  return (
    <div >
      <BrowserRouter> 
     <Navbar/>
      <Routes>
         <Route path ='/' element = {<Shop/>}/> 
         <Route path ='/men' element = {<ShopCategory banner ={men_banner} category ="men"/>}/>
         <Route path ='/women' element = {<ShopCategory banner ={women_banner} category ="women"/>}/>
         <Route path ='/kid' element = {<ShopCategory banner ={kids_banner} category ="kid"/>}/>
         <Route path ="/product" element = {<Product/>}>
          <Route path =':productId' element = {<Product/>}/>
         </Route>
         <Route path ='/Cart' element = {<Cart/>}/>
         <Route path ='/login' element = {<LoginSignup/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

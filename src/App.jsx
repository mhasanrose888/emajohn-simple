import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './fakeData/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import Footer from './components/Footer/Footer';
import NoteFound from './components/NoteFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
function App() {
    return (
      <>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/review" element={<Review/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
            <Route exact path='/*' element={<NoteFound/>}/>
            <Route path='/dp/:productKey' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            
            
          </Routes>
        </BrowserRouter>
        <Footer/>
        

      </>
    )
  }

export default App;

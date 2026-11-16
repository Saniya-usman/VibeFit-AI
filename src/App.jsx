import React from 'react'
import './index.css'
import Navbar from './Components/navbar/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Trending from './pages/Trending.jsx'
import {  Routes, Route} from 'react-router-dom'
import Kids from './pages/Kids.jsx'
import ProductList from './pages/ProductList.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Collection from './pages/collection.jsx'
import TryOn from './pages/TryOn.jsx'
import Kurta from './pages/Kurtis/Kurta.jsx'
import Sarees from './pages/Sarees/Sarees.jsx'
import Dresses from './pages/Dresses/Dresses.jsx'
import Tops from './pages/Tops/Tops.jsx'
import Jeans from './pages/Jeans/Jeans.jsx'
import JeansDetails from './pages/Jeans/JeansDetails.jsx'
import KurtaDetails from './pages/KurtaDetails.jsx'
import SareeDetails from './pages/SareeDetails.jsx'
import DressDetails from './pages/DressDetails.jsx'
import Shirt from './Mens/Shirt.jsx'
import ShirtDetails from './Mens/ShirtDetails.jsx'
import KidsShirt from './Kids/KidsShirt.jsx'
import KidsDetails from './Kids/KidsDetails.jsx'
import KidsDress from './Kids/KidsDress.jsx'
import KidsDressDetails from './Kids/KidsDressDetails.jsx'
import KidsJeans from './Kids/KidsJeans.jsx'
import KidsJeansDetails from './Kids/KidsJeansDetails.jsx'
import KidsTshirt from './Kids/KidsTshirt.jsx'
import KidsTshirtDetails from './Kids/KidsTshirtDetails.jsx'
import KidsShoes from './Kids/KidsShoes.jsx'
import KidsShoesDetails from './Kids/KidsShoesDetails.jsx'
import TopsDetails from './pages/Tops/TopsDetails.jsx'
import Menskurta from './Mens/Menskurta.jsx'
import MenskurtaDetails from './Mens/MenskurtaDetails.jsx'
import Mensjeans from './Mens/Mensjeans.jsx'
import MensjeansDetails from './Mens/MensjeansDetails.jsx'
import  Menstshirt from './Mens/Menstshirt.jsx'
import MenstshirtDetails from './Mens/MenstshirtDetails.jsx'
import Mensjacket from './Mens/Mensjacket.jsx'
import MensjacketDetails from './Mens/MensjacketDetails.jsx'
import Footer from './Components/navbar/Footer.jsx'
const App = () => {
  return (
    <div>
      
      <Navbar />
      
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/Kids' element={<Kids/>} />
        <Route path='/trending' element={<ProductList />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/TryOn' element={<TryOn />} />
        <Route path='/kurtis' element={<Kurta />} />
        <Route path='/sarees' element={<Sarees />} />
        <Route path='/dresses' element={<Dresses />} />
        <Route path='/tops' element={<Tops />} />
        <Route path='/jeans' element={<Jeans />} />
        <Route path='/kurtis/:id' element={<KurtaDetails />} />
        <Route path='/sarees/:id' element={<SareeDetails />}/>
        <Route path='/dresses/:id' element={<DressDetails/>} />
        <Route path='/shirts' element={<Shirt/>}/>
        <Route path='/shirts/:id' element={<ShirtDetails/>}/>
        <Route path='/KidsShirt' element={<KidsShirt/>}/>
        <Route path='/KidsShirt/:id' element={<KidsDetails/>} />
        <Route path='/KidsDress' element={<KidsDress/>}/>
        <Route path='/KidsDress/:id' element={<KidsDressDetails/>}/>
        <Route path='/KidsJeans' element={<KidsJeans/>}/>
        <Route path='/KidsJeans/:id' element={<KidsJeansDetails/>}/>
        <Route path='/KidsTshirt' element={<KidsTshirt/>}/>
        <Route path='/KidsTshirt/:id' element={<KidsTshirtDetails/>}/>
        <Route path='/KidsShoes' element={<KidsShoes/>}/>
        <Route path='/KidsShoes/:id' element={<KidsShoesDetails/>}/>
        <Route path='/tops/:id' element={<TopsDetails/>}/>
        <Route path='/Menskurta' element={<Menskurta/>}/> 
        <Route path='/Menskurta/:id' element={<MenskurtaDetails/>}/>
        <Route path='/Mensjeans'element={<Mensjeans/>}/>
        <Route path='/Mensjeans/:id' element={<MensjeansDetails/>}/>
        <Route path='/Menstshirt' element={<Menstshirt/>}/>
        <Route path='/Menstshirt/:id' element={<MenstshirtDetails/>}/>
        <Route path='/Mensjacket' element={<Mensjacket/>}/>
        <Route path='/Mensjacket/:id' element={<MensjacketDetails/>}/>
        <Route path='/jeans/:id' element={<JeansDetails/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App


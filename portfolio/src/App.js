import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './components/Home'
import Creaciones from './components/Creaciones'
import Favs from './components/Favs'
import InfoPersonal from './components/InfoPersonal'
import Navbarr from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div>
      
      <BrowserRouter>
          <Routes>
           <Route path="/" element={<Navbarr />}> 
          
            <Route path="/home" element={<Home />}></Route>
            <Route path="/creaciones" element={<Creaciones />}></Route>
            <Route path="/favs" element={<Favs />}></Route>
            <Route path="/infoPersonal" element={<InfoPersonal />}></Route>            
            </Route> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
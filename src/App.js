import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Inicio from './pages/Inicio';
import Reservas from './pages/Reservas';
import Eventos from './pages/Eventos';
import Ubicacion from './pages/Ubicacion';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Reservas" element={<Reservas />}/>
          <Route path="/Eventos" element={<Eventos />}/>
          <Route path='/Ubicacion' element={<Ubicacion />}/>
      </Routes>
    </Router>
  )
}

export default App;
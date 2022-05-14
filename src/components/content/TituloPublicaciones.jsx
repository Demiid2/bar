import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
const TituloPublicaciones = () => {
  return (
      <div>
    <div className="jumbotron p-4 p-md-5 rounded text-white bgPosts">
    <div className="col-md-4 px-0">
      <h1 className="display-6 font-italic">Lo más reciente en Isidro Resto Bar</h1>
      <p className="lead my-3">Ultimos invitados, y todo lo que no te podes perder está acá</p>
      <a href="#posts"><p>ver más</p></a>
    </div>
  </div>
  </div>
  )
}

export default TituloPublicaciones;
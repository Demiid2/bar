import React, { Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap'
import TituloPublicaciones from './content/TituloPublicaciones';
import ListaDeEventos from './content/ListaDeEventos';
import './Publicaciones.css';
import Posts from './content/Posts';
const Publicaciones = () => {
  return (
    <Fragment>
        <TituloPublicaciones />
        <ListaDeEventos />
        <Posts />
    </Fragment>
  )
}

export default Publicaciones